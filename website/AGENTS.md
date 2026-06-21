# Map of Operations Research

This is a TanStack Start application for an Operations Research learning map.
Keep changes focused on the map, topic, path, career, and resource experience.

## Project Notes

- Use Bun for dependency management and scripts.
- Use Tailwind CSS v4's CSS-first workflow in `src/styles.css`; do not add
  Tailwind v3 config patterns or compatibility shims.
- Use Oxlint for linting and Oxfmt for formatting.
- Keep route files under `src/routes` and let TanStack Router generate
  `src/routeTree.gen.ts`.
- Preserve the custom server entry in `src/server.ts`; it normalizes SSR error
  responses into the app's project-owned error page.

## Checks

- `bun run lint`
- `bun run format`
- `bun run build`
