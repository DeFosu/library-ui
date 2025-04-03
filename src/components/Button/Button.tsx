import { type ReactNode } from "react";

type ButtonVariant = "outlined" | "filled" | "text";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isIcon?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const sizeClasses = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const variantClasses = {
  outlined:
    "border border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20",
  filled:
    "bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700",
  text: "text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20",
};

export const Button = ({
  children,
  variant = "filled",
  size = "md",
  isIcon = false,
  className = "",
  onClick,
  disabled = false,
}: ButtonProps) => {
  const baseClasses =
    "rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  const iconClasses = isIcon ? "p-2 aspect-square" : "";

  return (
    <button
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${iconClasses}
        !${className}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
