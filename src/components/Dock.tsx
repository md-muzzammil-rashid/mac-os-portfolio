'use client'
import { dock, dockIcons } from '@/constants/DockIcons'
import Image from 'next/image'
import React from 'react'
import { Tooltip } from 'react-tooltip'

const Dock = () => {
  return (
    <div className='absolute bottom-5 z-50 gap-1 bg-white/25 backdrop-blur-md px-16  rounded-3xl  flex left-1/2 -translate-x-1/2'>
        {
            dock.map(doc=>
                <>
                <div key={doc.name} data-tooltip-id={doc.name}>
                    <Image src={doc.icon} alt={doc.name} className='h-16 w-16 hover:scale-125 transition-all hover:-translate-y-2 cursor-pointer '/>
            </div>
            <Tooltip
            id={doc.name}
            content={doc.name}
            place='top'
            />
            </>
            )
        }
    </div>
  )
}

export default Dock