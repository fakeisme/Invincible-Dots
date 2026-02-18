import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: string; className?: string }) {
  return (
    <span className={cn("inline-flex rounded-full bg-brand-tint px-3 py-1 text-xs font-medium text-brand-dark", className)}>
      {children}
    </span>
  );
}
