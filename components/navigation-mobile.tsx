"use client"

import { useContext } from "react"

import { cn } from "@/lib/utils"

import { SettingContextType, SettingsContext } from "./CustomProvider"

interface Props {
  navigation: { title: string; href: string }[]
}

const Navigation_mobile = ({ navigation }: Props) => {
  const { isOpen, toggleMenu } = useContext(
    SettingsContext
  ) as SettingContextType

  return (
    <div
      className="navigation-mobile z-50 items-center"
      style={{ isolation: "isolate" }}
    >
      <span
        className={cn("cursor-pointer", isOpen ? "hidden" : "block")}
        onClick={toggleMenu}
      >
        Menu
      </span>
    </div>
  )
}

export default Navigation_mobile
