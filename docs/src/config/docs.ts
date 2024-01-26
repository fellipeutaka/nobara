export const docsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs/introduction",
          items: [],
        },
      ],
    },
    {
      title: "Framework Guides",
      items: [
        {
          title: "Agnostic Core",
          href: "/docs/core",
          items: [],
        },
        {
          title: "Next.js",
          href: "/docs/nextjs",
          items: [],
        },
        {
          title: "Nuxt",
          href: "/docs/nuxt",
          label: "Coming Soon",
          disabled: true,
          items: [],
        },
      ],
    },
    {
      title: "Further Reading",
      items: [
        {
          title: "Recipes",
          href: "/docs/recipes",
          items: [],
        },
        {
          title: "Customization",
          href: "/docs/customization",
          items: [],
        },
      ],
    },
  ],
};
