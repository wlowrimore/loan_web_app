'use client'

import { UserCircleGear, CurrencyCircleDollar, Globe, Question, CheckCircle, Circle } from '@phosphor-icons/react'

const TimelineComponent = () => {
  return (
    <main className='w-full flex items-center'>
      <div className='flex flex-col items-center w-full'>
        <p className='text-[.55rem] relative top-1 left-2'>personal</p>
        <div className='flex items-center w-full'>
          <span><Circle size={12} weight='fill' color="#059669" /></span>
          <div className='bg-neutral-700 h-[.063rem] w-full' />
          <span><UserCircleGear size={24} color="#059669" /></span>
          <div className='bg-neutral-700 h-[.063rem] w-full' />
        </div>
      </div>

      <div className='flex flex-col items-center w-full'>
        <p className='text-[.55rem] relative top-1'>employment</p>
        <div className='flex items-center w-full'>
          <div className='bg-neutral-700 h-[.063rem] w-full' />
          <span><Globe size={24} color="#059669" /></span>
          <div className='bg-neutral-700 h-[.063rem] w-full' />
        </div>
      </div>

      <div className='flex flex-col items-center w-full'>
        <p className='text-[.55rem] relative top-1'>financials</p>
        <div className='flex items-center w-full'>
          <div className='bg-neutral-700 h-[.063rem] w-full' />
          <span><CurrencyCircleDollar size={24} color="#059669" /></span>
          <div className='bg-neutral-700 h-[.063rem] w-full' />
        </div>
      </div>

      <div className='flex flex-col items-center w-full'>
        <p className='text-[.55rem] relative top-1'>loan</p>
        <div className='flex items-center w-full'>
          <div className='bg-neutral-700 h-[.063rem] w-full' />
          <span><Question size={24} color="#059669" /></span>
          <div className='bg-neutral-700 h-[.063rem] w-full' />
        </div>
      </div>

      <div className='flex flex-col items-center w-full'>
        <p className='text-[.55rem] relative top-1 right-2'>submitted</p>
        <div className='flex items-center w-full'>
          <div className='bg-neutral-700 h-[.063rem] w-full' />
          <span><CheckCircle size={24} color="#059669" /></span>
          <div className='bg-neutral-700 h-[.063rem] w-full' />
          <span><Circle size={12} weight='fill' color="#059669" /></span>
        </div>
      </div>
    </main>
  )
}

export default TimelineComponent