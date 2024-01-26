import { createShadcnPreset, overrideShadcnTheme } from "mizuhara/plugins";
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  content: ["./src/**/*.{astro,ts,tsx,mdx}"],
  presets: [
    createShadcnPreset({
      theme: overrideShadcnTheme({
        light: {
          background: "hsl(23, 43%, 98%)",
          foreground: "hsl(23, 65%, 1%)",
          card: "hsl(23, 43%, 98%)",
          cardForeground: "hsl(23, 65%, 1%)",
          popover: "hsl(23, 43%, 98%)",
          popoverForeground: "hsl(23, 65%, 1%)",
          primary: "hsl(23, 93%, 53%)",
          primaryForeground: "hsl(0, 0%, 0%)",
          secondary: "hsl(23, 10%, 92%)",
          secondaryForeground: "hsl(23, 10%, 32%)",
          accent: "hsl(23, 10%, 92%)",
          accentForeground: "hsl(23, 10%, 32%)",
          destructive: "hsl(1, 99%, 38%)",
          destructiveForeground: "hsl(0, 0%, 100%)",
          muted: "hsl(23, 31%, 89%)",
          mutedForeground: "hsl(23, 2%, 26%)",
          border: "hsl(23, 8%, 89%)",
          input: "hsl(23, 8%, 89%)",
          ring: "hsl(23, 93%, 53%)",
          test: "hsl(180, 93%, 53%)",
        },
        dark: {
          background: "hsl(23, 51%, 2%)",
          foreground: "hsl(23, 10%, 100%)",
          card: "hsl(23, 51%, 2%)",
          cardForeground: "hsl(23, 10%, 100%)",
          popover: "hsl(23, 51%, 2%)",
          popoverForeground: "hsl(23, 10%, 100%)",
          primary: "hsl(23, 93%, 53%)",
          primaryForeground: "hsl(0, 0%, 0%)",
          secondary: "hsl(23, 9%, 13%)",
          secondaryForeground: "hsl(23, 9%, 73%)",
          accent: "hsl(23, 9%, 13%)",
          accentForeground: "hsl(23, 9%, 73%)",
          destructive: "hsl(1, 99%, 46%)",
          destructiveForeground: "hsl(0, 0%, 100%)",
          muted: "hsl(23, 31%, 11%)",
          mutedForeground: "hsl(23, 2%, 74%)",
          border: "hsl(23, 8%, 11%)",
          input: "hsl(23, 8%, 11%)",
          ring: "hsl(23, 93%, 53%)",
        },
      }),
    }),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", "Inter", ...fontFamily.sans],
      },
    },
  },
} satisfies Config;

export default config;
