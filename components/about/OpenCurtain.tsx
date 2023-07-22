"use client"

import React, { useRef } from "react"
import { cubicBezier, motion, useScroll, useTransform } from "framer-motion"

import ProjectBubble from "./ProjectBubble"

type Props = {}

function OpenCurtain({}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.05, 0.8, 1],
    [0.2, 0.2, 1, 1],

    {
      ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
    }
  )

  const subTextOpacity = useTransform(
    scrollYProgress,
    [0.25, 0.35, 0.8, 1],
    [0, 1, 1, 0],
    {
      ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
    }
  )

  return (
    <div className="relative h-[120vh] w-full" ref={ref}>
      <div className="sticky top-[8vh] flex w-full flex-col items-center justify-center">
        <motion.div
          className="h-[100vh] w-full bg-red-400"
          style={{ scaleX }}
        />
      </div>
    </div>
  )
}

export default OpenCurtain
