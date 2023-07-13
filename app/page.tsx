import HeroVideo from "@/components/hero-video"
import MarqueeScrollingText from "@/components/marquee-scrolling-text"
import ProjectSection from "@/components/section-Projects"
import AboutSection from "@/components/section-about"
import SubHeroText from "@/components/sub-hero-text"

export default function IndexPage() {
  return (
    <div className="bg-[#F3F3F3]">
      <HeroVideo />
      <SubHeroText />
      <MarqueeScrollingText />
      <ProjectSection />
      {/* <HorizontalImageGallery /> */}
      <AboutSection />
    </div>
  )
}
