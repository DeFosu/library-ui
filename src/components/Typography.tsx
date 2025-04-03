import { ReactNode } from "react";

type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
type TypographyColor =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "warning"
  | "info";
type TypographyWeight = "light" | "normal" | "medium" | "semibold" | "bold";

type TypographyProps = {
  variant?: TypographyVariant;
  color?: TypographyColor;
  weight?: TypographyWeight;
  className?: string;
  children: ReactNode;
};

const colorClasses = {
  primary: "text-gray-900 dark:text-white",
  secondary: "text-gray-600 dark:text-gray-400",
  success: "text-green-600 dark:text-green-400",
  error: "text-red-600 dark:text-red-400",
  warning: "text-yellow-600 dark:text-yellow-400",
  info: "text-blue-600 dark:text-blue-400",
};

const weightClasses = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const variantClasses = {
  h1: "text-4xl md:text-5xl lg:text-6xl",
  h2: "text-3xl md:text-4xl lg:text-5xl",
  h3: "text-2xl md:text-3xl lg:text-4xl",
  h4: "text-xl md:text-2xl lg:text-3xl",
  h5: "text-lg md:text-xl lg:text-2xl",
  h6: "text-base md:text-lg lg:text-xl",
  p: "text-base",
  span: "text-base",
};

export const Typography = ({
  variant = "p",
  color = "primary",
  weight = "normal",
  className = "",
  children,
}: TypographyProps) => {
  const Component = variant;
  const classes = [
    variantClasses[variant],
    colorClasses[color],
    weightClasses[weight],
    className,
  ].join(" ");

  return <Component className={classes}>{children}</Component>;
};
