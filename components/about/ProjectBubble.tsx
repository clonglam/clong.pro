import { motion } from "framer-motion"

const circleVariants = {
  animate: {
    y: ["100%", "-100%"],
    transition: {
      y: {
        duration: 2,
        yoyo: Infinity,
        ease: "easeInOut",
      },
    },
  },
}

function ProjectBubble() {
  return (
    <motion.div
      style={{
        width: "50px",
        height: "50px",
        backgroundColor: "#f00",
        borderRadius: "50%",
        position: "absolute",
        top: "0",
        left: "50%",
      }}
      variants={circleVariants}
      initial="animate"
      animate="animate"
    />
  )
}

export default ProjectBubble

// import React from "react"

// type Props = {}

// function ProjectBubble({}: Props) {
//   return (
//     <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white text-center text-sm">
//       Project
//     </div>
//   )
// }

// export default ProjectBubble
