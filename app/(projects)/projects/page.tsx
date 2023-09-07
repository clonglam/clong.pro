import React from "react"
import { allProjects } from "@/.contentlayer/generated"
import { compareDesc } from "date-fns"

import FilterSelection from "@/components/projects/FilterSelection"
import ProjectsGrid from "@/components/projects/ProjectsGrid"

interface ProjectsProps {}

export const metadata = {
  title: "Projects - Lam Sze Long",
}

function Projects({}: ProjectsProps) {
  const projects = allProjects
    .filter((project) => project.published)
    .sort((a, b) => {
      return compareDesc(b.order, a.order)
    })

  return (
    <div className="container mx-auto min-h-[80vh] bg-[#1f1f1f] px-5 pt-[68px] text-[#F3F3F3]">
      <h1 className="mb-8 text-xl font-semibold">Projects</h1>

      <FilterSelection />
      <ProjectsGrid projects={projects} />
    </div>
  )
}

export default Projects
