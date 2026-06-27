import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import {
  difficulties,
  regions,
  topicTypes,
  topics,
  type Difficulty,
  type TopicType,
} from "@/data/topics";
import { TopicCard } from "@/components/site/TopicCard";

export const Route = createFileRoute("/map")({
  head: () => ({
    meta: [
      { title: "The Map — Operations Research" },
      {
        name: "description",
        content: "Browse the regions and topics of Operations Research with search and filters.",
      },
      { property: "og:title", content: "The Map of Operations Research" },
      {
        property: "og:description",
        content: "Browse the regions and topics of OR with search and filters.",
      },
    ],
  }),
  component: MapPage,
});

function MapPage() {
  const [q, setQ] = useState("");
  const [region, setRegion] = useState<string | "all">("all");
  const [diff, setDiff] = useState<Difficulty | "all">("all");
  const [type, setType] = useState<TopicType | "all">("all");

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return topics.filter((t) => {
      if (region !== "all" && t.region !== region) return false;
      if (diff !== "all" && t.difficulty !== diff) return false;
      if (type !== "all" && t.type !== type) return false;
      if (!term) return true;
      const hay = [t.title, t.short, t.description, ...t.concepts, ...(t.applications ?? [])]
        .join(" ")
        .toLowerCase();
      return hay.includes(term);
    });
  }, [q, region, diff, type]);

  const groups = regions.map((r) => ({
    region: r,
    items: filtered.filter((t) => t.region === r.id),
  }));

  const clearFilters = () => {
    setQ("");
    setRegion("all");
    setDiff("all");
    setType("all");
  };

  return (
    <div>
      {/* Header */}
      <section className="relative border-b border-border/60">
        <div className="grid-bg absolute inset-0 opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="mono text-[11px] uppercase tracking-wider text-muted-foreground">
            The Map
          </div>
          <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
            All regions of Operations Research
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Search across topics, filter by region, difficulty, or type. Click any card to open a
            dedicated guide page with key concepts, applications, a table of contents, and curated
            resources.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto_auto_auto]">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search topics, concepts, applications…"
                className="h-10 w-full rounded-md border border-border bg-card pl-9 pr-9 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
              />
              {q && (
                <button
                  aria-label="Clear search"
                  onClick={() => setQ("")}
                  className="absolute right-2 top-1/2 grid h-6 w-6 -translate-y-1/2 place-items-center rounded text-muted-foreground hover:bg-muted"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
            <Select value={region} onChange={setRegion} label="Region">
              <option value="all">All regions</option>
              {regions.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.title}
                </option>
              ))}
            </Select>
            <Select
              value={diff}
              onChange={(v) => setDiff(v as Difficulty | "all")}
              label="Difficulty"
            >
              <option value="all">Any difficulty</option>
              {difficulties.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </Select>
            <Select value={type} onChange={(v) => setType(v as TopicType | "all")} label="Type">
              <option value="all">Any type</option>
              {topicTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </Select>
          </div>

          <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
            <span>
              {filtered.length} of {topics.length} topics
            </span>
            {(q || region !== "all" || diff !== "all" || type !== "all") && (
              <button onClick={clearFilters} className="text-primary hover:underline">
                Clear filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Regions */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        {filtered.length === 0 ? (
          <div className="atlas-card flex flex-col items-center justify-center gap-2 p-12 text-center">
            <Search className="h-6 w-6 text-muted-foreground" />
            <h3 className="text-base font-semibold">No topics match your filters</h3>
            <p className="max-w-sm text-sm text-muted-foreground">
              Try a broader search term or clear filters to see the full map again.
            </p>
            <button
              onClick={clearFilters}
              className="mt-2 rounded-md bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground"
            >
              Reset
            </button>
          </div>
        ) : (
          <div className="space-y-14">
            {groups
              .filter((g) => g.items.length > 0)
              .map((g) => (
                <section key={g.region.id} id={g.region.id} className="scroll-mt-24">
                  <header className="mb-5 flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <div className="mono text-[11px] uppercase tracking-wider text-muted-foreground">
                        Region {g.region.index.toString().padStart(2, "0")} · {g.items.length}{" "}
                        topics
                      </div>
                      <h2 className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">
                        {g.region.title}
                      </h2>
                      <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                        {g.region.blurb}
                      </p>
                    </div>
                  </header>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {g.items.map((t) => (
                      <TopicCard key={t.id} topic={t} />
                    ))}
                  </div>
                </section>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Select<T extends string>({
  value,
  onChange,
  label,
  children,
}: {
  value: T;
  onChange: (v: T) => void;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="relative inline-flex items-center">
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
        className="h-10 min-w-[140px] appearance-none rounded-md border border-border bg-card px-3 pr-8 text-sm outline-none focus:border-primary"
      >
        {children}
      </select>
      <svg
        aria-hidden
        viewBox="0 0 20 20"
        className="pointer-events-none absolute right-2.5 h-4 w-4 text-muted-foreground"
      >
        <path
          d="M5 8l5 5 5-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </label>
  );
}
