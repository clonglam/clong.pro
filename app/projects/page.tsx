import React from "react"
import { Project } from "@/types"

import ProjectCard from "@/components/ProjectCard"

interface ProjectsProps {}

function Projects({}: ProjectsProps) {
  const projects: Project[] = [
    {
      id: "1",
      ogImage: "",
      title: "Actor Gallery",
    },
  ]
  return (
    <div className="container mx-auto min-h-[80vh] bg-white px-5 py-8 ">
      <h1 className="text-sl font-semibold">Projects</h1>

      <div className="grid grid-cols-2 gap-x-5 ">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Projects
