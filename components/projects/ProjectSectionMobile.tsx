"use client"

import React, { useRef } from "react"
import { Project } from "@/.contentlayer/generated/types"

import SelectedProjectItem from "./SelectedProjectItem"

type Props = { selectedProjects: Project[] }

function ProjectSectionMobile({ selectedProjects }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const newLocal =
    "relative block h-max min-h-[100vh] py-[80px] w-full overflow-x-clip lg:hidden"
  return (
    <div className={newLocal}>
      <div style={{}} className="px-5 py-8">
        <h2 className="mb-2 text-[36px] font-semibold leading-3">
          Selected Projects
        </h2>

        <p className="mb-3 max-w-2xl text-[17px] font-semibold leading-[1.19] tracking-tight text-zinc-300">
          Dive into a curated showcase of my key projects. Each project
          demonstrates a unique blend of creativity, technical prowess, and
          user-centered design, illustrating my ability to tackle complex
          challenges and deliver effective solutions.
        </p>
      </div>

      <div className="h-full w-full border-[#D9D9D9] px-3 transition-all">
        {selectedProjects.map((project) => (
          <SelectedProjectItem project={project} />
        ))}
      </div>
    </div>
  )
}

export default ProjectSectionMobile
