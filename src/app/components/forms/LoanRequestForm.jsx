'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link';
import PersonalInfo from './loan-form-components/PersonalInfo';
import EmploymentInfo from './loan-form-components/EmploymentInfo';
import FinancialsInfo from './loan-form-components/FinancialsInfo';
import LoanDetails from './loan-form-components/LoanDetails';

const LoanRequestForm = () => {
  // const components = [PersonalInfo, EmploymentInfo]
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0)

  const handleClick = () => {
    setCurrentComponentIndex((prevIndex) => (prevIndex + 1) % 4)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log('Form Submitted!')
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [currentComponentIndex]);


  // const CurrentComponent = components[currentComponentIndex]

  return (
    <>
      <div>
        <form onSubmit={handleOnSubmit} className='w-full border border-emerald-800 rounded-tl rounded-tr bg-green-800/60 pt-2 pb-4 px-4 mt-8'>
          {currentComponentIndex === 0 ? (
            <PersonalInfo onClick={handleClick} />
          ) : currentComponentIndex === 1 ? (
            <EmploymentInfo onClick={handleClick} />
          ) : currentComponentIndex === 2 ? (
            <FinancialsInfo onClick={handleClick} />
          ) : <LoanDetails onClick={handleClick} />
          }
          {/* <div>
            <button>Submit Loan Information</button>
          </div> */}
        </form>

        <div className='w-full flex border border-emerald-800 rounded-bl rounded-br bg-green-100/40 p-3 mt-2'>
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
        </div>
      </div>
    </>
  )
}

export default LoanRequestForm