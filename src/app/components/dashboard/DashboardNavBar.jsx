import Link from 'next/link'
import React from 'react'

const DashboardNavBar = () => {
  return (
    <header className='relative w-screen right-4 top-1 mb-6'>
      <nav className='w-full py-1'>
        <ul className='flex justify-evenly text-sm text-emerald-800 font-semibold'>
          <li className='p-1'>Portfolio</li>
          <li className='p-1'>Make Pymnt</li>
          <li className='p-1'>Pymnt History</li>
          <Link href='/loan-request'><li className='p-1'>Rqst Loan</li></Link>
          <li className='p-1'>Help</li>
        </ul>
      </nav>
    </header>
  )
}

export default DashboardNavBar