import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-200";
  const variants = {
    primary: disabled
      ? "bg-gray-400 text-white cursor-not-allowed shadow-none"
      : "bg-teal-400 text-white hover:bg-teal-500 active:bg-teal-600 shadow-md hover:shadow-lg",
    secondary: disabled
      ? "bg-gray-100 text-gray-400 border-2 border-gray-300 cursor-not-allowed shadow-none"
      : "bg-white text-teal-500 border border-teal-400 hover:bg-gray-50 active:bg-gray-100 shadow-sm",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href && !disabled) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClassName}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
