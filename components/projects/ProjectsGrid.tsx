"use client"

import React, { useMemo } from "react"
import { Project } from "@/.contentlayer/generated/types"

import { useTagsStore } from "../hooks/useTagsStore"
import ProjectCard from "./ProjectCard"

type Props = { projects: Project[] }

function ProjectsGrid({ projects }: Props) {
  const selectedTag = useTagsStore((s) => s.tag)

  const filteredProjects = useMemo(
    () => projects.filter((p) => p.tags.includes(selectedTag)),
    [selectedTag, projects]
  )
  return (
    <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
      {(selectedTag === "all" ? projects : filteredProjects).map(
        (project, index) => (
          <ProjectCard project={project} key={index} index={index} />
        )
      )}
    </div>
  )
}

export default ProjectsGrid
