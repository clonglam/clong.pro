import { Metadata } from "next"
import Image from "next/image"
import { allProjects } from "@/.contentlayer/generated"
import { env } from "@/env.mjs"
import ReactPlayer from "react-player/youtube"

import { absoluteUrl } from "@/lib/utils"
import { Mdx } from "@/components/mdx-components"
import ProjectHero from "@/components/projects/ProjectHero"
import { ProjectIntro } from "@/components/projects/ProjectIntro"
import ProjectVideo from "@/components/projects/ProjectVideo"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

async function getProjectFromParams(params: { slug: string }) {
  const slug = params.slug
  const project = allProjects.find((project) => project.slugAsParams === slug)

  if (!project) {
    null
  }

  return project
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectFromParams(params)

  if (!project) {
    return {}
  }

  const url = env.NEXT_PUBLIC_APP_URL

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set("heading", project.title)
  ogUrl.searchParams.set("type", "Project")
  ogUrl.searchParams.set("mode", "dark")

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      url: absoluteUrl(project.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [ogUrl.toString()],
    },
  }
}

export async function generateStaticParams() {
  return allProjects.map((post) => ({
    slug: post.slugAsParams,
  }))
}

async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectFromParams(params)

  if (!project) return <div>There is no project name</div>

  return (
    <div className="mx-auto mb-10 min-h-[100vh] w-full bg-[#171717] text-[#DFD3C3]">
      <ProjectHero
        title={project.title}
        description={project.description}
        tags={project.tags}
        year={project.year}
        webDemoLink={project.webDemoLink}
      />
      <ProjectVideo videohref={project.video} placeholder={project.ogImage} />

      <ProjectIntro
        title={project.title}
        tags={project.tags}
        year={project.year}
        coverImage={project.ogImage}
        githubLink={project.githubLink}
        webDemoLink={project.webDemoLink}
        description={project.description}
        subHeading={project.subHeading}
        technology={project.technology}
      />

      <div className="container mx-auto px-5 md:px-10">
        <Mdx code={project.body.code} />
      </div>

      {project.images && (
        <div className="container mx-auto flex w-full flex-col gap-y-5 space-y-3 px-5 py-3 md:px-10">
          <h4 className="mt-5 text-3xl font-bold">Images</h4>
          {project.images.map((image, index) => (
            <div className="relative aspect-video w-full">
              <Image
                src={image}
                alt={project.title + index}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProjectPage
