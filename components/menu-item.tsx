"use client"

import { useContext } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

import { SettingContextType, SettingsContext } from "./CustomProvider"

interface Props {
  title: string
  href: string
}

const MenuItem = ({ title, href }: Props) => {
  const { isOpen, toggleMenu } = useContext(
    SettingsContext
  ) as SettingContextType

  return (
    <motion.li
      className="px-3 py-2 text-lg"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        className="text-white mix-blend-difference hover:underline "
        onClick={() => toggleMenu()}
        href={href}
      >
        {title}
      </Link>
    </motion.li>
  )
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export default MenuItem
