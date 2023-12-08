import Link from 'next/link'
import React from 'react'

const DashboardContent = () => {
  return (
    <div>
      <section id='main-content' className='flex'>
        <div className='flex flex-col space-y-5 my-6'>
          <div>
            <h3 className='text-xl font-semibold flex items-center'>Original Loan<Link href='#' className='text-xs text-emerald-700'>&nbsp;&#40; details &#41;</Link></h3>
            <span>$22,500.00</span>
          </div>
          <div>
            <h3 className='text-xl font-semibold flex items-center'>Current Balance<Link href='#' className='text-xs text-emerald-700'>&nbsp;&#40; pymnt history &#41;</Link></h3>
            <span>$14,462.89</span>
          </div>
          <div>
            <h3 className='text-xl font-semibold flex items-center'>Last Pymnt Amount</h3>
            <span className='text-indigo-700'><Link href='#'>- $285.00</Link>&nbsp;on 12/01/2023</span>
          </div>
          <div>
            <h3 className='text-xl font-semibold flex items-center'>Next Pymnt Date</h3>
            <span>01/12/2024</span>
          </div>
          <h3></h3>
        </div>
        <div className='flex flex-col'>

        </div>
      </section>
    </div>
  )
}

export default DashboardContent