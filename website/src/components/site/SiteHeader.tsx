import { Link } from "@tanstack/react-router";
import {
  BriefcaseBusiness,
  BookOpen,
  Github,
  Home,
  Map as MapIcon,
  Route,
  Waypoints,
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { to: "/", label: "Home", icon: Home },
  { to: "/map", label: "Map", icon: MapIcon },
  { to: "/paths", label: "Paths", icon: Route },
  { to: "/resources", label: "Resources", icon: BookOpen },
  { to: "/careers", label: "Careers", icon: BriefcaseBusiness },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-3 md:flex-row md:items-center md:justify-between md:py-4">
        <Link to="/" className="flex min-w-0 items-center gap-2.5 text-left">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Waypoints className="size-4" />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Interactive
            </span>
            <span className="block truncate text-sm font-semibold tracking-tight">
              Map of Operations Research
            </span>
          </span>
        </Link>

        <div className="flex flex-wrap items-center gap-2">
          <nav
            className="flex max-w-full shrink-0 overflow-x-auto rounded-md border border-border bg-card p-0.5"
            aria-label="Primary"
          >
            {nav.map((n) => {
              const Icon = n.icon;

              return (
                <Link
                  key={n.to}
                  to={n.to}
                  activeOptions={{ exact: n.to === "/" }}
                  activeProps={{
                    className: "bg-primary text-primary-foreground",
                  }}
                  inactiveProps={{
                    className: "text-muted-foreground hover:text-foreground",
                  }}
                  className="flex shrink-0 items-center gap-1.5 rounded px-3 py-1.5 text-sm font-medium transition-colors"
                >
                  <Icon className="size-4" />
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <a
            href="https://github.com/alti3/awesome-operations-research"
            target="_blank"
            rel="noreferrer"
            aria-label="Source on GitHub"
            title="Source on GitHub"
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-card text-foreground outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            <Github className="size-4" />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
