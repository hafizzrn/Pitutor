import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "white" | "transparent";
  rounded?: "2xl" | "4xl";
}

export const variantStyles = {
  primary:
    "bg-primary",
  white: "bg-white text-black hover:bg-neutral-200",
  transparent: "bg-transparent hover:bg-black",
};

export const radiusStyles = {
  "2xl": "rounded-xl",
  "4xl": "rounded-[36px]",
};

const Button = ({
  rounded = "2xl",
  variant = "primary",
  className = "",
  disabled = false,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`${radiusStyles[rounded]} ${variantStyles[variant]} text-white py-3 px-8 whitespace-nowrap ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;