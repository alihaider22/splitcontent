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
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors duration-200";
  const variants = {
    primary: disabled
      ? "bg-gray-400 text-white cursor-not-allowed"
      : "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800",
    secondary: disabled
      ? "bg-gray-100 text-gray-400 border-2 border-gray-300 cursor-not-allowed"
      : "bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 active:bg-blue-100",
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
