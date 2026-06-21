import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ExternalLink, Search, X } from "lucide-react";
import {
  resourceCategories,
  resources,
  type Resource,
  type ResourceLevel,
  type ResourceType,
} from "@/data/resources";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Map of Operations Research" },
      {
        name: "description",
        content:
          "Books, courses, libraries, solvers, datasets, journals, and communities for Operations Research.",
      },
      { property: "og:title", content: "OR Resources" },
      {
        property: "og:description",
        content: "A curated index of OR books, courses, tools, solvers, datasets, and communities.",
      },
    ],
  }),
  component: ResourcesPage,
});

const allTypes: (ResourceType | "all")[] = [
  "all",
  "Book",
  "Course",
  "Tool",
  "Solver",
  "Dataset",
  "Journal",
  "Community",
  "Career",
];
const allLevels: (ResourceLevel | "all")[] = ["all", "Beginner", "Intermediate", "Advanced"];

function ResourcesPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string | "all">("all");
  const [type, setType] = useState<ResourceType | "all">("all");
  const [level, setLevel] = useState<ResourceLevel | "all">("all");

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return resources.filter((r) => {
      if (cat !== "all" && r.category !== cat) return false;
      if (type !== "all" && r.type !== type) return false;
      if (level !== "all" && r.level !== level) return false;
      if (!term) return true;
      const hay = [r.title, r.description, r.category, r.type, ...(r.tags ?? [])]
        .join(" ")
        .toLowerCase();
      return hay.includes(term);
    });
  }, [q, cat, type, level]);

  const grouped = resourceCategories
    .map((c) => ({ category: c, items: filtered.filter((r) => r.category === c) }))
    .filter((g) => g.items.length > 0);

  return (
    <div>
      <section className="relative border-b border-border/60">
        <div className="grid-bg absolute inset-0 opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="mono text-[11px] uppercase tracking-wider text-muted-foreground">
            Resources
          </div>
          <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
            The OR Resource Index
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            A searchable directory of books, courses, modeling languages, solvers, datasets,
            journals, and communities.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto_auto_auto]">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search resources by name, tag, or description…"
                className="h-10 w-full rounded-md border border-border bg-card pl-9 pr-9 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
              />
              {q && (
                <button
                  onClick={() => setQ("")}
                  aria-label="Clear"
                  className="absolute right-2 top-1/2 grid h-6 w-6 -translate-y-1/2 place-items-center rounded text-muted-foreground hover:bg-muted"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
            <Filter
              value={cat}
              onChange={setCat}
              options={[
                ["all", "All categories"],
                ...resourceCategories.map((c) => [c, c] as [string, string]),
              ]}
            />
            <Filter
              value={type}
              onChange={(v) => setType(v as ResourceType | "all")}
              options={allTypes.map((t) => [t, t === "all" ? "Any type" : t])}
            />
            <Filter
              value={level}
              onChange={(v) => setLevel(v as ResourceLevel | "all")}
              options={allLevels.map((l) => [l, l === "all" ? "Any level" : l])}
            />
          </div>

          <div className="mt-3 text-xs text-muted-foreground">
            {filtered.length} of {resources.length} resources
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        {grouped.length === 0 ? (
          <div className="atlas-card flex flex-col items-center justify-center gap-2 p-12 text-center">
            <Search className="h-6 w-6 text-muted-foreground" />
            <h3 className="text-base font-semibold">Nothing matches yet</h3>
            <p className="max-w-sm text-sm text-muted-foreground">
              Try a different keyword or relax the filters to see more resources.
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {grouped.map((g) => (
              <section key={g.category}>
                <div className="mb-4 flex items-end justify-between gap-3">
                  <h2 className="text-xl font-semibold tracking-tight">{g.category}</h2>
                  <span className="mono text-[11px] text-muted-foreground">
                    {g.items.length} items
                  </span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {g.items.map((r) => (
                    <ResourceCard key={r.url} r={r} />
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

function ResourceCard({ r }: { r: Resource }) {
  return (
    <a
      href={r.url}
      target="_blank"
      rel="noreferrer"
      className="atlas-card atlas-card-hover group flex h-full flex-col gap-2 p-4"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground ring-1 ring-inset ring-border">
          {r.type}
        </span>
        <ExternalLink className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-primary" />
      </div>
      <h3 className="text-sm font-semibold leading-snug text-foreground">{r.title}</h3>
      {r.description && <p className="text-xs text-muted-foreground">{r.description}</p>}
      <div className="mt-auto flex flex-wrap gap-1 pt-2 text-[11px] text-muted-foreground">
        {r.level && (
          <span className="rounded-md border border-border/70 bg-secondary/50 px-1.5 py-0.5">
            {r.level}
          </span>
        )}
        {(r.tags ?? []).slice(0, 3).map((t) => (
          <span
            key={t}
            className="rounded-md border border-border/70 bg-secondary/50 px-1.5 py-0.5"
          >
            #{t}
          </span>
        ))}
      </div>
    </a>
  );
}

function Filter<T extends string>({
  value,
  onChange,
  options,
}: {
  value: T;
  onChange: (v: T) => void;
  options: [string, string][];
}) {
  return (
    <label className="relative inline-flex">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
        className="h-10 min-w-[150px] appearance-none rounded-md border border-border bg-card px-3 pr-8 text-sm outline-none focus:border-primary"
      >
        {options.map(([v, l]) => (
          <option key={v} value={v}>
            {l}
          </option>
        ))}
      </select>
      <svg
        aria-hidden
        viewBox="0 0 20 20"
        className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
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
