'use client'

import { useState } from "react";
import TodaysDate from "../../ui/TodaysDate";

const LoanDetailsForm = ({ onSave }) => {
  const [loanAmountRequested, setLoanAmountRequested] = useState("");
  const [loanPurposeSelected, setLoanPurposeSelected] = useState("");
  const [isOtherSelected, setIsOtherSelected] = useState(false)
  const [otherSelectedDesc, setOtherSelectedDesc] = useState('')
  const [termLengthSelected, setTermLengthSelected] = useState("");
  const [isConsentChecked, setIsConsentChecked] = useState(false)
  const [applicantSignature, setApplicantSignature] = useState('')

  const handleLoanDetailsSaveAndSwitch = (e) => {
    e.preventDefault()
    const today = new Date()
    const formattedDate = today.toLocaleDateString()
    const dateSigned = formattedDate

    const loanDetailsData = {
      loanAmountRequested,
      loanPurposeSelected,
      isOtherSelected,
      otherSelectedDesc,
      termLengthSelected,
      isConsentChecked,
      signature,
      applicantSignature,
      dateSigned
    }
    onSave(loanDetailsData)
  }

  const handleOnLoanPurposeSelect = (value) => {
    setLoanPurposeSelected(value);
    const loanValueType = value
    if (loanValueType === 'other') {
      setIsOtherSelected(true)
    } else {
      setIsOtherSelected(false)
    }
  };

  const handleOnTermLengthSelect = (value) => {
    setTermLengthSelected(value);
  };

  const handleConsentCheckBoxChange = () => {
    setIsConsentChecked(!isConsentChecked)
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Loan Request Details</h1>
      <form id="loan-details" className="flex flex-col py-4 space-y-4 w-full">
        <div className="flex flex-col">
          <label
            htmlFor="loan-amount-requested"
            className="text-white font-semibold tracking-wide"
          >
            Loan Amount Requested&nbsp;*
          </label>
          <div className="flex">
            <h1 className="bg-white px-1">$</h1>
            <input
              required
              id="loan-amount-requested"
              type="number"
              value={loanAmountRequested}
              onChange={(e) => setLoanAmountRequested(e.target.value)}
              className="px-2 outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="loan-purpose"
            className="text-white font-semibold tracking-wide"
          >
            Reason for Loan&nbsp;*
          </label>
          <select
            required
            value={loanPurposeSelected}
            onChange={(e) => handleOnLoanPurposeSelect(e.target.value)}
            name="loan-purpose"
            className="w-fit px-1 border border-emerald-800 rounded outline-none bg-white"
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
        {isOtherSelected === true ? (
          <div className='flex flex-col p-2 text-sm bg-emerald-800 border border-emerald-800 rounded text-emerald-50'>
            <h3 className='text-xs text-emerald-200 font-semibold italic pb-2'>Please briefly describe a reason for this loan.</h3>
            <textarea
              id='other-reason'
              rows='3'
              value={otherSelectedDesc}
              onChange={(e) => setOtherSelectedDesc(e.target.value)}
              className='p-1 text-emerald-950 border-emerald-800 rounded outline-none'></textarea>
          </div>
        ) : null}
        <div className="flex flex-col">
          <label
            htmlFor="term-length"
            className="text-white font-semibold tracking-wide"
          >
            Term Length of Loan&nbsp;*
          </label>
          <select
            required
            value={termLengthSelected}
            onChange={(e) => handleOnTermLengthSelect(e.target.value)}
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
            checked={isConsentChecked}
            onChange={() => {
              handleConsentCheckBoxChange("checked");
            }}
            className="w-4"
          />
          <span className='text-white'>I consent to a third-party credit check.</span>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="signature" className='text-white font-semibold tracking-wide'>Signature&nbsp;*</label>
          <div className='flex gap-2'>
            <input
              required
              id="signature"
              type="text"
              value={applicantSignature}
              onChange={(e) => setApplicantSignature(e.target.value)}
              className="px-2 outline-none w-full"
            />
            <TodaysDate />
          </div>
        </div>
        <button
          type='button'
          onClick={handleLoanDetailsSaveAndSwitch}
          className="w-full py-1 px-2 bg-emerald-200 rounded font-semibold"
        >
          Submit Loan Application
        </button>
      </form>
    </div>
  );
};

export default LoanDetailsForm;
