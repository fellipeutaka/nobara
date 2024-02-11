import { Icons } from "@/components/icons";
import { ButtonStyles } from "@/components/ui/button";
import { layoutProps } from "@/config/layout";
import { siteConfig } from "@/config/site";
import { Layout } from "fumadocs-ui/layout";

export default function HomePage() {
  return (
    <Layout
      {...layoutProps}
      links={[
        {
          text: "Documentation",
          url: "/docs",
        },
      ]}
    >
      <main className="container max-w-5xl grid place-content-center gap-8">
        <h1 className="animate-fade-up bg-gradient-to-br from-indigo-700 via-accent-foreground to-fuchsia-500 bg-clip-text text-center text-5xl/[3rem] font-bold text-transparent opacity-0 drop-shadow-sm md:text-7xl/[5rem] text-balance">
          Framework agnostic validation for{" "}
          <span className="underline decoration-destructive decoration-wavy decoration-from-font underline-offset-4">
            type-safe
          </span>{" "}
          environment variables.
        </h1>
        <p className="animate-fade-up animate-delay-75 text-center dark:text-muted-foreground/80 text-muted-foreground opacity-0 md:text-xl text-balance">
          {siteConfig.description}
        </p>
        <div className="flex justify-center gap-4 animate-fade-up animate-delay-100 opacity-0">
          <a
            className={ButtonStyles({ size: "lg" })}
            href={siteConfig.links.docs}
          >
            Documentation
          </a>
          <a
            className={ButtonStyles({ size: "lg", variant: "outline" })}
            target="_blank"
            rel="noreferrer noopener"
            href={siteConfig.links.github}
          >
            <Icons.GitHub className="mr-1 size-4" />
            <span>GitHub</span>
          </a>
        </div>
      </main>
    </Layout>
  );
}
