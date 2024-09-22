'use client'

import { navItems } from '@/constants/NavItem'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

const Navbar = ({windowSize, setWindowSize}) => {

    const router = useRouter()
  return (
    <div className='w-1/4 bg-slate-800/60  backdrop-blur-2xl  p-5 '>
        <div className='flex gap-2'>
            <div onClick={()=>setWindowSize('close')} className='bg-red-500 w-4 h-4 rounded-full '></div>
            <div className='bg-yellow-500 w-4 h-4 rounded-full '></div>
            <div onClick={()=>{windowSize=='fullScreen'?setWindowSize('halfScreen'):setWindowSize('fullScreen')}} className='bg-green-500 w-4 h-4 rounded-full '></div>
        </div>
        <div className='flex flex-col mt-12 gap-4 min-h-[600px] max-h-[600px] overflow-hidden'>

        {
            navItems.map(navItem => (
                <div onClick={()=>router.push(navItem.url)} key={navItem.title} className='flex gap-3 text-lg hover:text-orange-500 transition-all cursor-pointer '>
                    <navItem.icon color='rgb(20 95 508)'  />
                    <h2>
                        {navItem.title}
                    </h2>
                </div>

            ))
        }
        </div>
    </div>
  )
}

export default Navbar