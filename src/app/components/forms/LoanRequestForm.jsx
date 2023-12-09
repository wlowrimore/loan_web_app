'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link';
import PersonalInfo from './loan-form-components/PersonalInfo';

const LoanRequestForm = () => {
  // const [selected, setSelected] = useState('');
  // const [loanAmount, setLoanAmount] = useState('');
  // const [formData, setFormData] = useState()

  // const handleOnSelect = (value) => {
  //   setSelected(value);
  // }

  // const handleOnChange = (e) => {
  //   setLoanAmount(e.target.value)
  // }

  // const handleFormSubmit = (e) => {
  //   e.preventDefault()
  //   const loan = {
  //     loanAmount,
  //     selected
  //   }
  //   setFormData(loan)
  // }

  // useEffect(() => {
  //   console.log('Form Data:', formData);
  // }, [formData])

  return (
    <>
      <section className='w-full border border-emerald-800 rounded-tl rounded-tr bg-green-800/60 py-2 px-4 mt-8'>
        <PersonalInfo />
        {/* <form onSubmit={handleFormSubmit} className='flex flex-col justify-center'>
          <h2 className='text-2xl text-emerald-800 font-bold mb-4'>What Are Your Needs?</h2>
          <p className='font-bold text-md text-emerald-800 tracking-wide'>Requested Amount</p>
          <div className='flex items-center'>
            <span className='border-t border-b border-l border-emerald-800 rounded-tl rounded-bl bg-white py-1 px-2 outline-none'>
              $
            </span>
            <input
              id='req-amount'
              onChange={handleOnChange}
              type='number'
              className='w-full py-1 pr-2 border-t border-b border-r border-emerald-800 rounded-tr rounded-br outline-none'
            />
          </div>
          <div className='mt-4 w-full'>
            <p className='font-bold text-md text-emerald-800 tracking-wide'>Reason For Loan</p>
            <select value={selected} onChange={(e) => handleOnSelect(e.target.value)} name='loan' className='w-full py-1 px-2 border border-emerald-800 rounded outline-none bg-white'>
              <option value='reason'>-- Choose an Option --</option>
              <option value='home'>Home</option>
              <option value='auto'>Auto</option>
              <option value='school'>School</option>
              <option value='extra-funds'>Extra Funds</option>
              <option value='other'>Other</option>
            </select>
          </div>
          <div className='flex gap-1 mt-2 mx-auto'>
            <input type='checkbox' name='terms' />
            <span className='text-xs text-neutral-700 tracking-wide'>I Agree to &#40;company&apos;s&#41; <Link href='#' className='text-neutral-900'>Terms and Conditions</Link>.</span>
          </div>
          <div className='w-full text-end'>
            <button className='w-fit py-2 px-4 border border-emerald-800 rounded bg-emerald-500/50 text-lg text-emerald-800 font-bold tracking-wide mt-8 mb-2'>
              Continue
            </button>
          </div>
        </form> */}
      </section>
      <section className='w-full flex border border-emerald-800 rounded-bl rounded-br bg-green-100/40 p-3 mt-2'>
        <div className='w-full flex justify-between text-sm text-neutral-800'>
          <ul className='flex flex-col space-y-2'>
            <li><Link href='/privacy-policy'>Privacy Policy</Link></li>
            <li><Link href='/responsible-lending'>Responsible Lending</Link></li>
            <li><Link href='/rates-fees'>Rates & Fees</Link></li>
          </ul>
          <ul className='flex flex-col space-y-2'>
            <li><Link href='/disclaimer'>Disclaimer</Link></li>
            <li><Link href='/marketing-practices'>Marketing Practices</Link></li>
            <li><Link href='/terms-of-use'>Terms of Use</Link></li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default LoanRequestForm