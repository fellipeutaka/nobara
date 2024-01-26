import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://nobara.vercel.app",
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: { theme: "min-dark" },
      gfm: true,
    }),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  redirects: {
    "/docs": "/docs/introduction",
  },
  output: "static",
  adapter: vercel(),
});
