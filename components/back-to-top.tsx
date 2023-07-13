"use client"

import React from "react"

import { Icons } from "./icons"

type Props = {}

function BackTop({}: Props) {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <button
      onClick={goToTop}
      className="absolute right-[10%] flex h-12 w-12  items-center justify-center rounded-full bg-slate-500 text-white transition-all duration-300 ease-in-out hover:scale-[5]"
    >
      <span className="text-[196px]">
        <Icons.arrowUp className="text-center" />
      </span>
    </button>
  )
}

export default BackTop
