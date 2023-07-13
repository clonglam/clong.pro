import React from "react"
import { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { allPosts } from "@/.contentlayer/generated"
// import { ProjectTag, projects } from "@/data"
import { env } from "@/env.mjs"

// import { allAuthors, allPosts } from "contentlayer/generated"

import { absoluteUrl } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

interface ProjectPageProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: { slug: string[] }) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  const url = env.NEXT_PUBLIC_APP_URL

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set("heading", post.title)
  ogUrl.searchParams.set("type", "Blog Post")
  ogUrl.searchParams.set("mode", "dark")

  return {
    title: post.title,
    description: post.description,
    // authors: post.authors.map((author) => ({
    //   name: author,
    // })),
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: absoluteUrl(post.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogUrl.toString()],
    },
  }
}

export async function generateStaticParams(): Promise<
  ProjectPageProps["params"][]
> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}

async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getPostFromParams(params)

  if (!project) {
    notFound()
    console.log("project Not Found")
    return <div>Project Not Found.</div>
  }

  return (
    <div className="mx-auto min-h-[100vh] w-full bg-white px-8 py-5">
      <ProjectIntro
        title={project.title}
        tags={project.tags}
        year={project.year}
        coverImage={project.image}
        githubLink={project.githubLink}
        webDemoLink={project.webDemoLink}
      />

      <div className="mt-12 grid w-full grid-cols-1 px-5 py-8 md:grid-cols-2">
        <ProjectTechUsed technology={project.technology} />
        <ProjectDescription
          description={project.description}
          subHeading={project.subHeading}
        />
      </div>

      {/* <ImageGallery gallery={project.imageGallery} /> */}
    </div>
  )
}

interface ProjectIntroType {
  title: string
  tags: string[]
  coverImage: string
  githubLink?: string
  webDemoLink?: string
  year?: number
}

function ProjectIntro({
  title,
  webDemoLink,
  githubLink,
  coverImage,
  year,
  tags,
}: ProjectIntroType) {
  return (
    <section className="container">
      <h1 className="mb-1 text-4xl font-bold ">{title}</h1>

      <div className="mb-1 flex items-center space-x-1 font-semibold">
        <span>{year && `${year}`}</span>
        <span>{year && "|"}</span>

        {tags.map((tag, index) => (
          <>
            <span>{tag}</span>
            {index !== tags.length - 1 && <span>|</span>}
          </>
        ))}
      </div>

      <div className="mb-2 flex gap-x-2">
        {webDemoLink && (
          <a href={webDemoLink} target="_blank" rel="noreferrer">
            <Button
              variant="outline"
              className=" rounded-full bg-white text-black hover:bg-slate-900 hover:text-white"
            >
              Launch Website
              <Icons.moveUpRight className="stroke-[1px] " />
            </Button>
          </a>
        )}
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noreferrer">
            <Button
              variant="outline"
              className=" rounded-full bg-white text-black hover:bg-slate-900 hover:text-white"
            >
              Github
              <Icons.moveUpRight className="stroke-[1px] " />
            </Button>
          </a>
        )}
      </div>

      <div className="relative aspect-video h-full w-full ">
        <Image
          src={coverImage}
          alt="coverImage"
          fill={true}
          style={{ objectFit: "contain", objectPosition: "left" }}
        />
      </div>
    </section>
  )
}

interface ProjectDescriptionType {
  description: string
  subHeading: string
}

function ProjectDescription({
  description,
  subHeading,
}: ProjectDescriptionType) {
  return (
    <div className="w-96">
      <h3 className="mb-2 text-5xl font-bold">{subHeading}</h3>
      <p className="text-sm font-medium">{description}</p>
    </div>
  )
}

// function ImageGallery({ gallery }: { gallery: string[] }) {
//   return (
//     <div className="flex flex-col gap-y-5">
//       {gallery.map((image, index) => (
//         <div className="relative aspect-video h-full w-full " key={index}>
//           <Image
//             src={image}
//             alt={`projectImage_${index}`}
//             fill={true}
//             style={{ objectFit: "contain", objectPosition: "left" }}
//           />
//         </div>
//       ))}
//     </div>
//   )
// }

function ProjectTechUsed({ technology }: { technology: string[] }) {
  return (
    <div className="mb-3 pl-1 md:mb-0 md:pl-24">
      <h3 className="font-semibold">Technology</h3>
      <ul>
        {technology.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectPage
