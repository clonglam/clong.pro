"use client"

import Link from "next/link"
import { motion } from "framer-motion"

interface Props {
  title: string
  href: string
}

const MenuItem = ({ title, href }: Props) => {
  return (
    <motion.li
      className="px-3 py-2 text-lg"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        className="text-white mix-blend-difference hover:underline "
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
