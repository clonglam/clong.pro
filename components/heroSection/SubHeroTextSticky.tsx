"use client"

import React, { useRef } from "react"
import Link from "next/link"
import { cubicBezier, motion, useScroll, useTransform } from "framer-motion"

import { cn } from "@/lib/utils"

type Props = {}

function SubHeroTextSticky({}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  })

  const titleOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.05, 0.9, 1],
    [0, 1, 1, 0],
    {
      ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
    }
  )

  const subTextOpacity = useTransform(
    scrollYProgress,
    [0.25, 0.35, 0.82, 1],
    [0, 1, 1, 0],
    {
      ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
    }
  )
  const ThirdRowOpacity = useTransform(
    scrollYProgress,
    [0.35, 0.4, 0.83, 1],
    [0, 1, 1, 0],
    {
      ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
    }
  )

  const CFAOpacity = useTransform(
    scrollYProgress,
    [0.35, 0.4, 0.83, 1],
    [0, 1, 1, 0],
    {
      ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
    }
  )
  return (
    <section
      className="px-15 py-15 container relative mb-12 h-[150vh] pt-24 text-white "
      ref={ref}
    >
      <div className="sticky top-[30vh] flex w-full flex-col justify-center px-8">
        <motion.h2
          className={cn(
            "mb-6 w-[320px] text-5xl font-bold duration-500 delay-150 ease-ease-smooth md:mb-7 md:text-5xl lg:mb-8 lg:w-[680px] lg:text-6xl"
            // isInView ? "none" : "translate-y-[200px]"
          )}
          style={{ opacity: titleOpacity }}
        >
          Code. Design. knowledge.
        </motion.h2>

        <div className="overflow-hidden">
          <motion.p
            className={cn(
              "md:text-md mb-2 w-[480px] max-w-[80vw] text-justify text-sm font-bold tracking-tight duration-500 delay-500 ease-ease-smooth md:w-[640px] lg:mb-5 lg:w-[840px]  lg:text-lg"
              // isInView ? "none" : "translate-y-[200px]"
            )}
            style={{ opacity: subTextOpacity }}
          >
            Hugo Lam have more than 5 year Working Experience in Hong Kong, and
            Current Located in Canada. in making Web application, Start from
            pixel prefect, to Supercharged by the M2 chip — and with up to 18
            hours of battery life1 — both laptops deliver blazing-fast
            performance in an ultraportable design. More than 5 year Expreince
            in making Web application, Start from pixel prefect, to{" "}
          </motion.p>
        </div>

        <motion.p
          className="lg:text-md mb-2 text-sm font-semibold text-[#F3F3F3]"
          style={{ opacity: ThirdRowOpacity }}
        >
          Full Stack Developer | Media Artist
        </motion.p>

        <Link href="/projects">
          <motion.span
            className="text-sfont-semibold cursor-pointer text-[18px] text-blue-500"
            style={{ opacity: CFAOpacity }}
          >
            {`Watch Profiole >`}
          </motion.span>
        </Link>
      </div>
    </section>
  )
}

export default SubHeroTextSticky
