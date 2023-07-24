import { Suspense } from "react"

import AboutSection from "@/components/about/section-about"
import HeroVideo from "@/components/hero-video"
import SubHeroTextSticky from "@/components/heroSection/SubHeroTextSticky"
import SubHeroText from "@/components/heroSection/sub-hero-text"
import MarqueeScrollingText from "@/components/marquee-scrolling-text"
import ProjectSection from "@/components/projects/section-Projects"

export const metadata = {
  title: "Home - Hugo Lam ",
  description:
    "Profile of Hugo Lam - CLong a web developer and a medai artist.",
}

export default function IndexPage() {
  return (
    <div className="bg-[#1f1f1f] text-[#F3F3F3]">
      <HeroVideo />

      <SubHeroTextSticky />

      <MarqueeScrollingText />

      <ProjectSection />

      <AboutSection />
    </div>
  )
}
