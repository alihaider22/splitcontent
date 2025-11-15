import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Card({ children, className = "", onClick }: CardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 ${className} ${
        onClick ? "cursor-pointer" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
