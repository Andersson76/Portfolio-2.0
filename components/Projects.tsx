import React from 'react'
import { motion } from 'framer-motion';
import { Project } from '@/sanity/typings';
import { urlFor } from '@/sanity';
import Link from 'next/link';

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row
        max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-20 pl-6 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div
        className="relative top-10 w-full flex overflow-x-scroll overflow-y-hidden snap-x
        snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]"
      >
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
            items-center justify-center p-10 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt=""
            />

            <Link href={project?.linkToBuild}>
            <div className="space-y-5 lg:space-y-10 md:px-10 max-w-6xl">
              <h4 className="text-xl lg:text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map((technology) => (
                  <img
                  className="h-7 w-7 lg:h-10 lg:w-10"
                  key={technology._id}
                  src={urlFor(technology.image).url()}
                  alt=""
                  />
                  ))}
              </div>
              <p className="text-sm lg:text-lg text-center md:text-left">
                {project?.summary}
              </p>
            </div>
            </Link>
          </div>
        ))}
      </div>

<div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
    );
  }

export default Projects
