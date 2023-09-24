"use client"

import { useContext } from "react"
import { motion } from "framer-motion"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { SettingContextType, SettingsContext } from "./CustomProvider"
import SocialMediaIcons from "./SocialMediaIcons"
import { useLockBody } from "./hooks/use-lock-body"
import MenuItem from "./menu-item"

function MobileMenu() {
  const { isOpen } = useContext(SettingsContext) as SettingContextType
  return <>{isOpen && <MobileMenuContent />}</>
}

function MobileMenuContent() {
  useLockBody()
  const { isOpen, toggleMenu } = useContext(
    SettingsContext
  ) as SettingContextType

  const itemVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  }
  return (
    // eslint-disable-next-line tailwindcss/enforces-negative-arbitrary-values
    <div
      // eslint-disable-next-line tailwindcss/enforces-negative-arbitrary-values
      className={cn(
        "fixed right-0 top-0 z-[70] flex h-[100%] w-[300px] flex-col items-end justify-end bg-zinc-800 py-5 transition-all duration-300 delay-300",
        isOpen ? "translate-x-0" : "translate-x-[300px]"
      )}
    >
      <button
        className="absolute right-5 top-3 text-white"
        onClick={() => toggleMenu()}
        aria-label="Close Menu Button"
      >
        Close
      </button>

      <motion.ul
        variants={itemVariants}
        className="mt-3 w-full px-3 py-5 font-semibold"
      >
        {siteConfig.mainNav.map(({ title, href }, index) => (
          <MenuItem key={index} title={title} href={href} />
        ))}
      </motion.ul>

      <div className="w-full px-8 py-2 text-[2rem] text-white">
        <SocialMediaIcons />
      </div>
    </div>
  )
}

export default MobileMenu
