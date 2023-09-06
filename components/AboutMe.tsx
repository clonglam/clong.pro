"use client"

import React, { useRef } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { cubicBezier, motion, useScroll, useTransform } from "framer-motion"

import { cn } from "@/lib/utils"

import { Icons } from "./icons"
import { buttonVariants } from "./ui/button"

type Props = {}

const AboutMe = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  })

  const width = useTransform(scrollYProgress, [0, 1], ["100vw", "75vw"], {
    ease: cubicBezier(0.17, 0.6, 0.95, 0.67),
  })

  const color = useTransform(scrollYProgress, [0, 0.1], ["#1F1F1F", "#D9D9D9"])

  const titleOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1], {
    ease: cubicBezier(0.17, 0.6, 0.95, 0.67),
  })
  const subTitleOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1], {
    ease: cubicBezier(0.17, 0.6, 0.95, 0.67),
  })

  return (
    <motion.div
      className="flex flex-col gap-y-4 py-[80px] text-[#1F1F1F] lg:mt-[-30vh]"
      style={{ backgroundColor: color }}
    >
      <div
        className="relative flex min-h-[180vh] w-full flex-col gap-y-5"
        ref={ref}
      >
        <div className="sticky left-0 top-[20vh] flex flex-col items-center justify-start">
          {/* <motion.div
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
          </motion.div> */}

          <div className="container grid  grid-cols-1 gap-x-5 md:grid-cols-3">
            <motion.div
              className="relative col-span-1 h-max w-full"
              style={{ opacity: titleOpacity }}
            >
              <Image
                src="/assets/HugoLamHalfshoot.png"
                alt="ActorGallery"
                width={300}
                height={400}
                className="object-cover "
              />
            </motion.div>

            <div className="col-span-2 max-w-4xl px-5">
              <motion.h2
                id="about"
                className="mb-2 text-left font-semibold capitalize leading-tight md:text-7xl lg:text-8xl"
                style={{ opacity: titleOpacity }}
              >
                ABOUT ME
              </motion.h2>

              <motion.p
                className=" mb-2 max-w-2xl text-lg leading-tight text-zinc-700"
                style={{ opacity: subTitleOpacity }}
              >
                {`👋 Hello! I'm a Full Stack Developer with 5 years of experience,
                specializing in the PREN stack (Postgres, ReactJS, ExpressJS,
                NodeJS). My skill set includes advanced SASS for styling, GIT
                for version control, and Jest for testing. I take pride in
                writing clean, reusable code and crafting pixel-perfect UIs with
                engaging animations.`}
              </motion.p>

              <motion.p
                className="mb-3 max-w-2xl text-lg leading-tight text-zinc-700"
                style={{ opacity: subTitleOpacity }}
              >
                {`
                📜 In addition to my hands-on experience, I'm an AWS Certified
                Developer - Associate. This certifies my expertise in
                cloud-based solutions, rounding off my comprehensive skill set.
                Looking forward to creating something impactful together!
               `}
              </motion.p>

              <motion.div
                className="mb-3 grid grid-cols-2 gap-x-3 gap-y-5 font-semibold tracking-[0.002em]"
                style={{ opacity: subTitleOpacity }}
              >
                {[
                  "Front End Development",
                  "Back end Development",
                  "Search Engine Optimization",
                  "Social Media Marketing",
                ].map((skill, index) => (
                  <p className="flex items-center gap-x-2 text-sm" key={index}>
                    <Icons.play />
                    {skill}
                  </p>
                ))}
              </motion.div>

              <motion.button
                onClick={() => router.push("/projects")}
                className={cn(buttonVariants(), "bg-zinc-800")}
                style={{ opacity: subTitleOpacity }}
              >
                {`View Projects >`}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* <motion.div
        className="relative mb-2 aspect-video w-[100vw] items-end object-center transition-all"
        style={{ width }}
      >
        <video controls className="object-cover object-center" muted autoPlay>
          <source src="/assets/heroVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className=" absolute z-30 flex h-[0px] w-[0px] items-center justify-center rounded-full bg-blue-400 text-center text-black shadow-sm transition-all duration-200 group-hover:flex group-hover:h-[120px] group-hover:w-[120px]">
          <Icons.play />
        </div>
      </motion.div> */}

      <div></div>
      {/* <div className="container flex gap-x-5">
        <div className="relative aspect-[4/3] w-[75vw]">
          <Image
            src="/assets/projects/actorsGalleryOgImage.png"
            alt="actor gallery 2"
            fill
            className="object-cover"
          ></Image>
        </div>

        <div className="relative aspect-[4/3] w-[25vw]">
          <Image
            src="/assets/projects/actorsGalleryOgImage.png"
            alt="actors gallery 3"
            fill
            className="object-cover"
          ></Image>
        </div>
      </div> */}
    </motion.div>
  )
}

export default AboutMe
