import { Callout } from "fumadocs-ui/components/callout";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import defaultComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import NextImage from "next/image";
import type { ImageProps } from "next/image";

function Image(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return <NextImage quality={100} {...(props as ImageProps)} />;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ...components,
    Callout,
    Steps,
    Step,
    Tabs,
    Tab,
    InstallTabs: ({
      children,
    }: {
      children: React.ReactNode;
    }) => (
      <Tabs items={["npm", "yarn", "pnpm", "bun"]} persist id="package-manager">
        {children}
      </Tabs>
    ),
    img: Image,
  };
}
