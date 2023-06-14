import Marquee from "react-fast-marquee"

import { siteConfig } from "@/config/site"

const MarqueeScrollingText = () => {
  return (
    <div className="bolder-solid-black border-y-2 py-8">
      <MarqueeTextRoll />
      <MarqueeTextRoll direction="right" />
    </div>
  )
}

interface MarqueeTextInterface {
  direction?: "left" | "right" | "up" | "down"
  speed?: number
  delay?: number
}

const MarqueeTextRoll = ({
  direction = "left",
  speed = 85,
  delay = 0,
}: MarqueeTextInterface) => {
  return (
    <Marquee
      className="bolder-solid-black border-y-2 py-8"
      autoFill
      direction={direction}
      speed={speed}
      delay={delay}
    >
      {siteConfig.marqueeText.map((text, index) => (
        <h3 className="mr-10 text-8xl font-bold uppercase" key={index}>
          {text}
        </h3>
      ))}
    </Marquee>
  )
}
export default MarqueeScrollingText
