"use client"

import { motion, useCycle } from "framer-motion"

import MenuItem from "./menu-item"
import { MenuToggle } from "./menu-toggle"

interface Props {
  navigation: { title: string; href: string }[]
}

const Navigation_mobile = ({ navigation }: Props) => {
  const [isOpen, toggleOpen] = useCycle(false, true)

  const itemVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  }

  return (
    <div className="navigation-mobile items-center">
      <MenuToggle toggle={() => toggleOpen()} isOpen={isOpen} />

      <motion.div
        className="mobile-navigation-drawer"
        variants={variants}
        animate={isOpen ? "open" : "closed"}
      >
        <motion.nav
          className="mobile-navigation-container"
          initial={false}
          animate={isOpen ? "open" : "closed"}
        >
          <MenuToggle toggle={() => toggleOpen()} isOpen={isOpen} />

          <motion.ul variants={itemVariants}>
            {navigation.map(({ title, href }, index) => (
              <MenuItem key={index} title={title} href={href} />
            ))}
          </motion.ul>
        </motion.nav>
      </motion.div>
    </div>
  )
}

const variants = {
  open: {
    x: 0,
    transition: {
      type: "easein",
      stiffness: 50,
      restDelta: 2,
    },
  },
  closed: {
    x: "100%",
    transition: {
      type: "easein",
      stiffness: 50,
      restDelta: 2,
    },
  },
}

export default Navigation_mobile
