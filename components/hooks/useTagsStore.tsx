import { create } from "zustand"

export const tags = [
  { label: "Web Application", tag: "Web Application" },
  { label: "NextJs", tag: "NextJs" },
  { label: "ReactJs", tag: "ReactJs" },
  { label: "ExpressJs", tag: "ExpressJs" },
]

type TagsStoreState = {
  tag: string
  updateTag: (newTag: string) => void
}
export const useTagsStore = create<TagsStoreState>((set) => ({
  tag: "all",
  updateTag: (newTag: string) =>
    set((state: TagsStoreState) => ({ tag: newTag })),
}))
