import React from "react"
import Image from "next/image"
import Link from "next/link"

import { Icons } from "../icons"
import type { Project } from ".contentlayer/generated/types"

type Props = { project: Project; index: number }

function ProjectCard({ project, index }: Props) {
  return (
    <Link
      href={project.slug}
      className="group space-y-3 overflow-hidden transition-all duration-200"
    >
      <div className=" relative mb-1 aspect-video min-h-[120px] w-full bg-gradient-to-b from-[#cfcfcf/0.8] from-10% via-white via-20% to-[#cfcfcf/0.7] to-90% shadow backdrop-blur">
        <Image
          src={project.ogImage}
          fill
          className="rounded object-cover transition-all duration-200 "
          alt="project cover"
          priority={index <= 1}
        />

        <div className="absolute left-0 top-0 flex h-full w-1/2 -translate-x-full items-center justify-center overflow-hidden rounded-l bg-zinc-50/90 p-2 text-zinc-800 opacity-0 transition-transform duration-500 group-hover:translate-x-0 group-hover:opacity-100">
          <div className=" flex flex-col items-center justify-center gap-y-5 text-center">
            <h3 className="font-bold">{project.title}</h3>
            <Icons.x />
            <h3>{project.tags[0] || "Web Application"}</h3>
          </div>
        </div>
      </div>

      <h3 className="flex gap-x-3 underline-offset-4 group-hover:underline">
        {project.title}
        <Icons.externalLink className="h-5 w-5" />
      </h3>
    </Link>
  )
}

export default ProjectCard
