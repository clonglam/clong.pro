export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Hugo Lam",
  description:
    "Profile of Hugo Lam aka CLong a web developer and a medai artist.",
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
    twitter: "https://twitter.com/clonglam",
    github: "https://github.com/clonglam",
    // docs: "https://ui.shadcn.com",
  },
  marqueeText: ["Projects", "Works", "Designs"],
}
