import React from "react"
import Link from "next/link"

import { Icons } from "./icons"

type Props = {}

function BackTop({}: Props) {
  return (
    <Link href="navbar">
      <button className="absolute right-[10%] flex h-12 w-12  items-center justify-center rounded-full bg-slate-500 text-white transition-all duration-300 ease-in-out hover:scale-[5]">
        <span className="text-[196px]">
          <Icons.arrowUp className="text-center" />
        </span>
      </button>
    </Link>
  )
}

export default BackTop
