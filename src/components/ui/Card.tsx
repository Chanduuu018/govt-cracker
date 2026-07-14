import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card = ({
  children,
  className = "",
  onClick,
}: CardProps) => {
  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/20 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;