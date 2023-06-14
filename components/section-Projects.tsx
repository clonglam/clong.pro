import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ProjectType, projects } from "data"

import { Icons } from "./icons"

type Props = {}

function ProjectSection({}: Props) {
  return (
    <section className="container mt-3 max-w-5xl px-8 py-5">
      <h3 className="mb-2 text-5xl font-bold md:mb-4">Selected Project</h3>
      <p
        className="md:text-md mb-5 text-justify text-sm leading-normal lg:text-lg "
        style={{ textJustify: "inter-word" }}
      >
        More than 5 year Expreince in making Web application, Start from pixel
        prefect, to Supercharged by the M2 chip — and with up to 18 hours of
        battery life1 — both laptops deliver blazing-fast performance in an
        ultraportable design. More than 5 year Expreince in making Web
        application, Start from pixel prefect, to{" "}
      </p>
      <div className="grid grid-cols-1 gap-5">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </section>
  )
}

interface ProjectCardType {
  project: ProjectType
}

function ProjectCard({ project }: ProjectCardType) {
  const { title, coverImage, slug } = project
  return (
    <div className="h-full w-full">
      <div className="relative aspect-video h-full w-full rounded-lg">
        <Image
          className="rounded-lg"
          src="/shopit-cover.png"
          fill
          alt="shopit-cover"
        />
      </div>

      <Link href={`/projects/${slug}`} className=" mt-1 flex items-center">
        <h3 className="mr-1">{title}</h3>
        <Icons.externalLink />
      </Link>
    </div>
  )
}

export default ProjectSection
