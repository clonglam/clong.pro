import React from "react"
import { allProjects } from "@/.contentlayer/generated"
import { compareDesc } from "date-fns"

import FilterSelection from "@/components/projects/FilterSelection"
import ProjectsGrid from "@/components/projects/ProjectsGrid"

function ProjectsGridSection() {
  const projects = allProjects
    .filter((project) => project.published)
    .sort((a, b) => {
      return compareDesc(b.order, a.order)
    })
    .slice(0, 4)

  return (
    <div
      id="projects"
      className="container mx-auto min-h-[80vh] bg-[#1f1f1f] px-5 pt-[68px] text-[#F3F3F3]"
    >
      <h1 className="mb-1 text-4xl font-semibold">Projects</h1>
      <p className="mb-8 text-sm leading-5 tracking-[0.02em]">
        Some Projects that I did before. See how I use my skills in the project.
        Vist my{" "}
        <a
          className="underline"
          href="https://github.com/clonglam"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>{" "}
        and click on the projects to know what have I did.
      </p>

      <FilterSelection />
      <ProjectsGrid projects={projects} />
    </div>
  )
}

export default ProjectsGridSection
