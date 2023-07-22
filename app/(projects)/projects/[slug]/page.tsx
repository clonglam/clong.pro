import { Metadata } from "next"
import Image from "next/image"
import { allProjects } from "@/.contentlayer/generated"
import { env } from "@/env.mjs"

import { absoluteUrl } from "@/lib/utils"
import { Mdx } from "@/components/mdx-components"
import ProjectHero from "@/components/projects/ProjectHero"
import { ProjectIntro } from "@/components/projects/ProjectIntro"

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
    <div className="mx-auto min-h-[100vh] w-full bg-[#171717] text-[#DFD3C3]">
      <ProjectHero
        title={project.title}
        description={project.description}
        tags={project.tags}
        year={project.year}
        webDemoLink={project.webDemoLink}
      />
      {project.video ? (
        <video src={project.video}></video>
      ) : (
        <div className="relative mx-auto mb-8 aspect-video h-full w-[80%]">
          <Image
            src={project.image}
            alt={`${project.title} cover`}
            fill={true}
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </div>
      )}

      <ProjectIntro
        title={project.title}
        tags={project.tags}
        year={project.year}
        coverImage={project.image}
        githubLink={project.githubLink}
        webDemoLink={project.webDemoLink}
        description={project.description}
        subHeading={project.subHeading}
        technology={project.technology}
      />

      <div className="container mx-auto px-8">
        <Mdx code={project.body.code} />
      </div>
      {/* <ImageGallery gallery={project.imageGallery} /> */}
    </div>
  )
}

export default ProjectPage
