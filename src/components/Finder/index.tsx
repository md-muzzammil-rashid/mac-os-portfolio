'use client'

import React, { useState } from 'react'
import Navbar from './Navbar'
import Draggable from 'react-draggable'

const Finder = ({children}:{children: React.ReactNode}) => {
  const [windowSize, setWindowSize] = useState<string>()
  return (
    <Draggable disabled={windowSize=='fullScreen'}  defaultPosition={windowSize=='fullScreen'?{x:0, y:0}:{x:250, y:50 }} bounds="parent">
    <div className={`w-full flex ${windowSize=='fullScreen'?"w-full":"max-w-screen-lg"} transition-all  rounded-xl overflow-hidden`}>
        <Navbar windowSize={windowSize} setWindowSize={setWindowSize}/>
        <div className='w-3/4 bg-[rgb(40,38,37)]'>
        {children}
        </div>
    </div>
    </Draggable>
  )
}

export default Finder