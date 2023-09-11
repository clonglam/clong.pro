import { create } from "zustand"

export const tags = [
  { label: "Web Application", tag: "Web Application" },
  { label: "Mobile Application", tag: "Mobile Application" },
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
