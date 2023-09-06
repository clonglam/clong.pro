"use client"

import React from "react"

import { scroll2El } from "@/lib/utils"

import { Icons } from "./icons"

type Props = { isInView: boolean; primaryText: string }

function ScrollDownArrow({ isInView, primaryText }: Props) {
  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault()

    setTimeout(() => {
      scroll2El(id)
    }, 100)
  }

  return (
    <div
      onClick={(e) => scrollTo(e, "details")}
      style={{
        color: primaryText,
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
      }}
      className="absolute bottom-10 flex cursor-pointer flex-col items-center justify-center "
    >
      <Icons.downArrow
        className="animation-[bounce_2s_infinite] mx-auto mb-3 h-[80px] animate-bounce"
        style={{ fill: primaryText }}
      />

      <span className="text-[16px] tracking-[0.03em] 2xl:text-[28px] ">
        Scroll Down
      </span>
    </div>
  )
}

export default ScrollDownArrow
