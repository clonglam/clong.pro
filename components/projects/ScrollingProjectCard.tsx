import Image from "next/image"
import Link from "next/link"
import { Project } from "@/.contentlayer/generated"

import { Icons } from "../icons"

interface ProjectCardType {
  project: Project
}

function ScrollingProjectCard({ project }: ProjectCardType) {
  const { title, ogImage, slug } = project
  return (
    <div className="group h-full w-full">
      <Link href={slug}>
        <div className="relative aspect-video h-full w-[55vw] rounded-lg md:w-[40vw]">
          <Image className="rounded-lg" src={ogImage} fill alt="shopit-cover" />
        </div>
      </Link>

      <Link
        href={slug}
        className=" mt-1 flex items-center underline-offset-2 group-hover:underline"
      >
        <h3 className="mr-1">{title}</h3>
        <Icons.externalLink />
      </Link>
    </div>
  )
}

export default ScrollingProjectCard
