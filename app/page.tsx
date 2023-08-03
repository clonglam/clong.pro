import AboutMe from "@/components/AboutMe"
import EndingApplications from "@/components/EndingApplications"
import ProjectSection from "@/components/projects/ProjectSection"
import LandingScrollSection from "@/components/section-landing-scroll"

export const metadata = {
  title: "Home - Hugo Lam ",
  description:
    "Profile of Hugo Lam - CLong a web developer and a medai artist.",
}

export default function IndexPage() {
  return (
    <div className="overflow-x-clip bg-[#1f1f1f] text-[#F3F3F3]">
      <LandingScrollSection />
      <ProjectSection />
      <AboutMe />
      <EndingApplications />
    </div>
  )
}
