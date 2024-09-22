'use client'

import Image from 'next/image'
import React from 'react'
import profile from '@/assets/images/profile.jpeg'

const page = () => {
  return (
    <div className='p-8 backdrop-blur-md h-'>
        <div className='p-8 rounded-3xl overflow-hidden flex gap-8 bg-white/20 '>
            <Image src={profile} className='w-48 flex-shrink-0  aspect-square h-48 rounded-3xl overflow-hidden' />
            <div>
                <p className='text-justify text-base'>
                Hello there, I'm Md Muzzammil Rashid, a skilled Software Developer with a Bachelor's degree in Computer Science and Engineering. My strong background in programming languages like C++, Java, Python and JavaScript, coupled with a good understanding of Data Structures and Algorithms. I am proficient in MERN Stack and backend development skills like Express and Spring Boot. Additionally, I have developed multiple applications using these Technologies .
                </p>
            </div>

        </div>
    </div>
  )
}

export default page