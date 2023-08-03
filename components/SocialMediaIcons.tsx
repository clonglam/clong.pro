import React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { Icon, Icons } from "./icons"
import { buttonVariants } from "./ui/button"

type Props = {}

function SocialMediaIcons({}: Props) {
  return (
    <div className="flex h-9 space-x-5">
      <SocialMediaIcon
        media={siteConfig.socialMedia.twitter}
        SIcon={Icons.twitter}
      />
      <SocialMediaIcon
        media={siteConfig.socialMedia.github}
        SIcon={Icons.gitHub}
      />
      <SocialMediaIcon
        media={siteConfig.socialMedia.linkedin}
        SIcon={Icons.linkedin}
      />
    </div>
  )
}

interface SocialMediaIconType {
  media: string
  SIcon: Icon
}

export function SocialMediaIcon({ media, SIcon }: SocialMediaIconType) {
  return (
    <Link href={media} target="_blank" rel="noreferrer">
      <div
        className={cn(
          buttonVariants({
            size: "sm",
            variant: "ghost",
          }),
          "w-9 px-0"
        )}
      >
        <SIcon className="h-5 w-5" />
        <span className="sr-only">{media}</span>
      </div>
    </Link>
  )
}

export default SocialMediaIcons
