"use client"

import { useRef } from "react"
import { allProjects } from "@/.contentlayer/generated"
import { cubicBezier, motion, useScroll, useTransform } from "framer-motion"

import ProjectSectionMobile from "./ProjectSectionMobile"
import SelectedProjectItem from "./SelectedProjectItem"

type Props = {}

function ProjectSection({}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const selectedProjects = allProjects
    .sort((a, b) => a.order - b.order)
    .filter((project) => project.published)
    .slice(0, 4)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  })

  const x = useTransform(
    scrollYProgress,
    [0, 0.6],
    ["calc(100% -0px + 0vw)", `calc(-100% + 100vw + 30px)`],
    {
      ease: cubicBezier(0.17, 0.8, 0.95, 0.67),
    }
  )

  const scrollProjectIn = useTransform(
    scrollYProgress,
    [0.6, 1],
    ["80%", "-100%"],
    {
      ease: cubicBezier(0.17, 0.8, 0.95, 0.67),
    }
  )

  return (
    <>
      <div
        id="projects"
        className="relative mt-[-30vh] hidden h-max min-h-[280vh] w-full overflow-x-clip lg:block"
        ref={ref}
      >
        <motion.div
          className="sticky left-0 top-[65vh] z-0 flex h-[100vh] w-max space-x-8 transition-all ease-in"
          style={{ x }}
        >
          <p className="no-wrap pl-10 text-right text-[30vh] text-[#F3F3F3]">
            Projects in 2023
          </p>

          <div style={{}} className="ml-5 max-w-[50vw] px-5">
            <div className="h-[50vh]">
              <div className="text-[5vh] leading-tight lg:text-[6rem] xl:text-[6.8rem]">
                Selected Projects
              </div>

              <p className="w-[50vw] max-w-[50vw] lg:text-3xl 2xl:text-5xl">
                Dive into a curated showcase of my key projects. Each project
                demonstrates a unique blend of creativity, technical prowess,
                and user-centered design, illustrating my ability to tackle
                complex challenges and deliver effective solutions.
              </p>
            </div>
          </div>

          <motion.div
            className="min-h-[80vh] w-full max-w-[50vw] border-l-2 border-[#D9D9D9] px-3 transition-all"
            style={{ y: scrollProjectIn }}
          >
            {selectedProjects.map((project) => (
              <SelectedProjectItem project={project} />
            ))}
          </motion.div>
        </motion.div>
      </div>

      <ProjectSectionMobile selectedProjects={selectedProjects} />
    </>
  )
}

export default ProjectSection
