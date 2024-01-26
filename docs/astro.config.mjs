import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: import.meta.env.DEV
		? "http://localhost:4321"
		: "https://nobara.vercel.app",
	integrations: [
		mdx({
			syntaxHighlight: "shiki",
			shikiConfig: { theme: "github-dark-dimmed" },
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
});