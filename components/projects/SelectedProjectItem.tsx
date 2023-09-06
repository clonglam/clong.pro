import Image from "next/image"
import Link from "next/link"
import { Project } from "@/.contentlayer/generated"

import { cn } from "@/lib/utils"

type Props = {
  project: Project
}

const SelectedProjectItem = ({ project }: Props) => {
  return (
    <div
      className="group relative cursor-pointer border-b px-3 py-5 transition-all duration-500 group-hover:h-full"
      key={project._id}
    >
      <Link href={project.slug}>
        <h4 className="text-xl font-semibold lg:mb-1 lg:text-5xl">
          {project.title}
        </h4>

        <div
          className={cn(
            "ease-ease-smooth lg:text-md mb-[0.5rem] flex items-center space-x-1 text-sm font-semibold duration-500 delay-500 lg:mb-1"
          )}
        >
          <span>{project.year && `${project.year}`}</span>
          <span>{project.year && "|"}</span>

          {project.tags.map((tag, index) => (
            <>
              <span>{tag}</span>
              {index !== project.tags.length - 1 && <span>|</span>}
            </>
          ))}
        </div>

        <p className="max-w-xl text-sm leading-tight tracking-tight lg:text-lg">
          {project.description.length > 150
            ? project.description.slice(0, 150) + "..."
            : project.description}
        </p>

        <div className="absolute left-0 top-0 z-50 w-0 rounded-full transition-all duration-200 group-hover:block group-hover:w-1/2">
          <Image
            src={project.ogImage}
            alt={project.title + "cover"}
            width={720}
            height={540}
          />
        </div>
      </Link>
    </div>
  )
}

export default SelectedProjectItem
