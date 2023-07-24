import React from "react"
import { allProjects } from "@/.contentlayer/generated"
import { compareDesc } from "date-fns"

import ProjectCard from "@/components/projects/ProjectCard"

interface ProjectsProps {}

export const metadata = {
  title: "Projects - Lam Sze Long",
}

function Projects({}: ProjectsProps) {
  const projets = allProjects
    .filter((project) => project.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <div className="container mx-auto min-h-[80vh] bg-[#1f1f1f] px-5 pt-[68px] text-[#F3F3F3]">
      <h1 className="mb-8 text-xl font-semibold">Projects</h1>

      <div className="grid grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-2 ">
        {projets.map((project, index) => (
          <ProjectCard project={project} key={index} index={index} />
        ))}
      </div>
    </div>
  )
}

export default Projects
