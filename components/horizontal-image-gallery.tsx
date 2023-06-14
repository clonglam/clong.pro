"use client"

import React, { useCallback, useLayoutEffect, useRef, useState } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import ResizeObserver from "resize-observer-polyfill"

import { StickyContainer } from "./hero-video"

const HorizontalImageGallery = () => {
  const scrollRef = useRef<any>(null)
  const ghostRef = useRef<any>(null)
  const ref = useRef<any>(null)

  const [scrollRange, setScrollRange] = useState(0)
  const [viewportW, setViewportW] = useState(0)

  useLayoutEffect(() => {
    scrollRef && setScrollRange(scrollRef.current?.scrollWidth)
  }, [scrollRef])

  const onResize = useCallback((entries: any) => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width)
    }
  }, [])

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => onResize(entries))
    resizeObserver.observe(ghostRef.current)
    return () => resizeObserver.disconnect()
  }, [onResize])

  const { scrollYProgress } = useScroll()
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW]
  )
  const physics = { damping: 15, mass: 0.27, stiffness: 55 }
  const spring = useSpring(transform, physics)

  return (
    <StickyContainer sectionRef={ref}>
      <div className="scroll-container sticky inset-x-0 bottom-0 h-[500px] w-full bg-pink-300">
        <motion.section
          ref={scrollRef}
          style={{ x: spring }}
          className="thumbnails-container height-[100vh] relative flex w-max items-center bg-black px-[160px] "
        >
          <div className="thumbnails relative mr-8 flex gap-5">
            {[...Array(5)].map((i, index) => (
              <div
                key={index}
                className="thumbnail h-[40vh] w-[700px] bg-slate-500"
              />
            ))}
          </div>
        </motion.section>
      </div>
      <div
        ref={ghostRef}
        style={{ height: scrollRange }}
        className="ghost w-[100vw]"
      />
    </StickyContainer>
  )
}

export default HorizontalImageGallery
