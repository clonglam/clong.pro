"use client"

import React, { useRef } from "react"
import { cubicBezier, motion, useScroll, useTransform } from "framer-motion"

type Props = {}

function FiveYearExperience({}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "end end"],
  })

  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.8, 1],
    [0, 1, 1, 0],
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
        <motion.span
          className="text-center text-[46vh]"
          style={{ opacity: titleOpacity }}
          transition={{ type: "spring", damping: 300 }}
        >
          5
        </motion.span>
        <motion.p
          style={{ opacity: subTextOpacity }}
          className="-mt-8"
          transition={{ type: "spring", damping: 300 }}
        >
          Year Expereince{" "}
        </motion.p>
      </div>
    </div>
  )
}

export default FiveYearExperience
