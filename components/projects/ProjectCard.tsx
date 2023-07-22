import React from "react"
import Image from "next/image"
import Link from "next/link"

import { Icons } from "../icons"
import type { Project } from ".contentlayer/generated/types"

type Props = { project: Project; index: number }

function ProjectCard({ project, index }: Props) {
  return (
    <div className="group space-y-3 overflow-hidden transition-all duration-200">
      <Link href={project.slug}>
        <div className=" relative mb-1 min-h-[280px] w-full rounded bg-gradient-to-b from-[#cfcfcf/0.8] from-10% via-white via-20% to-[#cfcfcf/0.7] to-90% shadow backdrop-blur">
          <Image
            src={project.image}
            fill
            className="rounded object-contain transition-all duration-200"
            alt="project cover"
            priority={index <= 1}
          />

          <div className="absolute right-0 top-0 h-full w-1/2 translate-x-full overflow-hidden bg-[#133A74] p-4 text-white opacity-0 transition-transform duration-500 group-hover:translate-x-0 group-hover:opacity-100">
            <div className=" flex flex-col items-center justify-center gap-y-5 text-center">
              <h3>{project.title}</h3>
              <Icons.x />
              <h3>{project.tags[0] || "Web Application"}</h3>
            </div>
          </div>
        </div>
      </Link>

      <Link href={project.slug}>
        <h3 className="flex gap-x-3 underline-offset-4 group-hover:underline">
          {/* {project.slug} */}
          {project.title}
          <Icons.externalLink className="h-5 w-5" />
        </h3>
      </Link>
    </div>
  )
}

export default ProjectCard
