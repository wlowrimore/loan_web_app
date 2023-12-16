'use client'

import { UserCircleGear, CurrencyCircleDollar, Globe, Question, CheckCircle, Circle } from '@phosphor-icons/react'

const TimelineComponent = ({
  isPersonalInfoCompleted,
  isEmploymentInfoCompleted,
  isFinancialsInfoCompleted,
  isLoanDetailsCompleted,
  isRequestSubmitted,
}) => {
  return (
    <main className='w-full flex items-center'>
      <div className='flex flex-col items-center w-full'>
        {/* <p className='text-[.55rem] relative top-1 left-2'>personal</p> */}
        <div className='flex items-center w-full'>
          <span><Circle size={12} weight='fill' color="#059669" /></span>
          <div className='bg-neutral-700 h-[.063rem] w-full'></div>
          {isPersonalInfoCompleted ? (
            <span><UserCircleGear size={20} color="#059669" className='bg-emerald-600 rounded-full' /></span>
          ) : (
            <span><UserCircleGear size={24} color="#059669" /></span>
          )}
          <div className='bg-neutral-700 h-[.063rem] w-full'></div>
        </div>
      </div>

      <div className='flex flex-col items-center w-full'>
        {/* <p className='text-[.55rem] relative top-1'>employment</p> */}
        <div className='flex items-center w-full'>
          <div className='bg-neutral-700 h-[.063rem] w-full'></div>
          {isEmploymentInfoCompleted ? (
            <span><Globe size={20} color="#059669" className='bg-emerald-600 rounded-full' /></span>
          ) : (
            <span><Globe size={24} color="#059669" /></span>
          )}
          <div className='bg-neutral-700 h-[.063rem] w-full'></div>
        </div>
      </div>

      <div className='flex flex-col items-center w-full'>
        {/* <p className='text-[.55rem] relative top-1'>financials</p> */}
        <div className='flex items-center w-full'>
          <div className='bg-neutral-700 h-[.063rem] w-full' />
          {isFinancialsInfoCompleted ? (
            <span><CurrencyCircleDollar size={20} color="#059669" className='bg-emerald-600 rounded-full' /></span>
          ) : (
            <span><CurrencyCircleDollar size={24} color="#059669" /></span>
          )}
          <div className='bg-neutral-700 h-[.063rem] w-full'></div>
        </div>
      </div>

      <div className='flex flex-col items-center w-full'>
        {/* <p className='text-[.55rem] relative top-1'>loan</p> */}
        <div className='flex items-center w-full'>
          <div className='bg-neutral-700 h-[.063rem] w-full'></div>
          {isLoanDetailsCompleted ? (
            <span><Question size={20} color="#059669" className='bg-emerald-600 rounded-full' /></span>
          ) : (
            <span><Question size={24} color="#059669" /></span>
          )}
          <div className='bg-neutral-700 h-[.063rem] w-full'></div>
        </div>
      </div>

      <div className='flex flex-col items-center w-full'>
        {/* <p className='text-[.55rem] relative top-1 right-2'>submitted</p> */}
        <div className='flex items-center w-full'>
          <div className='bg-neutral-700 h-[.063rem] w-full'></div>
          {isRequestSubmitted ? (
            <span><CheckCircle size={20} color="#059669" className='bg-emerald-600 rounded-full' /></span>
          ) : (
            <span><CheckCircle size={24} color="#059669" /></span>
          )}
          <div className='bg-neutral-700 h-[.063rem] w-full'></div>
          <span><Circle size={12} weight='fill' color="#059669" /></span>
        </div>
      </div>
    </main>
  )
}

export default TimelineComponent