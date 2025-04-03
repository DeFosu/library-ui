import { type ReactNode } from "react";
import { Toggle, type ToggleOption } from "./Toggle";

type ToggleContainerProps = {
  children?: ReactNode;
  options: ToggleOption[];
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
  const isSelected = (value: string) => {
    return multiple
      ? (selected as string[]).includes(value)
      : selected === value;
  };

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {children && (
        <div className="text-xl font-bold dark:text-white">{children}</div>
      )}
      <div className="flex gap-4">
        {options.map((option) => (
          <Toggle
            key={option.value}
            option={option}
            isActive={isSelected(option.value)}
            onClick={() => onSelect(option.value)}
          />
        ))}
      </div>
    </div>
  );
};
