import { type ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "primary" | "accent";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variants = {
    default:
      "bg-[var(--color-surface-2)] text-[var(--color-text-muted)] border border-[var(--color-border)]",
    primary:
      "bg-primary/10 text-primary border border-primary/20",
    accent:
      "bg-accent/10 text-accent border border-accent/20",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
