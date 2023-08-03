"use client"

import React, { useRef } from "react"
import { cubicBezier, motion, useScroll, useTransform } from "framer-motion"

type Props = {}

function ScrollingProjectsSection({}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["100%", "0%"], {
    ease: cubicBezier(0.17, 0.8, 0.95, 0.67),
  })

  return (
    <div className="relative h-[200vh] w-[100vw]  bg-[#1f1f1f]" ref={ref}>
      <div className="sticky left-0 top-0 h-[100vh] w-[50vw] border-r-2 border-[#D9D9D9]">
        <div className="text-[10vh]">Selected Projects12312312</div>

        <p className="w-[50vw]">
          Your love, generosity and support has made an incredible difference in
          the lives of children around the world this financial year. Just take
          a look!
        </p>
      </div>

      <div className="absolute left-[50vw] w-[50vw]">
        <div className="border-b  px-3 py-5">
          <h4>Astral Rewards</h4>
          <p>project descriptes asdf asd</p>
        </div>
        <div className="border-b  px-3 py-5">
          <h4>Astral Rewards</h4>
          <p>project descriptes asdf asd</p>
        </div>
        <div className="border-b  px-3 py-5">
          <h4>Astral Rewards</h4>
          <p>project descriptes asdf asd</p>
        </div>
        <div className="border-b  px-3 py-5">
          <h4>Astral Rewards</h4>
          <p>project descriptes asdf asd</p>
        </div>
      </div>
    </div>
  )
}

export default ScrollingProjectsSection
