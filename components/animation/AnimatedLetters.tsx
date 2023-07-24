"use client"

import React from "react"
import { motion } from "framer-motion"

type Props = {
  title: string
  containerClassName?: string
  letterClassName?: string
}

const container = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
}
const letterAnimation = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
}

function AnimatedLetters({ title }: Props) {
  return (
    <motion.span variants={container} initial="initial" animate="animate">
      {[...title].map((letter, index) => (
        <motion.span variants={letterAnimation} key={title + index}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
  )
}

export default AnimatedLetters
