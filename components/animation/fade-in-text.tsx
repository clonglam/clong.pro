import React, { useRef } from "react"
import { useInView } from "framer-motion"

type Props = { children: React.ReactNode }

function FadeInText({ children }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <div ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateY(50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.35, 0.85, 1) 0.1s",
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default FadeInText
