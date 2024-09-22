import React, { ReactElement } from 'react'

const ApplicationHolder = ({active, children}:{active:boolean, children:ReactElement}) => {
  return (
    <div className={`fixed w-full h-screen ${active&&"backdrop-blur-s"} z-40 `}>
        <div className={`mx-auto h-screen rounded-xl overflow-hidden  ${children&& " "}`}>

        {children}
        </div>
    </div>
  )
}

export default ApplicationHolder