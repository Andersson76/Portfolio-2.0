import { motion } from 'framer-motion'
import React from 'react'
import { SiTypescript } from "react-icons/si";

type Props = {}

function  ExperienceCard({}: Props) {
  return (
    <article>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="/Martin_1726.JPG"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Webbutvecklare</h4>
        <p className="font-bold text-2xl mt-1">Wallmander & Co</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="/javascript.svg"
            alt="TS"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="/react.svg"
            alt="TS"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="/typescript.svg"
            alt="TS"
          />

          {/* Tech used */}
          {/* Tech used */}
          {/* Tech used */}
          {/* Tech used */}
        </div>
      </div>
      <p>Started work... - Ended...</p>

      <ul className="list-disc space-y-4 ml-5 text-lg">
        <li>Summary points</li>
        <li>Summary points</li>
        <li>Summary points</li>
        <li>Summary points</li>
        <li>Summary points</li>
      </ul>
    </article>
  );
}

export default ExperienceCard