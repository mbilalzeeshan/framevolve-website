import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
}

export default function Button({ children, variant = "primary" }: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-full px-8 py-4 font-semibold transition-all duration-300",
        variant === "primary"
          ? "bg-white text-black hover:scale-105"
          : "border border-white/10 hover:bg-white/10",
      )}
    >
      {children}
    </button>
  );
}
