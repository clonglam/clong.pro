import { Suspense } from "react"

import HeroVideo from "@/components/hero-video"
import MarqueeScrollingText from "@/components/marquee-scrolling-text"
import ProjectSection from "@/components/section-Projects"
import AboutSection from "@/components/section-about"
import SubHeroText from "@/components/sub-hero-text"

export default function IndexPage() {
  return (
    <div className="bg-[#1f1f1f] text-[#F3F3F3]">
      <Suspense fallback={<div>Loading...</div>}>
        <HeroVideo />
      </Suspense>
      <SubHeroText />
      <Suspense fallback={<div>Loading...</div>}>
        <MarqueeScrollingText />
      </Suspense>

      <ProjectSection />
      {/* <HorizontalImageGallery /> */}
      <AboutSection />
    </div>
  )
}
