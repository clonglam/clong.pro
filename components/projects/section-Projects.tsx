"use client"

import { useRef } from "react"
import { allProjects } from "@/.contentlayer/generated"
import { cubicBezier, motion, useScroll, useTransform } from "framer-motion"

import MassBubbleText from "../about/MassBubbleText"
import ScrollingProjectCard from "./ScrollingProjectCard"

type Props = {}

function ProjectSection({}: Props) {
  const projects = allProjects
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
          <div className="container mx-auto px-8">
            <h3 className="mb-2 text-5xl font-bold md:mb-4">
              Selected Project
            </h3>
            <p
              className="md:text-md mb-5 max-w-5xl text-justify text-sm leading-normal lg:text-lg "
              style={{ textJustify: "inter-word" }}
            >
              More than 5 year Expreince in Web application, Start from pixel
              prefect, to Supercharged by the M2 chip — and with up to 18 hours
              of battery life1 — both laptops deliver blazing-fast performance
              in an ultraportable design. More than 5 year Expreince in making
              Web application, Start from pixel prefect, to{" "}
            </p>
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
