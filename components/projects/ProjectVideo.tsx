"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

import { Icons } from "../icons"

type Props = {
  videohref?: string
  placeholder: string
}

function ProjectVideo({ placeholder, videohref }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div
      className="mb-5 flex min-h-[120px] w-[100vw] items-center justify-center py-12"
      ref={ref}
    >
      {videohref ? (
        <Dialog>
          <DialogTrigger className="group flex items-center justify-center">
            <motion.div className="relative z-10 mx-auto aspect-video h-full min-h-[240px] w-[100vw] duration-500 md:w-[80vw]">
              <Image
                src={placeholder}
                alt="Project Cover"
                fill
                className="object-cotain"
              />
            </motion.div>
            <div className=" absolute z-30 flex h-[0px] w-[0px] items-center justify-center rounded-full bg-blue-400 text-center text-black shadow-sm transition-all duration-200 group-hover:flex group-hover:h-[120px] group-hover:w-[120px]">
              <Icons.play />
            </div>
          </DialogTrigger>

          <DialogContent className="w-[100vw] md:w-[80vw]">
            <video className="w-[100vw] md:w-[80vw]" controls>
              <source src={videohref} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </DialogContent>
        </Dialog>
      ) : (
        <motion.div className="relative z-10 mx-auto aspect-video h-full min-h-[240px] w-[100vw] duration-500 md:w-[80vw]">
          <Image
            src={placeholder}
            alt="Project Cover"
            fill
            className="object-cotain"
          />
        </motion.div>
      )}
    </div>
  )
}

export default ProjectVideo
