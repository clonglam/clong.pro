"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

import { cn } from "@/lib/utils"

import { Icons } from "../icons"
import { Button } from "../ui/button"

interface ProjectIntroType {
  title: string
  tags: string[]
  coverImage: string
  githubLink?: string
  webDemoLink?: string
  year?: number
  description: string
  subHeading: string
  technology: string[]
}

export function ProjectIntro({
  title,
  webDemoLink,
  description,
  subHeading,
  technology,
  githubLink,
  year,
  tags,
}: ProjectIntroType) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="mx-auto mb-8 max-w-6xl px-10" ref={ref}>
      <div className="mb-1 overflow-hidden">
        <motion.h1
          className={cn(
            "ease-ease-smooth text-4xl font-bold duration-500 delay-150",
            isInView ? "none" : "translate-y-[200px]"
          )}
        >
          {title}
        </motion.h1>
      </div>

      <div className="mb-1 overflow-hidden">
        <div
          className={cn(
            "ease-ease-smooth mb-1 flex items-center space-x-1 font-semibold duration-500 delay-500",
            isInView ? "none" : "translate-y-[200px]"
          )}
        >
          <span>{year && `${year}`}</span>
          <span>{year && "|"}</span>

          {tags.map((tag, index) => (
            <>
              <span>{tag}</span>
              {index !== tags.length - 1 && <span>|</span>}
            </>
          ))}
        </div>
      </div>

      <div
        className={cn(
          "ease-ease-smooth mb-2 flex  gap-x-2 duration-500 delay-1000",
          isInView ? "opacity-100" : "opacity-0"
        )}
      >
        {webDemoLink && (
          <a href={webDemoLink} target="_blank" rel="noreferrer">
            <Button
              variant="outline"
              className=" rounded-full bg-white text-black hover:bg-slate-900 hover:text-white"
            >
              Launch Website
              <Icons.moveUpRight className="stroke-[1px] " />
            </Button>
          </a>
        )}

        {githubLink && (
          <a href={githubLink} target="_blank" rel="noreferrer">
            <Button
              variant="outline"
              className=" rounded-full bg-white text-black hover:bg-slate-900 hover:text-white"
            >
              Github
              <Icons.moveUpRight className="stroke-[1px] " />
            </Button>
          </a>
        )}
      </div>

      <div className="mt-12 grid w-full grid-cols-1 py-8 md:grid-cols-2">
        <div className="mb-3 pl-1 md:mb-0">
          <h3
            className={cn(
              "ease-ease-smooth font-bold duration-500 delay-200",
              isInView ? "opacity-100" : "opacity-0"
            )}
          >
            Technology
          </h3>

          <div className="overflow-hidden">
            <ul
              className={cn(
                "ease-ease-smooth duration-500 delay-300",
                isInView ? "none" : "translate-x-[-200px]"
              )}
            >
              {technology.map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-96">
          <h3
            className={cn(
              "delay-1200 ease-ease-smooth mb-2 text-5xl font-bold duration-500",
              isInView ? "none" : "translate-y-[200px]"
            )}
          >
            {subHeading}
          </h3>
          <p
            className={cn(
              "delay-[1600ms] ease-ease-smooth text-sm font-medium duration-500",
              isInView ? "none" : "translate-y-[200px]"
            )}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}

// function ImageGallery({ gallery }: { gallery: string[] }) {
//   return (
//     <div className="flex flex-col gap-y-5">
//       {gallery.map((image, index) => (
//         <div className="relative aspect-video h-full w-full " key={index}>
//           <Image
//             src={image}
//             alt={`projectImage_${index}`}
//             fill={true}
//             style={{ objectFit: "contain", objectPosition: "left" }}
//           />
//         </div>
//       ))}
//     </div>
//   )
// }
