export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next.js",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/#about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Blog",
      href: "/",
      disabled: true,
    },
  ],
  socialMedia: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/clonglam",
    // docs: "https://ui.shadcn.com",
  },
  marqueeText: ["Projects", "Works", "Designs"],
}
