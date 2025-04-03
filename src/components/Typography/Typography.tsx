import React from "react";

type TypographyProps = {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body1"
    | "body2"
    | "caption";
  children: React.ReactNode;
  className?: string;
};

const variantStyles = {
  h1: "text-4xl font-bold tracking-tight text-gray-900 dark:text-white",
  h2: "text-3xl font-semibold tracking-tight text-gray-900 dark:text-white",
  h3: "text-2xl font-semibold tracking-tight text-gray-900 dark:text-white",
  h4: "text-xl font-semibold tracking-tight text-gray-900 dark:text-white",
  h5: "text-lg font-semibold tracking-tight text-gray-900 dark:text-white",
  h6: "text-base font-semibold tracking-tight text-gray-900 dark:text-white",
  body1: "text-base leading-relaxed text-gray-700 dark:text-gray-300",
  body2: "text-sm leading-relaxed text-gray-600 dark:text-gray-400",
  caption: "text-xs text-gray-500 dark:text-gray-400",
};

export const Typography: React.FC<TypographyProps> = ({
  variant = "body1",
  children,
  className = "",
}) => {
  const baseStyles = variantStyles[variant];
  const combinedClassName = `${baseStyles} ${className}`;

  // Use semantic HTML elements based on variant
  switch (variant) {
    case "h1":
      return <h1 className={combinedClassName}>{children}</h1>;
    case "h2":
      return <h2 className={combinedClassName}>{children}</h2>;
    case "h3":
      return <h3 className={combinedClassName}>{children}</h3>;
    case "h4":
      return <h4 className={combinedClassName}>{children}</h4>;
    case "h5":
      return <h5 className={combinedClassName}>{children}</h5>;
    case "h6":
      return <h6 className={combinedClassName}>{children}</h6>;
    default:
      return <p className={combinedClassName}>{children}</p>;
  }
};
