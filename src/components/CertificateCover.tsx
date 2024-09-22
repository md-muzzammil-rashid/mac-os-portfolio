import Image from 'next/image'
import React from 'react'
import certificate from '@/assets/certificates/sbm.png'
import telusko from '@/assets/logos/telusko.jpeg'

const CertificateCover = () => {
  return (
    <div className='w-1/2 p-4 bg-gray-600 rounded-xl overflow-hidden relative'>
        <Image src={certificate}/>
        
        <div className='absolute w-full bottom-0 p-4 gap-3 flex  left-0 bg-slate-800 h-28'>
            <div className='flex flex-col justify-around'>
                <div>
                    <h3 className='text-white text-lg font-bold'> Spring Boot and Microservices</h3>
                </div>

                <div>
                <span className='bg-white/20 px-4 py-2 rounded-2xl text-xs border border-gray-400'>
                December 1, 2023   
                </span>
                </div>
            </div>
            <div>
                    <Image className='w-12' alt='logo' src={telusko} />
            
            </div>
        </div>
    </div>
  )
}

export default CertificateCover