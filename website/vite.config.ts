import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const siteUrl = process.env.SITE_URL;

export default defineConfig({
  plugins: [
    tanstackStart({
      router: {
        routeTreeFileHeader: [],
      },
      pages: [
        {
          path: "/",
          sitemap: { priority: 1, changefreq: "weekly" },
        },
        {
          path: "/map",
          sitemap: { priority: 0.95, changefreq: "weekly" },
        },
        {
          path: "/paths",
          sitemap: { priority: 0.85, changefreq: "monthly" },
        },
        {
          path: "/careers",
          sitemap: { priority: 0.8, changefreq: "monthly" },
        },
        {
          path: "/resources",
          sitemap: { priority: 0.85, changefreq: "monthly" },
        },
      ],
      prerender: {
        enabled: true,
        crawlLinks: true,
        retryCount: 1,
      },
      ...(siteUrl
        ? {
            sitemap: {
              host: siteUrl,
            },
          }
        : {}),
      // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
      server: { entry: "server" },
    }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
});
