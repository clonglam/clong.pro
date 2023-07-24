"use client"

import { useRef } from "react"
import Link from "next/link"
import { allProjects } from "@/.contentlayer/generated"
import { cubicBezier, motion, useScroll, useTransform } from "framer-motion"

import ScrollingProjectCard from "./ScrollingProjectCard"

type Props = {}

function ProjectSection({}: Props) {
  const projects = allProjects
    .sort((a, b) => a.order - b.order)
    .filter((project) => project.published)
    .slice(0, 4)

  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  })

  const x = useTransform(scrollYProgress, [0.3, 1], ["0vw", "-80vw"], {
    ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
  })

  const opacity = useTransform(scrollYProgress, [0.95, 1], [1, 0], {
    ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
  })

  return (
    <section className=" mt-3 overflow-x-clip">
      <div className=" h-[300vh] w-full " ref={ref}>
        <motion.div className="sticky left-0 top-[10vh]" style={{ opacity }}>
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
            className="flex gap-5  "
            style={{ x }}
            // ref={scrollingContainer}
          >
            {projects.map((project, index) => (
              <ScrollingProjectCard project={project} key={index} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectSection
