"use client"

import { useRef } from "react"
import Link from "next/link"
import { allProjects } from "@/.contentlayer/generated"
import { cubicBezier, motion, useScroll, useTransform } from "framer-motion"

import ProjectSection from "./ProjectSection"
import ScrollingProjectCard from "./ScrollingProjectCard"

type Props = {}

function ProjectTestSection({}: Props) {
  const projects = allProjects
    .sort((a, b) => a.order - b.order)
    .filter((project) => project.published)
    .slice(0, 4)

  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  })

  const x = useTransform(scrollYProgress, [0.3, 1], ["0%", "-100%"], {
    ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
  })

  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.5], [1, 1, 0], {
    ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
  })
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.95, 1],
    ["#fff", "#fff", "#000"],
    {
      ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
    }
  )
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.95, 1],
    ["#000", "#000", "#fff"],
    {
      ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
    }
  )
  // <div className="relative flex w-full items-center justify-center">
  return (
    <section className="relative flex h-[200vh] w-[100vw] items-start justify-center">
      {/* <section className="relative z-20 mt-3 w-[100vw]"> */}
      <div className="relative z-20" ref={ref}>
        <motion.div
          className="sticky left-0 top-0 h-[100vh]  pt-[10vh]"
          // style={{ opacity, backgroundColor: bgColor, color: textColor }}
        >
          <div className="container mx-auto mb-5 px-8">
            <h3 className="mb-2 text-5xl font-bold md:mb-4">
              Selected Project
            </h3>
            <p
              className="md:text-md mb-2 max-w-5xl text-justify text-sm leading-normal lg:text-lg "
              style={{ textJustify: "inter-word" }}
            >
              Dive into a curated showcase of my key projects. Each project
              demonstrates a unique blend of creativity, technical prowess, and
              user-centered design, illustrating my ability to tackle complex
              challenges and deliver effective solutions. The projects span
              across various domains, providing a comprehensive view of my
              diverse skills and experiences.
            </p>

            <Link
              href="/projects"
              className="font-semibold text-blue-500 underline-offset-2 hover:underline"
            >
              {` All Projects >`}
            </Link>
          </div>

          <motion.div
            className="flex justify-start gap-5"
            style={{ x }}
            // ref={scrollingContainer}
          >
            {projects.map((project, index) => (
              <ScrollingProjectCard project={project} key={index} />
            ))}
          </motion.div>
        </motion.div>
      </div>
      {/* </section> */}
      {/* <HorizotalProjectScroll />
       */}
      {/* <div className="relative z-10 h-[300vh] bg-transparent">
        <div className="sticky top-0 flex h-[100vh] w-full items-end justify-end text-[30vh] text-zinc-700">
          HorizotalProjectScroll
        </div>
      </div> */}
    </section>
  )
}

export default ProjectTestSection
