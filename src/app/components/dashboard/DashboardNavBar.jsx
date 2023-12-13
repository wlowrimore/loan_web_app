import Link from 'next/link'
import React from 'react'

const DashboardNavBar = () => {
  return (
    <header className='relative w-screen right-4 top-1 mb-1'>
      <nav className='w-full py-1'>
        <ul className='flex justify-between px-4 text-sm text-emerald-800 font-semibold'>
          {/* <li className='p-1'>Portfolio</li> */}
          {/* <li className='p-1'>Make Pymnt</li> */}
          <li className='p-1'>Make a Payment</li>
          <Link href='/loan-request'><li className='p-1'>Request a Loan</li></Link>
          <li className='p-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default DashboardNavBar