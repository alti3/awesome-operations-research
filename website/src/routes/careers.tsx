import { createFileRoute } from "@tanstack/react-router";
import { Briefcase } from "lucide-react";
import { careers } from "@/data/careers";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers in Operations Research" },
      {
        name: "description",
        content:
          "Roles, methods, tools, and learning paths for careers in Operations Research and analytics.",
      },
      { property: "og:title", content: "Careers in Operations Research" },
      {
        property: "og:description",
        content:
          "Fourteen OR-driven roles with the methods, tools, paths, and industries that define them.",
      },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <div>
      <section className="relative border-b border-border/60">
        <div className="grid-bg absolute inset-0 opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="mono text-[11px] uppercase tracking-wider text-muted-foreground">
            Careers
          </div>
          <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
            Where OR people work
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            OR shows up under many job titles. Below are common roles — what they do, which methods
            they rely on, the tools of the trade, and a path to get there.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-5 md:grid-cols-2">
          {careers.map((c) => (
            <article key={c.id} className="atlas-card atlas-card-hover flex flex-col gap-4 p-6">
              <header className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-border bg-secondary/50 text-primary">
                  <Briefcase className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <h2 className="text-base font-semibold leading-tight">{c.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{c.summary}</p>
                </div>
              </header>
              <CareerRow label="Methods" items={c.methods} />
              <CareerRow label="Tools" items={c.tools} />
              <CareerRow label="Industries" items={c.industries} />
              <div className="rounded-md border border-border/70 bg-secondary/30 p-3 text-xs">
                <span className="mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Suggested path
                </span>
                <div className="mt-1 text-sm">{c.path}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function CareerRow({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <div className="mono text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-1.5 flex flex-wrap gap-1.5">
        {items.map((i) => (
          <span
            key={i}
            className="rounded-md border border-border/70 bg-secondary/50 px-2 py-0.5 text-xs text-secondary-foreground"
          >
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}
