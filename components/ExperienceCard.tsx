import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/sanity/typings";
import { urlFor } from "@/sanity";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex mt-10 py-8 flex-col rounded-lg items-center space-y-2 flex-shrink-0 w-full md:w-[450px] h-auto snap-center bg-[#292929] hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        //viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">{experience?.companyName}</h4>
        <p className="font-bold text-2xl mt-1">{experience?.summary}</p>
        <div className="flex justify-center space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className="h-8 w-8 object-center"
              src={urlFor(technology.image).url()}
            />
          ))}
        </div>

        <p className="uppercase py-5 text-gray-500">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul
          className="list-disc space-y-4 mx-5 text-lg max-h-96 overflow-y-hidden pr-5
       scrollbar-thumb-[#F7AB0A]"
        >
          {experience.points.map(
            (
              point:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined,
              i: React.Key | null | undefined
            ) => (
              <li key={i}>{point}</li>
            )
          )}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
