import { useEffect, useRef, useState } from "react";

export type DropdownOption = {
  title: string;
  value: string;
};

type DropdownProps = {
  options: DropdownOption[];
  selected: string | string[];
  onSelect: (value: string) => void;
  multiple?: boolean;
  placeholder?: string;
  className?: string;
};

export const Dropdown = ({
  options,
  selected,
  onSelect,
  multiple = false,
  placeholder = "Select an option",
  className = "",
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isSelected = (value: string) => {
    return multiple
      ? (selected as string[]).includes(value)
      : selected === value;
  };

  const getDisplayText = () => {
    if (multiple) {
      const selectedOptions = options.filter((opt) =>
        (selected as string[]).includes(opt.value)
      );
      return selectedOptions.length > 0
        ? selectedOptions.map((opt) => opt.title).join(", ")
        : placeholder;
    }
    const selectedOption = options.find((opt) => opt.value === selected);
    return selectedOption?.title || placeholder;
  };

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      <button
        className="w-full px-4 py-2 text-left bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        {getDisplayText()}
      </button>

      <div
        className={`absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg max-h-60 overflow-y-auto transition-all duration-200 ease-in-out transform ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        {options.map((option) => (
          <button
            key={option.value}
            className={`w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${
              isSelected(option.value)
                ? "bg-blue-50 dark:bg-blue-900/20 text-blue-500 dark:text-blue-400"
                : "text-gray-700 dark:text-gray-300"
            }`}
            onClick={() => {
              onSelect(option.value);
              if (!multiple) setIsOpen(false);
            }}
          >
            {option.title}
          </button>
        ))}
      </div>
    </div>
  );
};
