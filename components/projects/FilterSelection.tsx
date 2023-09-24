"use client"

import React from "react"

import { cn } from "@/lib/utils"

import { tags, useTagsStore } from "../hooks/useTagsStore"
import { buttonVariants } from "../ui/button"

function FilterSelection() {
  const updateTag = useTagsStore((s) => s.updateTag)
  const selectedTag = useTagsStore((s) => s.tag)

  return (
    <div className="mb-2 flex flex-wrap gap-x-5 gap-y-3">
      <span
        className={cn(
          buttonVariants({
            variant: selectedTag === "all" ? "white" : "outline",
          })
        )}
        onClick={() => updateTag("all")}
      >
        All
      </span>

      {tags.map(({ label, tag }, index) => (
        <span
          key={tag}
          onClick={() => updateTag(tag)}
          className={cn(
            buttonVariants({
              variant: tag === selectedTag ? "white" : "outline",
            }),
            "rounded px-3 py-1 "
          )}
        >
          {label}
        </span>
      ))}
    </div>
  )
}

export default FilterSelection
