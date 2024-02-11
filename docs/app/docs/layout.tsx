import { layoutProps } from "@/config/layout";
import { DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";

export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return <DocsLayout {...layoutProps}>{children}</DocsLayout>;
}
