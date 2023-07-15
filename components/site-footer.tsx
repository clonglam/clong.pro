import React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import BackTop from "./back-to-top"
import { Icon, Icons } from "./icons"
import { buttonVariants } from "./ui/button"

type Props = {}

function SiteFooter({}: Props) {
  return (
    <div className="container h-[400px] bg-[#1f1f1f] px-8 py-12 text-white">
      <div className="mb-2 w-full text-white">
        <p className="mb-[5px] text-xs font-semibold">CLong</p>
        <p className="text-xs font-light">©2022 - CLong.pro </p>
      </div>

      <div className="mb-2 border-b-[2px]"></div>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm">{`Phone: +1 (604)818 2149`}</p>
          <p className="text-sm">
            Created By <span className="font-semibold">Hugo Lam</span>
          </p>
          <div className="flex h-9 space-x-5">
            <SocialMediaIcon
              media={siteConfig.socialMedia.github}
              SIcon={Icons.gitHub}
            />
            <SocialMediaIcon
              media={siteConfig.socialMedia.twitter}
              SIcon={Icons.twitter}
            />
            <SocialMediaIcon
              media={siteConfig.socialMedia.github}
              SIcon={Icons.gitHub}
            />
          </div>
        </div>

        <BackTop />
      </div>
    </div>
  )
}

interface SocialMediaIconType {
  media: string
  SIcon: Icon
}

function SocialMediaIcon({ media, SIcon }: SocialMediaIconType) {
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

export default SiteFooter
