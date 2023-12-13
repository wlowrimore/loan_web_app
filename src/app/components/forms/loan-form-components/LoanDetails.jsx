'use client'

import { useState } from "react";
import TodaysDate from "../../ui/TodaysDate";

const LoanDetails = ({ onClick }) => {
  const [loanAmountRequested, setLoanAmountRequested] = useState("");
  const [loanPurposeSelected, setLoanPurposeSelected] = useState("");
  const [isOtherSelected, setIsOtherSelected] = useState(false)
  const [termLengthSelected, setTermLengthSelected] = useState("");
  const [isChecked, setIsChecked] = useState(false)
  const [signature, setSignature] = useState('')

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
    setIsChecked(!isChecked)
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
            <option value="reason">----</option>
            <option value="home improvements">Home Improvements</option>
            <option value="debt consolidation">Debt Consolidation</option>
            <option value="automotive repairs">Automotive Repairs</option>
            <option value="medical expenses">Medical Expenses</option>
            <option value="back taxes">Back Taxes</option>
            <option value="tuition">Tuition</option>
            <option value="other">Other</option>
          </select>
        </div>
        {isOtherSelected === true ? (
          <div className='flex flex-col p-2 text-sm bg-emerald-800 border border-emerald-800 rounded text-emerald-50'>
            <h3 className='text-xs text-emerald-200 font-semibold italic pb-2'>Please briefly describe a reason for this loan.</h3>
            <textarea id='other-reason' rows='3' className='p-1 text-emerald-950 border-emerald-800 rounded outline-none'></textarea>
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
            <option value="ten-years">10 Years</option>
            <option value="seven-years">7 Years</option>
            <option value="five-years">5 Years</option>
            <option value="3-years">3 Years</option>
          </select>
        </div>
        <div className="flex gap-1">
          <input
            type="checkbox"
            checked={isChecked}
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
              value={signature}
              onChange={(e) => setSignature(e.target.value)}
              className="px-2 outline-none w-full"
            />
            <TodaysDate />
          </div>
        </div>
        <button
          onClick={onClick}
          className="w-full py-1 px-2 bg-emerald-200 rounded font-semibold"
        >
          Placeholder Button Text
        </button>
      </form>
    </div>
  );
};

export default LoanDetails;
