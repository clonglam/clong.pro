import React from "react"
import Image from "next/image"
import { Project } from "@/types"

type Props = { project: Project }

function ProjectCard({ project }: Props) {
  return (
    <div className="min-h-[320px] w-full">
      <div className="relative min-h-[320px] w-full">
        <Image
          src={"/assets/airbnb_cover.png"}
          fill
          className="object-contain"
          alt="project cover"
        />
      </div>
      <h3>{project.title}</h3>
    </div>
  )
}

export default ProjectCard
