import { useEffect, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

export type TopicSection = {
  id: string;
  title: string;
  level?: 2 | 3;
};

const ACTIVE_OFFSET = 112;

function getProgressSnapshot() {
  if (typeof window === "undefined") return 0;

  const scrollTop = window.scrollY;
  const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
  return scrollRange > 0 ? Math.min(100, (scrollTop / scrollRange) * 100) : 0;
}

function subscribeToProgress(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => {};

  window.addEventListener("scroll", onStoreChange, { passive: true });
  window.addEventListener("resize", onStoreChange);

  return () => {
    window.removeEventListener("scroll", onStoreChange);
    window.removeEventListener("resize", onStoreChange);
  };
}

function getActiveSection(sections: TopicSection[]) {
  let active = sections[0]?.id ?? "";

  for (const section of sections) {
    const heading = document.getElementById(section.id);
    if (!heading) continue;

    if (heading.getBoundingClientRect().top <= ACTIVE_OFFSET) {
      active = section.id;
    } else {
      break;
    }
  }

  return active;
}

export function TableOfContents({ sections }: { sections: TopicSection[] }) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");
  const progress = useSyncExternalStore(subscribeToProgress, getProgressSnapshot, () => 0);

  useEffect(() => {
    setActiveId(sections[0]?.id ?? "");
  }, [sections]);

  useEffect(() => {
    if (sections.length === 0) return;

    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setActiveId(getActiveSection(sections)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [sections]);

  if (sections.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="text-sm">
      <div className="mb-5 flex items-center justify-between border-b border-border pb-3">
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          On this page
        </span>
        <span className="font-mono text-xs tabular-nums text-primary">{Math.round(progress)}%</span>
      </div>

      <ol className="space-y-1">
        {sections.map((section, index) => {
          const active = activeId === section.id;

          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={active ? "true" : undefined}
                className={cn(
                  "group flex items-baseline gap-3 rounded-md px-3 py-2 leading-snug transition-colors",
                  section.level === 3 && "ml-4 text-xs",
                  active
                    ? "bg-primary/10 text-foreground ring-1 ring-inset ring-primary/20"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                )}
              >
                <span
                  className={cn(
                    "font-mono text-xs tabular-nums transition-colors",
                    active ? "text-primary" : "text-muted-foreground/70",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "border-l-2 pl-3 transition-colors",
                    active
                      ? "border-primary font-medium"
                      : "border-transparent group-hover:border-border",
                  )}
                >
                  {section.title}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
