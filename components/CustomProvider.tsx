"use client"

import React, { createContext, useState } from "react"

type Props = { children: React.ReactNode }

export type SettingContextType = {
  isOpen: boolean
  toggleMenu: () => void
  updateMenu: (s: boolean) => void
}

export const SettingsContext = createContext<SettingContextType | undefined>(
  undefined
)

function CustomProvider({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  const updateMenu = (s: boolean) => {
    setIsOpen(s)
  }
  return (
    <SettingsContext.Provider value={{ isOpen, toggleMenu, updateMenu }}>
      <div>{children}</div>
    </SettingsContext.Provider>
  )
}

export default CustomProvider
