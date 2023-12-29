'use client'

import { useState, useEffect } from 'react'
import { XSquare } from '@phosphor-icons/react'

const EditFinancialInfo = ({ onEdit, formData, onSave }) => {
  const [financialData, setFinancialData] = useState({
    housingTypeSelected: formData?.financialInfo?.housingTypeSeclected || null,
    housingMonthlyPayment: formData?.financialInfo?.housingMonthlyPayment || '',
    ccMonthlyDebt: formData?.financialInfo?.ccMonthlyDebt || '',
    autoMonthlyDebt: formData?.financialInfo?.autoMonthlyDebt || '',
    studentLoansMonthlyDebt: formData?.financialInfo?.studentLoansMonthlyDebt || '',
    medicalMonthlyDebt: formData?.financialInfo?.medicalMonthlyDebt || '',
    irsMonthlyDebt: formData?.financialInfo?.irsMonthlyDebt || '',
    bankAccountTypeSelected: formData?.financialInfo?.bankAccountSelected || '',
    bankName: formData?.financialInfo?.bankName || '',
    bankAccountNumber: formData?.financialInfo?.bankAccountNumber || '',
    bankRoutingNumber: formData?.financialInfo?.bankRoutingNumber || '',
    assetDesc: formData?.financialInfo?.assetDesc || '',
    liabilitiesDesc: formData?.financialInfo?.liabilitiesDesc || '',
  });

  const {
    housingTypeSelected,
    housingMonthlyPayment,
    ccMonthlyDebt,
    autoMonthlyDebt,
    studentLoansMonthlyDebt,
    medicalMonthlyDebt,
    irsMonthlyDebt,
    bankAccountTypeSelected,
    bankName,
    bankAccountNumber,
    bankRoutingNumber,
    assetDesc,
    liabilitiesDesc
  } = financialData;

  const handleFinancialInfoSave = (e) => {
    e.preventDefault();

    const editedFinancialFormData = {
      housingTypeSelected,
      housingMonthlyPayment,
      ccMonthlyDebt,
      autoMonthlyDebt,
      studentLoansMonthlyDebt,
      medicalMonthlyDebt,
      irsMonthlyDebt,
      bankAccountTypeSelected,
      bankName,
      bankAccountNumber,
      bankRoutingNumber,
      assetDesc,
      liabilitiesDesc
    };
    onSave(editedFinancialFormData)
    onEdit()

    console.log("editedFinancialFormData IN EDIT FINANCIAL INFO:", editedFinancialFormData)
  }

  useEffect(() => {
    setFinancialData((prevData) => ({
      ...prevData,
      ...formData?.financialInfo,
    }))
  }, [formData])

  return (
    <div className="flex flex-wrap gap-6 w-full">
      <div className="flex flex-col border-8 my-4 border-blue-700/50 rounded w-full">
        <header>
          <h1 className="text-center text-[1rem] font-bold tracking-wider bg-blue-700/50 text-emerald-50 px-2 pb-2 border-b border-blue-800">
            &#40;Edit&#41;&nbsp;Financial Information
          </h1>
        </header>
        <div className="relative space-y-2 py-4 px-2 bg-blue-500/20">
          <div onClick={() => onEdit()} className='absolute z-10 top-2 right-2'><XSquare size={16} color="#3c675c" weight="thin" /></div>
          <div className='flex flex-col'>
            <h3 className=' font-semibold tracking-wide'>Housing Type&nbsp;*</h3>
            <select
              required
              value={financialData.housingTypeSelected}
              onChange={(e) => setFinancialData((prevData) => ({ ...prevData, housingTypeSelected: e.target.value }))}
              name='housing-type'
              className='w-fit px-2 border border-emerald-800 rounded outline-none bg-white'>
              <option value='Status'>Options</option>
              <option value='Rental'>Rent</option>
              <option value='Mortgage'>Mortgage</option>
            </select>
          </div>
          <div className='flex flex-col'>
            <h3 className='font-semibold tracking-wide'>Monthly Housing Payment&nbsp;*</h3>
            <div className='flex'>
              <h1 className='bg-white px-1'>$</h1>
              <input
                required
                id='housing-monthly-payment'
                type='number'
                value={financialData.housingMonthlyPayment}
                onChange={(e) => setFinancialData((prevData) => ({ ...prevData, housingMonthlyPayment: e.target.value }))}
                className='px-2 outline-none w-full'
              />
            </div>
          </div>
          <div className='flex flex-col space-y-2 pt-2 pb-6 px-3 w-full bg-blue-500/30 rounded-lg'>
            <p className='mt-2 w-full text-sm font-semibold tracking-wide'>Enter the total debt amount for each item.  If none, please enter 0.</p>
            <div className='flex flex-col'>
              <h3 className='font-semibold tracking-wide'>Credit Cards</h3>
              <div className='flex'>
                <h1 className='bg-white px-1'>$</h1>
                <input
                  id='credit-cards-monthly-debt'
                  type='number'
                  value={financialData.ccMonthlyDebt}
                  onChange={(e) => setFinancialData((prevData) => ({ ...prevData, ccMonthlyDebt: e.target.value }))}
                  className='px-2 outline-none w-full'
                />
              </div>
            </div>
            <div className='flex flex-col'>
              <h3 className='font-semibold tracking-wide'>Auto Loans</h3>
              <div className='flex'>
                <h1 className='bg-white px-1'>$</h1>
                <input
                  id='auto-loans-monthly-debt'
                  type='number'
                  value={financialData.autoMonthlyDebt}
                  onChange={(e) => setFinancialData((prevData) => ({ ...prevData, autoMonthlyDebt: e.target.value }))}
                  className='px-2 outline-none w-full'
                />
              </div>
            </div>
            <div className='flex flex-col'>
              <h3 className='font-semibold tracking-wide'>Student Loans</h3>
              <div className='flex'>
                <h1 className='bg-white px-1'>$</h1>
                <input
                  id='student-loans-monthly-debt'
                  type='number'
                  value={financialData.studentLoansMonthlyDebt}
                  onChange={(e) => setFinancialData((prevData) => ({ ...prevData, studentLoansMonthlyDebt: e.target.value }))}
                  className='px-2 outline-none w-full'
                />
              </div>

            </div>
            <div className='flex flex-col'>
              <h3 className='font-semibold tracking-wide'>Medical Bills</h3>
              <div className='flex'>
                <h1 className='bg-white px-1'>$</h1>
                <input
                  id='medical-monthly-debt'
                  type='number'
                  value={financialData.medicalMonthlyDebt}
                  onChange={(e) => setFinancialData((prevData) => ({ ...prevData, medicalMonthlyDebt: e.target.value }))}
                  className='px-2 outline-none w-full'
                />
              </div>
            </div>
            <div className='flex flex-col'>
              <h3 className='font-semibold tracking-wide'>IRS</h3>
              <div className='flex'>
                <h1 className='bg-white px-1'>$</h1>
                <input
                  id='irs-monthly-debt'
                  type='number'
                  value={financialData.irsMonthlyDebt}
                  onChange={(e) => setFinancialData((prevData) => ({ ...prevData, irsMonthlyDebt: e.target.value }))}
                  className='px-2 outline-none w-full'
                />
              </div>
            </div>
          </div>

          {/* Banking Details */}
          <div className='flex flex-col'>
            <h3 className='font-semibold tracking-wide'>Your Bank&apos;s Name&nbsp;*</h3>
            <input
              required
              id='bank-name'
              type='text'
              value={financialData.bankName}
              onChange={(e) => setFinancialData((prevData) => ({ ...prevData, bankName: e.target.value }))}
              className='px-2 outline-none'
            />
          </div>
          <div className='flex flex-col'>
            <h3 className='font-semibold tracking-wide'>Account Type&nbsp;*</h3>
            <select
              required
              value={financialData.bankAccountTypeSelected}
              onChange={(e) => setFinancialData((prevData) => ({ ...prevData, bankAccountTypeSelected: e.target.value }))}
              name='bank-account-type'
              className='w-fit px-2 border border-emerald-800 rounded outline-none bg-white'>
              <option value='Options'>Options</option>
              <option value='Personal'>Personal</option>
              <option value='Business'>Business</option>
            </select>
          </div>
          <div className='flex flex-col'>
            <h3 className='font-semibold tracking-wide'>Account Number&nbsp;*</h3>
            <input
              required
              id='bank-account-number'
              type='password'
              value={financialData.bankAccountNumber}
              onChange={(e) => setFinancialData((prevData) => ({ ...prevData, bankAccountNumber: e.target.value }))}
              className='px-2 outline-none'
            />
          </div>
          <div className='flex flex-col'>
            <h3 className='font-semibold tracking-wide'>Routing Number&nbsp;*</h3>
            <input
              required
              id='bank-routing-number'
              type='password'
              value={financialData.bankRoutingNumber}
              onChange={(e) => setFinancialData((prevData) => ({ ...prevData, bankRoutingNumber: e.target.value }))}
              className='px-2 outline-none'
            />
          </div>
          <div className='flex flex-col'>
            <h3 className='font-semibold tracking-wide'>Assets</h3>
            <textarea
              id='assets-explanation'
              value={financialData.assetDesc}
              onChange={(e) => setFinancialData((prevData) => ({ ...prevData, assetDesc: e.target.value }))}
              rows='5'
              placeholder='Please list your assets and their net worth.'
              className='rounded p-2 mt-2 outline-none placeholder:text-xs placeholder:italic placeholder:absolute placeholder:bottom-1 placeholder:left-1'
            >
            </textarea>
          </div>

          {/* Liabilities */}
          <div className='flex flex-col'>
            <h3 className='font-semibold tracking-wide'>Liabilities | Debts</h3>
            <textarea
              id='liabilities'
              value={financialData.liabilitiesDesc}
              onChange={(e) => setFinancialData((prevData) => ({ ...prevData, liabilitiesDesc: e.target.value }))}
              rows='5'
              placeholder='Please list your liabilities and the total outstanding debt.'
              className='rounded p-2 mt-2 outline-none placeholder:text-xs placeholder:italic placeholder:absolute placeholder:bottom-1 placeholder:left-1'
            >
            </textarea>
          </div>
          <button
            type='button'
            onClick={handleFinancialInfoSave}
            className='w-full py-1 px-2 bg-slate-700/70 text-white rounded font-semibold'>Continue to Loan Details</button>
        </div>
      </div>
    </div>
  )
}

export default EditFinancialInfo