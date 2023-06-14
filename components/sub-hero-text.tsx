"use client"

import React, { useRef } from "react"
import { motion, useInView, useScroll } from "framer-motion"

import FadeInText from "./animation/fade-in-text"

type Props = {}

function SubHeroText({}: Props) {
  const ref = useRef<any>(null)

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section
      className="px-15 py-15 container mb-12 min-h-[50vh] pt-24"
      ref={ref}
    >
      <FadeInText>
        <h2 className="mb-6 w-[320px] text-5xl font-bold md:mb-7 md:text-5xl lg:mb-8 lg:w-[680px] lg:text-6xl">
          Code. Design. knowledge.
        </h2>
      </FadeInText>

      <FadeInText>
        <p className="md:text-md mb-2 w-[480px] max-w-[80vw] text-justify text-sm font-bold tracking-tight md:w-[640px] lg:mb-5 lg:w-[840px] lg:text-lg">
          Hugo Lam have more than 5 year Working Experience in Hong Kong, and
          Current Located in Canada. in making Web application, Start from pixel
          prefect, to Supercharged by the M2 chip — and with up to 18 hours of
          battery life1 — both laptops deliver blazing-fast performance in an
          ultraportable design. More than 5 year Expreince in making Web
          application, Start from pixel prefect, to{" "}
        </p>
      </FadeInText>

      <FadeInText>
        <p className="lg:text-md mb-2 text-sm font-semibold text-gray-600">
          Full Stack Developer | Media Artist
        </p>
      </FadeInText>

      <FadeInText>
        <a className="text-sfont-semibold cursor-pointer text-blue-500">{`Watch Profiole >`}</a>
      </FadeInText>
    </section>
  )
}

export default SubHeroText
