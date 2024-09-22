'use client'
import React, { useCallback, useEffect, useState } from 'react'

const MenuBar = () => {
    const [currentTime, setCurrentTime] = useState<Date>(new Date())

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentTime(new Date());
        },1000)
    },[])
  return (
    <div className='absolute w-full z-50 backdrop-blur-[100px] flex justify-end font-bold'>
        <div className='px-2 py-1'>
        {currentTime?.toDateString()}
        {currentTime?.toLocaleString().split(',')[1]}
            
        </div>
    </div>
  )
}

export default MenuBar