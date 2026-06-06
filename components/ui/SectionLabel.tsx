interface SectionLabelProps {
  children: string;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="h-px w-8 bg-primary inline-block" />
      <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-text-muted)]">
        {children}
      </span>
    </div>
  );
}
