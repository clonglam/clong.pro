"use client"

import React from "react"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"

type Props = { children: React.ReactNode }

function CustomProvider({ children }: Props) {
  const pageKey = usePathname()

  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <motion.div
        key={pageKey}
        initial={{ x: 300, opacity: 0, backgroundColor: "#000 " }}
        animate={{ x: 0, opacity: 1, backgroundColor: "#000" }}
        exit={{ x: 300, opacity: 0, backgroundColor: "transparent" }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 60,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default CustomProvider
