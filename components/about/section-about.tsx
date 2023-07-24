import React from "react"

import FiveYearExperience from "./FiveYearExperience"
import MassBubbleText from "./MassBubbleText"
import OpenCurtain from "./OpenCurtain"

type Props = {}

function AboutSection({}: Props) {
  return (
    <section className="py-8" id="about">
      {/* <OpenCurtain />
      <FiveYearExperience /> */}
      <div className="container mx-auto px-10">
        <h3 className="mb-2 text-5xl font-bold md:mb-4">About Hugo</h3>
        {/* <p
          className="md:text-md mb-5 max-w-5xl text-justify text-sm leading-normal lg:text-lg "
          style={{ textJustify: "inter-word" }}
        >
          Web Application Developer with 5+ years of experience and a background
          in Media Arts from Hong Kong. Proficient in creating pixel-perfect,
          animated web applications from initial drafts, utilizing modern
          frameworks to deliver high-quality projects.
        </p> */}
        <p
          className="md:text-md mb-5 max-w-3xl text-justify text-sm leading-normal lg:text-lg "
          style={{ textJustify: "inter-word" }}
        >
          I am a full stack developer with PREN stack (Postgres, ReactJS,
          ExpressJS, NodeJS) with advanced SASS skills. UI Version control with
          GIT, Testing with jest. 5 year working experience in making Web
          application, Start from pixel prefect, and forcus in doing different
          animation effect to create diferent margic effect, with clean and
          reusable code.
        </p>
      </div>
    </section>
  )
}

export default AboutSection
