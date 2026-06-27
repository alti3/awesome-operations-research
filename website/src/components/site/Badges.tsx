import { cn } from "@/lib/utils";
import type { Difficulty, TopicType } from "@/data/topics";

const diffStyles: Record<Difficulty, string> = {
  Foundations: "bg-emerald-500/10 text-emerald-700 ring-emerald-500/30 dark:text-emerald-300",
  Intermediate: "bg-sky-500/10 text-sky-700 ring-sky-500/30 dark:text-sky-300",
  Advanced: "bg-violet-500/10 text-violet-700 ring-violet-500/30 dark:text-violet-300",
  Applied: "bg-teal-500/10 text-teal-700 ring-teal-500/30 dark:text-teal-300",
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
