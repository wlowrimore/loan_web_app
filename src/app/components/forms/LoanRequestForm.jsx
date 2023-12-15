'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link';
import PersonalInfoForm from './loan-form-components/PersonalInfoForm';
import EmploymentInfoForm from './loan-form-components/EmploymentInfoForm';
import FinancialsInfoForm from './loan-form-components/FinancialsInfoForm';
import LoanDetailsForm from './loan-form-components/LoanDetailsForm';
import Submitted from '../ui/Submitted';

const LoanRequestForm = () => {
  const [personalInfo, setPersonalInfo] = useState({});
  const [employmentInfo, setEmploymentInfo] = useState({});
  const [financialsInfo, setFinancialsInfo] = useState({});
  const [loanDetails, setLoanDetails] = useState({});
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0)

  const handlePersonalInfoSubmit = (data) => {
    setPersonalInfo(data)
    setCurrentComponentIndex(1)
  }
  const handleEmploymentInfoSubmit = (data) => {
    setEmploymentInfo(data)
    setCurrentComponentIndex(2)
  }
  const handleFinancialsInfoSubmit = (data) => {
    setFinancialsInfo(data)
    setCurrentComponentIndex(3)
  }
  const handleLoanDetailsSubmit = (data) => {
    setLoanDetails(data)
    setCurrentComponentIndex(4)
  }
  console.log({ "Submitted Data:": [personalInfo, employmentInfo, financialsInfo, loanDetails] })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [currentComponentIndex]);

  const renderCurrentForm = () => {
    switch (currentComponentIndex) {
      case 0:
        return <PersonalInfoForm onSave={handlePersonalInfoSubmit} />
      case 1:
        return <EmploymentInfoForm onSave={handleEmploymentInfoSubmit} />
      case 2:
        return <FinancialsInfoForm onSave={handleFinancialsInfoSubmit} />
      case 3:
        return <LoanDetailsForm onSave={handleLoanDetailsSubmit} />
      case 4:
        return <Submitted />
      default:
        return null
    }
  }

  return (
    <>
      <div className='w-full border border-emerald-800 rounded-tl rounded-tr bg-green-800/60 pt-2 pb-4 px-4 mt-8'>
        {renderCurrentForm()}
      </div>

      <div className='w-full flex border border-emerald-800 rounded-bl rounded-br bg-green-100/40 p-4 mt-2'>
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
    </>
  )
}

export default LoanRequestForm