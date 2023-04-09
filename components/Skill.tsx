import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    directionLeft?: boolean;
}

function Skill({ directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x:0 }}
        src='/typescript.svg'
        className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32
        xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out '
      />
      <div>
        <div>
            <p> </p>
        </div>
      </div>
    </div>
  )
}

export default Skill