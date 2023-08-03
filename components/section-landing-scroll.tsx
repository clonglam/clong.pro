"use client"

import React, { useRef } from "react"
import Image from "next/image"
import { cubicBezier, motion, useScroll, useTransform } from "framer-motion"

import LandingSectionMobile from "./LandingSectionMobile"
import SocialMediaIcons from "./SocialMediaIcons"

type Props = {}

function LandingScrollSection({}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  const x = useTransform(
    scrollYProgress,
    [0, 0.9],
    [`calc(0% + 0vw + 0rem)`, `calc(-100% + 50vw + 2rem)`],
    {
      ease: cubicBezier(0.17, 0.8, 0.95, 0.67),
    }
  )

  return (
    <>
      <div
        className="relative hidden min-h-[580vh] w-max overflow-x-clip bg-[#D9D9D9] text-[#1F1F1F] lg:block"
        ref={ref}
      >
        <div className="sticky left-0 top-0 z-50 flex h-max min-h-[100vh] w-[100vw]">
          <motion.div className="px-8 pt-[20vh]">
            <p className="max-w-[50vw] text-[10vh] leading-tight text-[#1F1F1F]">
              Hugo Lam Journary
            </p>
          </motion.div>

          <motion.div
            style={{ x }}
            className="absolute left-[50vw] top-0 z-10 flex h-max w-max transition-all duration-100 ease-linear"
          >
            <div className="w-[25vw] max-w-[25vw] border-l-4 border-[#1F1F1F] bg-[#D9D9D9] px-8 text-[2rem] lg:text-[10vh] ">
              <SocialMediaIcons />
            </div>

            <motion.div className="flex w-[25vw] items-end border-l-4 border-[#1F1F1F] bg-[#D9D9D9] p-8">
              <h3 className="text-[5vh] font-semibold leading-tight text-[#1F1F1F]">
                Code. Design. knowledge.
              </h3>
            </motion.div>

            <motion.div className="z-30 flex w-max items-end space-x-[5vw] border-l-4 border-[#1F1F1F] bg-[#D9D9D9] px-8">
              <h3 className="max-w-[70vw] pb-[5vh] text-[10vh]">
                Code. Design. knowledge.
              </h3>

              <div className="relative aspect-video h-[100vh] w-[100vw]">
                <Image
                  className="object-contain"
                  fill
                  src="/assets/projects/actorsGalleryOgImage.png"
                  alt="hero=-image"
                />
              </div>

              <div className="flex w-[100vw] flex-col px-8 pb-[5vh]">
                <h4 className="text-8xl ">Code. Design. knowledge.</h4>
                <p className="text-md w-[90vw] lg:text-3xl xl:text-5xl">
                  As a coder and designer, I constantly enhance my knowledge.
                  Learning new coding languages, design techniques, and tools
                  helps me create innovative and effective solutions. My
                  constant pursuit of knowledge fuels my passion and proficiency
                  in both coding and design.
                </p>
              </div>
            </motion.div>
            {/* </div> */}
          </motion.div>
        </div>
      </div>

      <div className="block lg:hidden">
        <LandingSectionMobile />
      </div>
    </>
  )
}

export default LandingScrollSection
