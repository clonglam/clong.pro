"use client"

import { useRef } from "react"

import { siteConfig } from "@/config/site"

import SocialMediaIcons from "./SocialMediaIcons"
import FadeInText from "./animation/fade-in-text"
import { Icons } from "./icons"

type Props = {}

function LandingSectionMobile({}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div className="relative bg-[#D9D9D9] pt-12 text-[#1F1F1F]" ref={ref}>
      <div className="flex min-h-[100vh] flex-col items-start justify-center px-3">
        <h2 className="text-4xl font-bold">Code. Design. knowledge.</h2>
        <FadeInText>
          <p className="lg:text-md mb-2 text-sm font-semibold text-[#1F1F1F]">
            Full Stack Developer | Media Artist
          </p>
        </FadeInText>
        <SocialMediaIcons />
      </div>
    </div>
  )
}

export default LandingSectionMobile
