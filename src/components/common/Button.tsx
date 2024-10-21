import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button = ({ children, className = "", ...props }: ButtonProps) => (
  <button className={`${className}`} {...props}>
    {children}
  </button>
);
