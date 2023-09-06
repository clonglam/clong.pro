"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

import ScrollDownArrow from "../ScrollDownArrow"
import { Icons } from "../icons"

interface ProjectHeroProps {
  title: string
  description: string
  tags: string[]
  year: number
  webDemoLink?: string
  colorTheme: string
  shortDescription?: string
  primaryText: string
}

function ProjectHero({
  title,
  description,
  tags,
  year,
  colorTheme,
  shortDescription,
  primaryText = "#2F2F2F",
}: ProjectHeroProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div
      className="relative flex h-[100vh] flex-col items-center bg-zinc-800 py-5 pt-[20vh] bg-blend-difference"
      style={{
        background: colorTheme,
        color: primaryText,
        // mixBlendMode: "difference",
      }}
      // style={{ mixBlendMode: "difference", color: "white" }}
      ref={ref}
    >
      <div className="overflow-hidden">
        <motion.h1
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="mb-5 max-w-full text-center text-8xl lg:text-[10rem] xl:text-[12rem]"
        >
          {title}
        </motion.h1>
      </div>

      <div className="overflow-hidden">
        <motion.p
          className="ml-3 max-w-sm text-center text-lg md:ml-[128px] md:max-w-md md:text-justify md:text-2xl lg:ml-[256px] "
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transitionDelay: "80ms",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s ",
          }}
        >
          {shortDescription ? shortDescription : description}
        </motion.p>
      </div>

      <ScrollDownArrow isInView={isInView} primaryText={primaryText} />
    </div>
  )
}

export default ProjectHero
