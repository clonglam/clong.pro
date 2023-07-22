import React from "react"

import FiveYearExperience from "./FiveYearExperience"
import MassBubbleText from "./MassBubbleText"
import OpenCurtain from "./OpenCurtain"

type Props = {}

function AboutSection({}: Props) {
  return (
    <section className="py-8" id="about">
      <OpenCurtain />
      <FiveYearExperience />
      <div className="">
        <h3 className="mb-2 text-5xl font-bold md:mb-4">About Hugo</h3>
        <p
          className="md:text-md mb-5 max-w-5xl text-justify text-sm leading-normal lg:text-lg "
          style={{ textJustify: "inter-word" }}
        >
          Web Application Developer with 5+ years of experience and a background
          in Media Arts from Hong Kong. Proficient in creating pixel-perfect,
          animated web applications from initial drafts, utilizing modern
          frameworks to deliver high-quality projects.
        </p>
        <p
          className="md:text-md mb-5 max-w-5xl text-justify text-sm leading-normal lg:text-lg "
          style={{ textJustify: "inter-word" }}
        >
          A self-directed and communicative team player, my professional
          approach is guided by an inherent passion for technological evolution
          and a commitment to continual learning and growth, ensuring the
          delivery of exceptional user experiences.
        </p>
      </div>
    </section>
  )
}

export default AboutSection
