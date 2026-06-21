import { Link } from "@tanstack/react-router";
import { Compass, Github } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { to: "/", label: "Home" },
  { to: "/map", label: "Map" },
  { to: "/paths", label: "Paths" },
  { to: "/resources", label: "Resources" },
  { to: "/careers", label: "Careers" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4 sm:px-6">
        <Link to="/" className="group flex min-w-0 items-center gap-2">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-border bg-card text-primary">
            <Compass className="h-4 w-4" />
          </span>
          <span className="truncate text-sm font-semibold tracking-tight sm:text-base">
            Map of Operations Research
          </span>
        </Link>
        <nav className="ml-auto hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "bg-secondary text-foreground" }}
              inactiveProps={{
                className: "text-muted-foreground hover:text-foreground hover:bg-muted",
              }}
              className="rounded-md px-3 py-1.5 text-sm font-medium transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2 md:ml-2">
          <a
            href="https://github.com/alti3/awesome-operations-research"
            target="_blank"
            rel="noreferrer"
            aria-label="Source on GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card text-foreground transition-colors hover:bg-muted"
          >
            <Github className="h-4 w-4" />
          </a>
          <ThemeToggle />
        </div>
      </div>
      <nav className="flex gap-1 overflow-x-auto border-t border-border/60 px-4 py-2 md:hidden">
        {nav.map((n) => (
          <Link
            key={n.to}
            to={n.to}
            activeOptions={{ exact: n.to === "/" }}
            activeProps={{ className: "bg-secondary text-foreground" }}
            inactiveProps={{ className: "text-muted-foreground" }}
            className="shrink-0 rounded-md px-3 py-1.5 text-xs font-medium"
          >
            {n.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
