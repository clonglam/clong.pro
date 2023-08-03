"use client"

import { useRef } from "react"
import Image from "next/image"
import { cubicBezier, motion, useScroll, useTransform } from "framer-motion"

import EndingApplicationsSectionMobile from "./EndingApplicationsSectionMobile"

type Props = {}

function EndingApplications({}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  })

  const { scrollYProgress: containerY } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  })

  const subTitleY = useTransform(scrollYProgress, [0.2, 1], ["-250px", "0px"], {
    // ease: cubicBezier(0.17, 0.8, 0.95, 0.67),
  })

  const appsGroupsTop = useTransform(containerY, [0, 0.5], ["0px", "-128px"], {
    // ease: cubicBezier(0.17, 0.8, 0.95, 0.67),
  })

  const appsGroupsBottom = useTransform(
    containerY,
    [0.3, 1],
    ["0px", "-128px"],
    {
      // ease: cubicBezier(0.17, 0.8, 0.95, 0.67),
    }
  )

  const appsGroupsMiddle = useTransform(
    containerY,
    [0.2, 0.8],
    ["0px", "-126px"],
    {
      ease: cubicBezier(0.17, 0.8, 0.95, 0.67),
    }
  )

  const subTitleOpacity = useTransform(scrollYProgress, [0.75, 1], [0, 1], {
    ease: cubicBezier(0.17, 0.8, 0.95, 0.67),
  })

  return (
    <section className="relative min-h-[100vh] bg-white py-[100px] text-center">
      <motion.div
        className="relative mx-auto  hidden flex-col lg:flex"
        ref={containerRef}
      >
        <motion.div
          className="top-apps-group relative mx-auto flex aspect-[2/1] h-full w-full max-w-[1536px] items-center justify-center transition-all"
          style={{ y: appsGroupsTop }}
        >
          <picture className="absolute top-0 object-contain">
            <source srcSet="/apps_top_1.png" media="(min-width:650px)" />
            <Image
              src="/apps_top_1.png"
              alt="apps_top_1"
              width={1514}
              height={713}
            />
          </picture>
          <Image
            src="/apps_top_2.png"
            alt="apps_top_2"
            fill
            className="absolute top-0 object-contain"
          />
          <Image
            src="/apps_top_3.png"
            alt="apps_top_3"
            fill
            className="absolute top-0 object-contain"
          />
        </motion.div>

        <motion.div
          className=" middle-Image relative mx-auto mt-[-120px] flex aspect-[5/4] w-full max-w-[1536px] flex-col items-center justify-center py-[-254px] transition-all"
          ref={ref}
          style={{ y: appsGroupsMiddle }}
        >
          <div className="applications-heading sticky left-0 top-[50vh] z-30 flex flex-col items-center justify-center">
            <motion.h2
              className="py-3 text-3xl font-bold text-zinc-800 transition-all"
              style={{ y: subTitleY }}
            >
              Things that I know
            </motion.h2>

            <motion.p
              className=" w-full max-w-lg  text-center text-zinc-600"
              style={{ y: subTitleY, opacity: subTitleOpacity }}
            >
              I use many tools to do my work. The more tools I learn, the better
              I can pick the best one for each job. This helps me do better work
              on my projects.
            </motion.p>
          </div>

          <Image
            src="/apps_middle_1.png"
            alt="apps_middle_1"
            fill
            className="absolute top-0 object-contain"
          />
          <Image
            src="/apps_middle_2.png"
            alt="apps_middle_2"
            fill
            className="absolute top-0 object-contain"
          />
        </motion.div>

        <motion.div
          className="bottom-apps-group relative flex aspect-[2/1] h-full w-full items-center justify-center transition-all"
          style={{ y: appsGroupsBottom }}
        >
          <Image
            src="/apps_bottom_1.png"
            alt="apps_bottoms"
            width={1514}
            height={713}
            className="absolute top-0 object-cover"
          />
          <Image
            src="/apps_bottom_2.png"
            alt="apps_bottoms"
            width={1514}
            height={713}
            className="absolute top-0 object-cover"
          />
          <Image
            src="/apps_bottom_3.png"
            alt="apps_bottoms"
            width={1514}
            height={713}
            className="absolute top-0 object-cover"
          />
        </motion.div>
      </motion.div>

      <div className="block lg:hidden">
        <EndingApplicationsSectionMobile />
      </div>
    </section>
  )
}

export default EndingApplications
