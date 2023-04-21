import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill';
import { Skill as SkillType } from '@/sanity/typings';

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      className="flex relative flex-col text-center md:text-left xl:flex-row
      max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <div className="pt-16 grid grid-cols-4 gap-5">
        {skills?.map((skill) => (
          <Skill key={skill._type} skill={skill} />
        ))}
        {skills?.map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}
export default Skills