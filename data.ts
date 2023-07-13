export const projects: ProjectType[] = [
  {
    slugAsParams: "shop-it",
    title: "Shop-it",
    slug: "shop-it",
    category: "Ecomerce",
    year: 2022,
    githubLink: "https://github.com/clonglam/shopit-master",
    webDemoLink: "https://shopit-hor.vercel.app/",
    coverImage: "/assets/shopit-cover.png",
    subHeading: "Code. Design. Knowledge.",
    shortDescription:
      "A JOINT VENTURE WITH LONG-TIME FRIEND AND SHAPER DAN COBLEY TO EVOLVE AND GROW HIS BUSINESS.",
    description: `Shop-it is Real World Ecommerce System, it included 💁‍♂️ User authentication 🖥️ Product Catalog 🛒 Product Cart 💵 Secure Payment integration 📈 Amazing Admin dashboard 💽 Data fetch from backend server. 
      we are using react as frontend frameworks. It included both user and admin side UI Element. 💡 Component are divided based on functionality . 
      ✨ Key idea of designing the system keeping reusablity, lower coupling`,
    tags: [
      { id: "react", href: "/react", label: "react" },
      { id: "react", href: "/react", label: "react" },
      { id: "react", href: "/react", label: "react" },
    ],
    technology: ["typescript", "NextJS", "Tailwind css", "Prisma"],
    feature: [
      "You can add a new item with name, category, note, and image.",
      "When you add a new item, you can select one from the existing categories or add a new one if the category does not exist",
      "When you select an item, you can see its details and you can choose to add the current list or delete the item.",
      "You can add items to the current list",
      "You can toggle between editing state and completing state(Click on the pen Icon)",
    ],
    imageGallery: [
      "/assets/shopit-cover.png",
      "/assets/shopit-cover.png",
      "/assets/shopit-cover.png",
    ],
  },
]
export type ProjectType = {
  title: string
  slug: string
  slugAsParams: string
  year: number
  category: string
  subHeading: string
  shortDescription: string
  technology: string[]
  feature: string[]
  imageGallery: string[]
  coverImage: string
  description: string
  tags: ProjectTag[]
  webDemoLink?: string
  githubLink?: string
}

export type ProjectTag = {
  id: string
  label: string
  href: string
}
