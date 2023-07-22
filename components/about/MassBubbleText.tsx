"use client"

import React, { useRef } from "react"
import { cubicBezier, motion, useScroll, useTransform } from "framer-motion"

type Props = {}

function MassBubbleText({}: Props) {
  const textContainerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: textContainerRef,
    offset: ["start end", "end end"],
  })

  const y = useTransform(scrollYProgress, [1, 0], ["0vh", "-1800vh"], {
    ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
  })

  const texts = [
    "Design",
    "Experince",
    "Playful",
    "aboutme",
    "Test words",
    "image",
  ]

  return (
    <div ref={textContainerRef}>
      <motion.div style={{ y }}>
        <span>TEsting </span>
      </motion.div>
    </div>
  )
}

export default MassBubbleText
