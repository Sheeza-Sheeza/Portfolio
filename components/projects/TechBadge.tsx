import { cn } from "@/lib/utils";

type TechBadgeProps = {
  label: string;
  className?: string;
  size?: "sm" | "md";
};

export function TechBadge({ label, className, size = "sm" }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/5 font-mono text-muted backdrop-blur",
        size === "sm" && "px-2.5 py-1 text-xs",
        size === "md" && "px-3 py-1.5 text-sm",
        className,
      )}
    >
      {label}
    </span>
  );
}
