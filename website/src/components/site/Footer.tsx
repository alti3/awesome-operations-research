export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-3 sm:px-6">
        <div>
          <div className="text-sm font-semibold">Map of Operations Research</div>
          <p className="mt-2 max-w-sm text-xs text-muted-foreground">
            A map-aligned guide to OR topics, methods, software, and learning resources. Built for
            students, researchers, practitioners, and self-learners.
          </p>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Source
          </div>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <a
                className="hover:text-primary"
                href="https://github.com/alti3/awesome-operations-research"
                target="_blank"
                rel="noreferrer"
              >
                Awesome Operations Research →
              </a>
            </li>
            <li>
              <a
                className="hover:text-primary"
                href="https://github.com/alti3/awesome-operations-research/blob/master/LICENSE"
                target="_blank"
                rel="noreferrer"
              >
                License
              </a>
            </li>
            <li>
              <a
                className="hover:text-primary"
                href="https://github.com/alti3/awesome-operations-research#how-to-contribute"
                target="_blank"
                rel="noreferrer"
              >
                Contribute
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Attribution
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Content adapted from the open “Awesome Operations Research” list. Descriptions have been
            rewritten for the web. This site is an independent companion, not the official source.
          </p>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Map of Operations Research · A decision atlas.
      </div>
    </footer>
  );
}
