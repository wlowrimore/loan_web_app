import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from 'public/header-logo.svg'

const MobileHeader = () => {
  return (
    <div className='bg-emerald-50 border-b border-emerald-400 w-screen flex pt-6 pb-2 px-4 justify-between items-end'>
      <div className='flex items-end gap-2'>
        <Link href='/'>
          <Image
            src={Logo}
            alt='circled check mark'
            width={28}
            height={28}
          />
        </Link>
        <span className='text-xl flex items-end'>|</span>
        <p className='flex items-end'>Welcome, Justin!</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-emerald-800/70">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
      </svg>
    </div>
  )
}

export default MobileHeader