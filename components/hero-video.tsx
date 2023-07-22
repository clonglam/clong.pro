"use client"

import React, { useRef } from "react"
import { cubicBezier, motion, useScroll, useTransform } from "framer-motion"

function HeroVideo() {
  const ref = useRef<any>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  })

  const width = useTransform(
    scrollYProgress,
    [1, 0.7, 0.65, 0.6],
    ["20vw", "80vw", "80vw", "100vw"],
    { ease: cubicBezier(0.17, 0.67, 0.83, 0.67) }
  )

  const height = useTransform(
    scrollYProgress,
    [1, 0.55, 0.4],
    ["80vh", "80vh", "100vh"],
    { ease: cubicBezier(0.17, 0.67, 0.83, 0.67) }
  )

  const firstTextOpacity = useTransform(
    scrollYProgress,
    [1, 0.95, 0.6, 0.5],
    [0.8, 1, 1, 0],
    { ease: cubicBezier(0.17, 0.67, 0.83, 0.67) }
  )

  const heroTextScale = useTransform(
    scrollYProgress,
    [1, 0.9, 0.6, 0.5],
    [0.8, 1.1, 1.13, 1.05],
    { ease: cubicBezier(0.17, 0.67, 0.83, 0.67) }
  )

  return (
    <StickyContainer sectionRef={ref}>
      <div className="relative h-[100vh] w-[100vw]">
        <div className="hero-video-container">
          <motion.div
            style={{ width, height }}
            className="hero-video-mask min-w-[400px]"
          >
            {/* <video autoPlay muted loop className="hero-video">
              <source src="https://d33wubrfki0l68.cloudfront.net/cbbd243cbba5f491bf14d3b6f763c340c4226bbf/b620f/assets/home/duo_reel--desktop.mp4" />
              your browser is not support video component
            </video> */}
            <video autoPlay muted loop className="hero-video">
              <source src="/assets/heroVideo.mp4" />
              your browser is not support video component
            </video>
          </motion.div>
        </div>

        <motion.h1
          style={{ opacity: firstTextOpacity, scale: heroTextScale }}
          className=" absolute top-[20vh] w-full items-center text-center  text-8xl font-bold text-white"
        >
          Lam Sze Long
        </motion.h1>
      </div>
    </StickyContainer>
  )
}

export function StickyContainer({
  children,
  sectionRef,
}: {
  children: React.ReactNode
  sectionRef: React.MutableRefObject<any>
}) {
  return (
    <section
      className="relative h-[300vh] min-h-[800px] w-full bg-black "
      ref={sectionRef}
    >
      <div className="sticky-container h-[300vh] ">
        <div className="sticky-content left-0 top-0 flex h-[100vh] min-h-[800px] w-full items-center overflow-hidden bg-black">
          <div className="content-container">{children}</div>
        </div>
      </div>
    </section>
  )
}

export default HeroVideo
