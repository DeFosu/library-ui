import { type ReactNode } from "react";
import { Toggle } from "./Toggle";

type ToggleContainerProps = {
  children?: ReactNode;
  options: string[];
  selected: string | string[];
  onSelect: (value: string) => void;
  multiple?: boolean;
  className?: string;
};

export const ToggleContainer = ({
  children,
  options,
  selected,
  onSelect,
  multiple = false,
  className = "",
}: ToggleContainerProps) => {
  const isSelected = (option: string) => {
    return multiple
      ? (selected as string[]).includes(option)
      : selected === option;
  };

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {children && (
        <div className="text-xl font-bold dark:text-white">{children}</div>
      )}
      <div className="flex gap-4">
        {options.map((option) => (
          <Toggle
            key={option}
            isActive={isSelected(option)}
            onClick={() => onSelect(option)}
          >
            {option}
          </Toggle>
        ))}
      </div>
    </div>
  );
};
