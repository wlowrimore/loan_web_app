import React from 'react'

const Submitted = () => {
  return (
    <div className='flex flex-col py-8 -space-y-1'>
      <h1 className='text-5xl font-bold text-emerald-950'>Congratulations!</h1>
      <h2 className='text-2xl font-bold text-emerald-900'>Your loan application was successfully submitted.</h2>
      <p className='text-lg font-semibold tracking-wide text-white'>Please stand by.  This process can take up to 5 minutes.</p>
    </div>
  )
}

export default Submitted