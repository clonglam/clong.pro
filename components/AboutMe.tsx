"use client"

import React, { useRef } from "react"
import Image from "next/image"
import { cubicBezier, motion, useScroll, useTransform } from "framer-motion"

import { Icons } from "./icons"
import ProjectVideo from "./projects/ProjectVideo"

type Props = {}

const AboutMe = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  const width = useTransform(scrollYProgress, [0, 1], ["100vw", "75vw"], {
    ease: cubicBezier(0.17, 0.6, 0.95, 0.67),
  })

  const color = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["#1F1F1F", "#D9D9D9"],
    {}
  )

  return (
    <motion.div
      id="about"
      className="flex flex-col gap-y-4 py-[80px] text-[#1F1F1F] lg:mt-[-30vh]"
      style={{ backgroundColor: color }}
    >
      <div
        className="relative flex min-h-[180vh] w-full flex-col gap-y-5"
        ref={ref}
      >
        <div className="sticky left-0 top-[20vh] flex flex-col items-center justify-start">
          <motion.div
            className="relative mb-2 aspect-video w-[100vw] items-end object-center transition-all"
            style={{ width }}
          >
            <video
              controls
              className="object-cover object-center"
              muted
              autoPlay
            >
              <source src="/assets/heroVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className=" absolute z-30 flex h-[0px] w-[0px] items-center justify-center rounded-full bg-blue-400 text-center text-black shadow-sm transition-all duration-200 group-hover:flex group-hover:h-[120px] group-hover:w-[120px]">
              <Icons.play />
            </div>
          </motion.div>

          <div className="container flex gap-x-5">
            <div className="relative hidden h-[30vh] w-[25vw] lg:block">
              <Image
                src="/assets/projects/actorsGalleryOgImage.png"
                alt="123"
                fill
                className="object-cover"
              />
            </div>

            <div className="max-w-4xl px-5">
              <h2 className="text-left text-8xl font-semibold leading-tight">
                About ME
              </h2>
              <p className="mb-3 font-bold text-zinc-700">
                I am a full stack developer with PREN stack (Postgres, ReactJS,
                ExpressJS, NodeJS) with advanced SASS skills. UI Version control
                with GIT, Testing with jest. 5 year working experience in making
                Web application, Start from pixel prefect, and forcus in doing
                different animation effect to create diferent margic effect,
                with clean and reusable code.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container flex gap-x-5">
        <div className="relative aspect-[4/3] w-[75vw]">
          <Image
            src="/assets/projects/actorsGalleryOgImage.png"
            alt="123"
            fill
            className="object-cover"
          ></Image>
        </div>
        <div className="relative aspect-[4/3] w-[25vw]">
          <Image
            src="/assets/projects/actorsGalleryOgImage.png"
            alt="123"
            fill
            className="object-cover"
          ></Image>
        </div>
      </div>
    </motion.div>
  )
}

export default AboutMe
