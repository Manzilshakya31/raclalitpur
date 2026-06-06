import Link from "next/link";
import { type ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  href,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200 cursor-pointer select-none";

  const sizes = {
    sm: "h-9 px-4 text-sm rounded-full",
    md: "h-11 px-6 text-sm rounded-full",
    lg: "h-13 px-8 text-base rounded-full",
  };

  const variants = {
    primary:
      "bg-primary text-white hover:opacity-90 active:scale-[0.98]",
    outline:
      "border border-[var(--color-border)] text-[var(--color-text)] hover:border-primary hover:text-primary active:scale-[0.98]",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
