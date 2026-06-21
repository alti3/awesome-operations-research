import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { paths } from "@/data/paths";
import { DifficultyBadge } from "@/components/site/Badges";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/paths")({
  head: () => ({
    meta: [
      { title: "Learning Paths — Map of Operations Research" },
      {
        name: "description",
        content:
          "Step-by-step OR roadmaps: beginner, optimization, stochastic systems, supply chain, analytics, and research.",
      },
      { property: "og:title", content: "Learning Paths — Operations Research" },
      {
        property: "og:description",
        content: "Eight curated OR roadmaps from beginner to production decision systems.",
      },
    ],
  }),
  component: PathsPage,
});

function PathsPage() {
  const [activeId, setActiveId] = useState(paths[0].id);
  const active = paths.find((p) => p.id === activeId)!;

  return (
    <div>
      <section className="relative border-b border-border/60">
        <div className="grid-bg absolute inset-0 opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="mono text-[11px] uppercase tracking-wider text-muted-foreground">
            Paths
          </div>
          <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
            Learning Paths through OR
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Curated routes through OR — each a sequence of topics with difficulty markers and
            suggested resources. Pick the one that matches your goal and background.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[260px_1fr]">
        <aside className="lg:sticky lg:top-20 lg:self-start">
          <div className="mono mb-2 text-[11px] uppercase tracking-wider text-muted-foreground">
            All paths
          </div>
          <nav className="flex flex-wrap gap-2 lg:flex-col">
            {paths.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveId(p.id)}
                className={cn(
                  "rounded-md border px-3 py-2 text-left text-sm transition-colors",
                  p.id === activeId
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-border bg-card text-muted-foreground hover:text-foreground",
                )}
              >
                <div className="font-medium">{p.title}</div>
                <div className="hidden text-xs text-muted-foreground lg:block">{p.tagline}</div>
              </button>
            ))}
          </nav>
        </aside>

        <div>
          <div className="atlas-card p-6">
            <div className="mono text-[11px] uppercase tracking-wider text-muted-foreground">
              {active.audience}
            </div>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight">{active.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{active.tagline}</p>
          </div>

          <ol className="relative mt-8 space-y-6 border-l border-border pl-6">
            {active.steps.map((s, i) => (
              <li key={s.title} className="relative">
                <span className="mono absolute -left-[34px] grid h-7 w-7 place-items-center rounded-full border border-border bg-card text-[11px] font-semibold text-primary">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <div className="atlas-card atlas-card-hover p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-semibold">{s.title}</h3>
                    <DifficultyBadge value={s.difficulty} />
                  </div>
                  <p className="mt-1.5 text-sm text-muted-foreground">{s.description}</p>
                  {s.related && s.related.length > 0 && (
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {s.related.map((r) => (
                        <li key={r.url}>
                          <a
                            href={r.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 rounded-md border border-border bg-secondary/50 px-2 py-1 text-xs text-secondary-foreground hover:border-primary hover:text-primary"
                          >
                            {r.label} <ExternalLink className="h-3 w-3" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
