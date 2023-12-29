'use client'

import { useState, useEffect } from 'react'
import { XSquare } from '@phosphor-icons/react'
import TodaysDate from '../../ui/TodaysDate'

const EditLoanDetailsInfo = ({ onEdit, formData, onSave }) => {
  const [loanDetailsData, setLoanDetailsData] = useState({
    loanAmountRequested: formData?.loanDetailsInfo?.loanAmountRequested || '',
    loanPurposeSelected: formData?.loanDetailsInfo?.loanPurposeSelected || '',
    otherSelectedDesc: formData?.loanDetailsInfo?.otherSelectedDesc || '',
    termLengthSelected: formData?.loanDetailsInfo?.termLengthSelected || '',
    signature: formData?.loanDetailsInfo?.signature || '',
    applicantSignature: formData?.loanDetailsInfo?.applicantSignature || '',
  })

  const {
    loanAmountRequested,
    loanPurposeSelected,
    otherSelectedDesc,
    termLengthSelected,
    signature,
    applicantSignature,
  } = loanDetailsData

  const handleLoanDetailsInfoSave = (e) => {
    e.preventDefault()

    const editedLoanDetailsFormData = {
      loanAmountRequested,
      loanPurposeSelected,
      otherSelectedDesc,
      termLengthSelected,
      signature,
      applicantSignature,
    }
    onSave(editedLoanDetailsFormData)
    onEdit()

    console.log("editedLoanDetailsFormData IN EDIT LOAN DETAILS INFO:", editedLoanDetailsFormData)
  }

  useEffect(() => {
    setLoanDetailsData((prevData) => ({
      ...prevData,
      ...formData?.loanDetailsInfo
    }))
  }, [formData])

  return (
    <div className="flex flex-wrap gap-6 w-full">
      <div className="flex flex-col border-8 my-4 border-blue-700/50 rounded w-full">
        <header>
          <h1 className="text-center text-[1rem] font-bold tracking-wider bg-blue-700/50 text-emerald-50 px-2 pb-2 border-b border-blue-800">
            &#40;Edit&#41;&nbsp;Loan Request Details
          </h1>
        </header>
        <div className="relative space-y-2 py-4 px-2 bg-blue-500/20">
          <div onClick={() => onEdit()} className='absolute z-10 top-2 right-2'><XSquare size={16} color="#3c675c" weight="thin" /></div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Loan Amount Requested:</h3>
            <div className="flex">
              <h1 className="bg-white px-1">$</h1>
              <input
                required
                id="loan-amount-requested"
                type="number"
                value={loanDetailsData.loanAmountRequested}
                onChange={(e) => setLoanDetailsData((prevData) => ({ ...prevData, loanAmountRequested: e.target.value }))}
                className="px-2 outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Reason for Loan:</h3>
            <select
              required
              value={loanDetailsData.loanPurposeSelected}
              onChange={(e) => setLoanDetailsData((prevData) => ({ ...prevData, loanPurposeSelected: e.target.value }))}
              name="loan-purpose"
              className="w-fit px-1 rounded outline-none bg-white"
            >
              <option value="Reason">----</option>
              <option value="Home Improvements">Home Improvements</option>
              <option value="Debt Consolidation">Debt Consolidation</option>
              <option value="Automotive Repairs">Automotive Repairs</option>
              <option value="Medical Expenses">Medical Expenses</option>
              <option value="Back Taxes">Back Taxes</option>
              <option value="Tuition">Tuition</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="flex flex-col">

            <div className='flex flex-col px-2 pt-2 pb-4 text-sm bg-blue-800/20 rounded'>
              <h3 className="font-semibold pb-2">Update for &quot;Other&quot; Selection:</h3>
              <textarea
                id='other-reason'
                rows='3'
                value={loanDetailsData.otherSelectedDesc}
                onChange={(e) => setLoanDetailsData((prevData) => ({ ...prevData, otherSelectedDesc: e.target.value }))}
                className='p-1 text-emerald-950 border-emerald-800 rounded outline-none'></textarea>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold py-1">Term Length of Loan:</h3>
            <select
              required
              value={loanDetailsData.termLengthSelected}
              onChange={(e) => setLoanDetailsData((prevData) => ({ ...prevData, termLengthSelected: e.target.value }))}
              name="term-length"
              className="w-fit px-1 border border-emerald-800 rounded outline-none bg-white"
            >
              <option value="status">----</option>
              <option value="12-months">12 Months</option>
              <option value="10-years">10 Years</option>
              <option value="7-years">7 Years</option>
              <option value="5-years">5 Years</option>
              <option value="3-years">3 Years</option>
            </select>
          </div>
          <div className="flex gap-1">
            <input
              type="checkbox"
              checked={loanDetailsData.isConsentChecked}
              onChange={(e) => setLoanDetailsData((prevData) => ({ ...prevData, signature: e.target.value }))}
              className="w-3"
            />
            <span className='italic'>Consent to third-party credit check confirmed.</span>
          </div>
          <div className="flex gap-2">
            <input
              required
              id="signature"
              type="text"
              value={loanDetailsData.applicantSignature}
              onChange={(e) => setLoanDetailsData((prevData) => ({ ...prevData, applicantSignature: e.target.value }))}
              className="px-2 outline-none w-full"
            />
            <TodaysDate />
          </div>
          <button
            type='button'
            onClick={handleLoanDetailsInfoSave}
            className='w-full py-1 px-2 bg-slate-700/70 text-white rounded font-semibold'>Update Loan Details Information</button>
        </div>
      </div>
    </div>
  )
}

export default EditLoanDetailsInfo