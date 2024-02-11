import { pageTree } from "@/app/source";
import type { DocsLayoutProps } from "fumadocs-ui/layout";
import { siteConfig } from "./site";

export const layoutProps: Omit<DocsLayoutProps, "children"> = {
  tree: pageTree,
  nav: {
    title: siteConfig.name,
    githubUrl: siteConfig.links.github,
    transparentMode: "top",
  },
};
