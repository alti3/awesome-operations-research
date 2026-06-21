import { ArrowUpRight, BookOpen } from "lucide-react";
import type { Topic } from "@/data/topics";
import { DifficultyBadge, Tag, TypeBadge } from "./Badges";

export function TopicCard({ topic, onOpen }: { topic: Topic; onOpen?: (t: Topic) => void }) {
  return (
    <button
      type="button"
      onClick={() => onOpen?.(topic)}
      className="atlas-card atlas-card-hover group relative flex h-full w-full flex-col gap-3 p-5 text-left"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="mono text-[11px] text-muted-foreground">
          {topic.regionIndex.toString().padStart(2, "0")}.
          {topic.topicIndex.toString().padStart(2, "0")}
        </span>
        <div className="flex items-center gap-1.5">
          <TypeBadge value={topic.type} />
          <DifficultyBadge value={topic.difficulty} />
        </div>
      </div>
      <div>
        <h3 className="text-base font-semibold tracking-tight text-foreground">{topic.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{topic.short}</p>
      </div>
      <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-2">
        {topic.concepts.slice(0, 4).map((c) => (
          <Tag key={c}>{c}</Tag>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-border/60 pt-3 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <BookOpen className="h-3.5 w-3.5" />
          {topic.resources.length} resource{topic.resources.length === 1 ? "" : "s"}
        </span>
        <span className="inline-flex items-center gap-1 text-primary opacity-0 transition-opacity group-hover:opacity-100">
          Open <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </button>
  );
}
