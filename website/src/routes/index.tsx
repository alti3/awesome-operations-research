import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Map as MapIcon, Route as RouteIcon, Library } from "lucide-react";
import { regions, topics } from "@/data/topics";
import { paths } from "@/data/paths";
import { careers } from "@/data/careers";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Map of Operations Research — A Decision Atlas" },
      {
        name: "description",
        content:
          "An interactive map of Operations Research: optimization, uncertainty, simulation, analytics, and decision-making.",
      },
      { property: "og:title", content: "Map of Operations Research" },
      {
        property: "og:description",
        content:
          "An interactive map of Operations Research: optimization, uncertainty, simulation, analytics, and decision-making.",
      },
    ],
  }),
  component: Index,
});

const majorAreas = [
  "Mathematical Optimization",
  "Linear Programming",
  "Integer & Mixed-Integer Programming",
  "Polyhedral Theory & Cutting Planes",
  "Least Squares, QP & Piecewise-Linear Models",
  "Nonlinear Optimization",
  "Convex Optimization",
  "Conic & Semidefinite Optimization",
  "Dynamic Programming",
  "Robust Optimization",
  "Stochastic Programming",
  "Complementarity & Equilibrium Models",
  "Stochastic Processes",
  "Queueing Theory",
  "Simulation",
  "Reliability & Maintenance",
  "Decision Analysis",
  "Game Theory",
  "Network Optimization",
  "Scheduling",
  "Vehicle Routing",
  "Facility Location",
  "Inventory Theory",
  "Transportation & Logistics",
  "Supply Chain Optimization",
  "Healthcare Operations Research",
  "Energy & Power Systems",
  "Public Sector & Policy OR",
  "Revenue Management",
  "Analytics, Data Science & ML",
  "Prescriptive Analytics",
  "Behavioral OR & Human Decisions",
  "Responsible OR",
];

function Index() {
  const stats = {
    topics: topics.length,
    regions: regions.length,
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="grid-bg absolute inset-0 opacity-60" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              "radial-gradient(60% 40% at 50% 0%, color-mix(in oklab, var(--primary) 18%, transparent), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mono mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-[11px] uppercase tracking-wider text-muted-foreground">
              <Compass className="h-3.5 w-3.5 text-primary" /> A decision atlas · v1
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Map of <span className="text-primary">Operations Research</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg">
              A connected guide to optimization, uncertainty, simulation, analytics, and
              decision-making. Explore the regions of OR, follow a learning path, and find the
              software, datasets, and references practitioners actually use.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
              OR is the discipline of building analytical models to make better decisions when
              intuition runs out — turning real systems into variables, objectives, constraints, and
              algorithms.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/map"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5"
              >
                Explore the Map <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/paths"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Follow a Learning Path
              </Link>
            </div>
            <div className="mono mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-wider text-muted-foreground">
              <span>{stats.regions} regions</span>
              <span className="text-border">·</span>
              <span>{stats.topics} topics</span>
              <span className="text-border">·</span>
              <span>{paths.length} learning paths</span>
              <span className="text-border">·</span>
              <span>{careers.length} careers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Visual overview */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <div className="mono text-[11px] uppercase tracking-wider text-muted-foreground">
              01 · Overview
            </div>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
              The regions of OR
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              The field organizes naturally into six connected regions — foundations, an
              optimization core, stochastic systems, networks and games, classical applications, and
              the modern analytics-driven practice that ties it together.
            </p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {regions.map((r) => {
            const count = topics.filter((t) => t.region === r.id).length;
            return (
              <Link
                key={r.id}
                to="/map"
                hash={r.id}
                className="atlas-card atlas-card-hover group flex flex-col gap-3 p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="mono text-[11px] text-muted-foreground">
                    REGION {r.index.toString().padStart(2, "0")}
                  </span>
                  <span className="mono text-[11px] text-muted-foreground">{count} topics</span>
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{r.title}</h3>
                <p className="text-sm text-muted-foreground">{r.blurb}</p>
                <div className="mt-auto inline-flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Enter region <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 rounded-xl border border-border bg-card/60 p-6">
          <div className="mono mb-3 text-[11px] uppercase tracking-wider text-muted-foreground">
            Major areas on the map
          </div>
          <div className="flex flex-wrap gap-2">
            {majorAreas.map((a) => (
              <span
                key={a}
                className="rounded-md border border-border/70 bg-secondary/50 px-2.5 py-1 text-xs text-secondary-foreground"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why OR matters */}
      <section className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="mono text-[11px] uppercase tracking-wider text-muted-foreground">
            02 · Why it matters
          </div>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
            Why Operations Research matters
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            OR turns complexity into decisions. It makes tradeoffs explicit, scales scarce
            resources, and pairs predictive models with prescriptive action.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                t: "Decisions over predictions",
                d: "Forecasts estimate the future; OR prescribes what to do about it.",
              },
              {
                t: "Tradeoffs made explicit",
                d: "Cost, service, risk, fairness, and resilience modeled rather than argued.",
              },
              {
                t: "Scarce resources, scaled",
                d: "Allocate people, vehicles, machines, energy, beds, capital, and compute.",
              },
              {
                t: "Automation with accountability",
                d: "Models expose assumptions, constraints, and objectives for review.",
              },
              {
                t: "Industries everywhere",
                d: "Logistics, healthcare, energy, finance, manufacturing, defense, sports.",
              },
              {
                t: "Bridges to data science",
                d: "Predict-then-optimize, decision-focused learning, and reinforcement learning.",
              },
            ].map((b) => (
              <div key={b.t} className="atlas-card p-5">
                <h3 className="text-sm font-semibold">{b.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-3">
          <Link to="/map" className="atlas-card atlas-card-hover flex items-start gap-3 p-5">
            <MapIcon className="mt-0.5 h-5 w-5 text-primary" />
            <div>
              <div className="text-sm font-semibold">Open the Map</div>
              <p className="mt-1 text-xs text-muted-foreground">Browse all regions and topics.</p>
            </div>
          </Link>
          <Link to="/paths" className="atlas-card atlas-card-hover flex items-start gap-3 p-5">
            <RouteIcon className="mt-0.5 h-5 w-5 text-primary" />
            <div>
              <div className="text-sm font-semibold">Pick a Path</div>
              <p className="mt-1 text-xs text-muted-foreground">
                Beginner to researcher, step by step.
              </p>
            </div>
          </Link>
          <Link to="/resources" className="atlas-card atlas-card-hover flex items-start gap-3 p-5">
            <Library className="mt-0.5 h-5 w-5 text-primary" />
            <div>
              <div className="text-sm font-semibold">Resource Index</div>
              <p className="mt-1 text-xs text-muted-foreground">
                Books, courses, solvers, datasets.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
