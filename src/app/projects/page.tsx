'use client'

import projects from '@/constants/Projects'
import React, { useState } from 'react'
import folder from '@/assets/images/icons/folder.png'
import Image from 'next/image'
import { Project } from '@/constants/Projects'
import { FiFileText } from 'react-icons/fi'
import { FaCode, FaGithub, FaImages } from 'react-icons/fa'
import { FaTimeline } from 'react-icons/fa6'
import { GiSandsOfTime } from 'react-icons/gi'
import { IoGlobeOutline } from 'react-icons/io5'

const page = () => {
  const [showDetails, setShowDetails] = useState<boolean>()
  const [projectDetails, setProjectDetails] = useState<Project>()
  return (
    <div className='flex  relative'>

      <div className={`flex ${showDetails ? "w-1/2" : ""} p-4 flex-wrap `}>
        {
          projects.map(project =>
            <div onDoubleClick={() => { setProjectDetails(project); setShowDetails(true) }} key={project.title} className='m-4 cursor-pointer hover:bg-stone-700 p-2 h-28  shrink-0 rounded-sm'>
              <Image src={folder} className='w-16 ' />
              <span>
                {project.title}
              </span>
            </div>
          )
        }
      </div>
      {
        showDetails &&
        <div className=' w-1/2 right-0 top-0 bottom-0  absolute align-top flex-shrink-0 h-full flex-grow  p-4' onClick={() => setShowDetails(false)}>
          <div className='bg-white rounded-3xl p-5  text-black flex-grow'>
            {projectDetails?.title}
            <div className='text-black'>
              <div className='text-black flex gap-2 items-center font-bold'>
                <FiFileText color='black' />
                <h2>Description</h2>
              </div>
              <div>
                {projectDetails?.description}
              </div>
            </div>
            <div className='text-black'>
              <div className='text-black flex gap-2 items-center font-bold'>
                <GiSandsOfTime color='black' />
                <h2>Duration</h2>
              </div>
              <p>Project Start : {projectDetails?.projectStart}</p>
              <p>Project End : {projectDetails?.projectEnd}</p>
              <div>
                {projectDetails?.description}
              </div>
            </div>
            <div className='text-black'>
              <div className='text-black flex gap-2 items-center font-bold'>
                <FaCode color='black' />
                <h2>Tech Stack</h2>
              </div>
              <div>
                {projectDetails?.stack.map(stack => (
                  <div>{stack}</div>
                ))}
              </div>
            </div>
            <div>
              <div className='flex gap-3'>
                <div className='p-2 rounded-full bg-orange-500'>
                  <FaImages color='white'  size={24}/>
                </div>
                <div className='p-2 rounded-3xl text-white gap-3 flex items-center justify-center font-bold flex-grow bg-orange-500'>
                  <IoGlobeOutline color='white' size={24} />
                  <span className='text-clip '>Visit Project</span>
                </div>
                <div className='p-2 rounded-full bg-orange-500'>
                  <FaGithub color='white' size={24}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default page