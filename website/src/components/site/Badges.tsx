import { cn } from "@/lib/utils";
import type { Difficulty, TopicType } from "@/data/topics";

const diffStyles: Record<Difficulty, string> = {
  Foundations: "bg-emerald-500/10 text-emerald-400 ring-emerald-500/30",
  Intermediate: "bg-sky-500/10 text-sky-400 ring-sky-500/30",
  Advanced: "bg-violet-500/10 text-violet-400 ring-violet-500/30",
  Applied: "bg-amber-500/10 text-amber-400 ring-amber-500/30",
};

export function DifficultyBadge({ value, className }: { value: Difficulty; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ring-1 ring-inset",
        diffStyles[value],
        className,
      )}
    >
      {value}
    </span>
  );
}

export function TypeBadge({ value }: { value: TopicType }) {
  return (
    <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground ring-1 ring-inset ring-border">
      {value}
    </span>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border/70 bg-secondary/60 px-1.5 py-0.5 text-[11px] text-secondary-foreground">
      {children}
    </span>
  );
}
