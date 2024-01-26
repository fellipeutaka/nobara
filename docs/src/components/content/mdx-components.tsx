import { cn } from "mizuhara/utils";
import Callout from "~/components/callout.astro";
import { Icons } from "~/components/icons";
import Image from "./mdx-image.astro";

type Props<T extends keyof React.JSX.IntrinsicElements> =
  React.ComponentProps<T>;

export const MdxComponents = {
  h1: ({ className, ...props }: Props<"h1">) => (
    <h1
      className={cn("scroll-m-20 font-cal text-4xl mt-10", className)}
      {...props}
    />
  ),
  h2: ({ className, children, ...props }: Props<"h2">) => (
    <h2
      className={cn(
        "mt-10 scroll-m-20 border-b pb-2 font-cal text-3xl first:mt-0",
        className,
      )}
      {...props}
    >
      <a className="group" href={`#${props.id}`}>
        <span>{children}</span>
        <Icons.Link className="inline-flex ml-1 h-4 w-4 invisible group-hover:visible" />
      </a>
    </h2>
  ),
  h3: ({ className, children, ...props }: Props<"h3">) => (
    <h3
      className={cn("mt-8 scroll-m-20 font-cal text-2xl", className)}
      {...props}
    >
      <a className="group" href={`#${props.id}`}>
        <span>{children}</span>
        <Icons.Link className="inline-flex ml-1 h-4 w-4 invisible group-hover:visible" />
      </a>
    </h3>
  ),
  h4: ({ className, children, ...props }: Props<"h4">) => (
    <h4
      className={cn("mt-6 -mb-4 scroll-m-20 font-cal text-2xl", className)}
      {...props}
    >
      <a className="group" href={`#${props.id}`}>
        <span>{children}</span>
        <Icons.Link className="inline-flex ml-1 h-4 w-4 invisible group-hover:visible" />
      </a>
    </h4>
  ),
  h5: ({ className, ...props }: Props<"h5">) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: Props<"h6">) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  a: ({ children, href }: Props<"a">) => {
    const isExternal = href?.startsWith("http");
    return (
      <a
        href={href}
        className="underline decoration-primary decoration-2 underline-offset-4"
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  },
  p: ({ className, ...props }: Props<"p">) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: Props<"ul">) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: Props<"ol">) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: Props<"li">) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: Props<"blockquote">) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
        className,
      )}
      {...props}
    />
  ),
  img: ({ className, alt, ...props }: Props<"img">) => (
    <img {...props} className={cn("rounded-lg", className)} alt={alt} />
  ),
  hr: (props: Props<"hr">) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: Props<"table">) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: Props<"tr">) => (
    <tr
      className={cn("m-0 border-t p-0 even:bg-muted", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: Props<"th">) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: Props<"td">) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: Props<"code">) => (
    <code
      className={cn(
        "relative font-mono rounded py-[0.2rem] px-[0.3rem] text-sm font-semibold",
        "[&:not(:has(span))]:bg-muted [&:not(:has(span))]:text-muted-foreground",
        className,
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: Props<"pre">) => (
    <pre className={cn("mb-4 mt-6 rounded-lg p-4")} {...props} />
  ),
  Image,
  Callout,
  Steps: ({ className, ...props }: Props<"div">) => (
    <div
      className={cn(
        "[&>h3]:step mb-12 ml-4 border-l pl-6 [counter-reset:step]",
        className,
      )}
      {...props}
    />
  ),
};
