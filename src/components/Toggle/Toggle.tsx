import { type ReactNode } from "react";

type ToggleVariant = "default" | "outlined" | "filled";
type ToggleSize = "sm" | "md" | "lg";

type ToggleProps = {
  children: ReactNode;
  variant?: ToggleVariant;
  size?: ToggleSize;
  isActive?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const sizeClasses = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-1.5 text-base",
  lg: "px-4 py-2 text-lg",
};

const variantClasses = {
  default: {
    active:
      "bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700",
    inactive:
      "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",
  },
  outlined: {
    active:
      "border-2 border-blue-500 text-blue-500 bg-blue-50 dark:bg-blue-900/20",
    inactive:
      "border-2 border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800",
  },
  filled: {
    active:
      "bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700",
    inactive:
      "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600",
  },
};

export const Toggle = ({
  children,
  variant = "default",
  size = "md",
  isActive = false,
  className = "",
  onClick,
  disabled = false,
}: ToggleProps) => {
  const baseClasses =
    "rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <button
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${
          isActive
            ? variantClasses[variant].active
            : variantClasses[variant].inactive
        }
        ${className}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
