import skills from '@/constants/skills'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex gap-6 flex-wrap p-4 justify-evenly overflow-scroll'>
      {
        skills.map(skill => (
          <div key={skill.title}  className='flex-shrink-0 flex flex-col items-center justify-center hover:bg-gray-600 px-3 pt-2 rounded-lg'>
            <Image className='w-16 h-16' src={skill.icon} alt={skill.title} />
            <h2 className='w-16   text-center'>{skill.title}</h2>
          </div>
        ))
      }
    </div>
  )
}

export default page