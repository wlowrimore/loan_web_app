'use client'

import { useState } from "react"

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nam className={`absolute z-20 top-4 -right-[5.8rem] text-white px-4 text-sm rounded-tr rounded-tl bg-emerald-800 -rotate-90 transition-all ${isOpen ? 'w-72 bg-opacity-90' : 'w-20 text-center'}`}>

      <h2 onClick={toggleDrawer} className={`${isOpen ? 'absolute right-[5rem] top-[5.5rem] rotate-90 text-white' : 'absolute right-6 text-white'}`}>{isOpen ? 'X' : 'menu'}</h2>


      <div className='relative w-[50%] left-7 top-3 rotate-90 bg-emerald-800 bg-opacity-10 text-white space-y-4 px-2'>
        <p>Home</p>
        <p>About</p>
        <p>Dashboard</p>
        <p>Sign Out</p>
      </div>
    </nam>
  )
}

export default SideNav