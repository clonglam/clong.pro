"use client"

import Image from "next/image"
import { motion } from "framer-motion"

type Props = {}

function EndingApplicationsSectionMobile({}: Props) {
  return (
    <section className="relative min-h-[100vh] overflow-x-hidden bg-white text-center">
      <motion.div className="relative mx-auto flex flex-col">
        <motion.div className="top-apps-group relative mx-auto flex aspect-[2/1] h-full w-[500px] items-center justify-center object-center transition-all md:w-[768px]">
          <picture className="absolute top-0 object-contain">
            <source srcSet="/apps_top_1.png" media="(min-width:650px)" />
            <Image
              src="/apps_top_1.png"
              alt="apps_top_1"
              width={1514}
              height={713}
              className="object-contain"
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

        <div className=" middle-Image relative mx-auto flex w-full flex-col items-center justify-center transition-all">
          <motion.h2 className="text-xl font-bold text-zinc-800 transition-all">
            Things that I know
          </motion.h2>

          <div className="flex h-[200px] w-[500px] items-center justify-center md:h-[320px] md:w-[768px]">
            <Image
              src="/apps_middle_base.png"
              alt="apps_middle_1"
              width={1514}
              height={894}
              className=" object-contain"
            />
          </div>

          <motion.p className=" mt-[140px] w-full max-w-lg px-5 text-center text-sm leading-tight text-zinc-600 md:mt-[60px] md:text-lg">
            I use many tools to do my work. The more tools I learn, the better I
            can pick the best one for each job. This helps me do better work on
            my projects.
          </motion.p>
        </div>

        <motion.div className="bottom-apps-group relative mx-auto flex aspect-[2/1] h-full w-[500px] flex-col items-center justify-center object-center transition-all md:h-[320px] md:w-[768px]">
          <Image
            src="/apps_bottom_1.png"
            alt="apps_bottoms"
            fill
            className="absolute top-0 object-contain"
          />
          <Image
            src="/apps_bottom_2.png"
            alt="apps_bottoms"
            fill
            className="absolute top-0 object-contain"
          />
          <Image
            src="/apps_bottom_3.png"
            alt="apps_bottoms"
            fill
            className="absolute top-0 object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default EndingApplicationsSectionMobile
