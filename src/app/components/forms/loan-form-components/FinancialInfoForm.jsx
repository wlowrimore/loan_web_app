'use client'

import { useState } from 'react'
// import { InputMask } from 'primereact/inputmask'
// import DatePicker from 'react-datepicker'
// import UsStatesDropdown from '../../ui/UsStatesDropdown'

const FinancialInfoForm = ({ onSave }) => {
  const [housingTypeSelected, setHousingTypeSelected] = useState('')
  const [housingMonthlyPayment, setHousingMonthlyPayment] = useState('')
  const [ccMonthlyDebt, setCcMonthlyDebt] = useState('')
  const [autoMonthlyDebt, setAutoMonthlyDebt] = useState('')
  const [studentLoansMonthlyDebt, setStudentLoansMonthlyDebt] = useState('')
  const [medicalMonthlyDebt, setMedicalMonthlyDebt] = useState('')
  const [irsMonthlyDebt, setIRSMonthlyDebt] = useState('')
  const [bankAccountTypeSelected, setBankAccountTypeSelected] = useState('')
  const [bankName, setBankName] = useState('')
  const [bankAccountNumber, setBankAccountNumber] = useState('')
  const [bankRoutingNumber, setBankRoutingNumber] = useState('')
  const [assetsCheckedYes, setAssetsCheckedYes] = useState(false)
  const [assetsCheckedNo, setAssetsCheckedNo] = useState(false)
  const [assetDesc, setAssetDesc] = useState('')
  const [isAsset, setIsAsset] = useState(false)
  const [liabilitiesCheckedYes, setLiabilitiesCheckedYes] = useState(false)
  const [liabilitiesCheckedNo, setLiabilitiesCheckedNo] = useState(false)
  const [liabilitiesDesc, setLiabilitiesDesc] = useState('')
  const [isLiability, setIsLiability] = useState(false)

  const assets = isAsset
  const liabilities = isLiability

  const handleFinancialInfoSaveAndSwitch = (e) => {
    e.preventDefault()
    const financialFormData = {
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
      assets,
      assetDesc,
      liabilities,
      liabilitiesDesc
    }
    onSave(financialFormData)
  }

  const handleOnHousingTypeSelect = (value) => {
    setHousingTypeSelected(value)
  }

  const handleOnBankAccountTypeSelect = (value) => {
    setBankAccountTypeSelected(value)
  }

  const handleAssetsCheckBoxChange = (assetsCheckboxType) => {
    if (assetsCheckboxType === 'yes') {
      setAssetsCheckedYes(!assetsCheckedYes)
      setIsAsset(!isAsset)
      setAssetsCheckedNo(false)
    } else if (assetsCheckboxType === 'no') {
      setAssetsCheckedNo(!assetsCheckedNo)
      setAssetsCheckedYes(false)
      setIsAsset(false)
    }
  }

  const handleLiabilitiesCheckBoxChange = (liabilitiesCheckboxType) => {
    if (liabilitiesCheckboxType === 'yes') {
      setLiabilitiesCheckedYes(!liabilitiesCheckedYes)
      setIsLiability(!isLiability)
      setLiabilitiesCheckedNo(false)
    } else if (liabilitiesCheckboxType === 'no') {
      setLiabilitiesCheckedNo(!liabilitiesCheckedNo)
      setLiabilitiesCheckedYes(false)
      setIsLiability(false)
    }
  }

  return (
    <div>
      <h1 className='text-2xl font-bold text-white'>Financial Information</h1>
      <form id='financials' className='flex flex-col py-4 space-y-4'>
        <div className='flex flex-col'>
          <label htmlFor='housing-type' className='text-white font-semibold tracking-wide'>Housing Type&nbsp;*</label>
          <select
            required
            value={housingTypeSelected}
            onChange={(e) => handleOnHousingTypeSelect(e.target.value)}
            name='housing-type'
            className='w-fit px-2 border border-emerald-800 rounded outline-none bg-white'>
            <option value='Status'>Options</option>
            <option value='Rental'>Rent</option>
            <option value='Mortgage'>Mortgage</option>
          </select>
        </div>
        <div className='flex flex-col'>
          <label htmlFor='housing-monthly-payment' className='text-white font-semibold tracking-wide'>Monthly Housing Payment&nbsp;*</label>
          <div className='flex'>
            <h1 className='bg-white px-1'>$</h1>
            <input
              required
              id='housing-monthly-payment'
              type='number'
              value={housingMonthlyPayment}
              onChange={(e) => setHousingMonthlyPayment(e.target.value)}
              className='px-2 outline-none w-full'
            />
          </div>
        </div>
        <div className='flex flex-col space-y-2 pt-2 pb-4 px-3 w-full bg-emerald-800 rounded-lg'>
          <p className='mt-2 w-full text-sm text-emerald-50 font-semibold tracking-wide'>Enter the total debt amount for each item.  If none, please enter 0.</p>
          <div className='flex flex-col'>
            <label htmlFor='credit-cards-monthly-debt' className='text-emerald-300 font-semibold tracking-wide'>Credit Cards</label>
            <div className='flex'>
              <h1 className='bg-white px-1'>$</h1>
              <input
                id='credit-cards-monthly-debt'
                type='number'
                value={ccMonthlyDebt}
                onChange={(e) => setCcMonthlyDebt(e.target.value)}
                className='px-2 outline-none w-full'
              />
            </div>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='auto-loans-monthly-debt' className='text-emerald-300 font-semibold tracking-wide'>Auto Loans</label>
            <div className='flex'>
              <h1 className='bg-white px-1'>$</h1>
              <input
                id='auto-loans-monthly-debt'
                type='number'
                value={autoMonthlyDebt}
                onChange={(e) => setAutoMonthlyDebt(e.target.value)}
                className='px-2 outline-none w-full'
              />
            </div>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='student-loans-monthly-debt' className='text-emerald-300 font-semibold tracking-wide'>Student Loans</label>
            <div className='flex'>
              <h1 className='bg-white px-1'>$</h1>
              <input
                id='student-loans-monthly-debt'
                type='number'
                value={studentLoansMonthlyDebt}
                onChange={(e) => setStudentLoansMonthlyDebt(e.target.value)}
                className='px-2 outline-none w-full'
              />
            </div>

          </div>
          <div className='flex flex-col'>
            <label htmlFor='medical-monthly-debt' className='text-emerald-300 font-semibold tracking-wide'>Medical Bills</label>
            <div className='flex'>
              <h1 className='bg-white px-1'>$</h1>
              <input
                id='medical-monthly-debt'
                type='number'
                value={medicalMonthlyDebt}
                onChange={(e) => setMedicalMonthlyDebt(e.target.value)}
                className='px-2 outline-none w-full'
              />
            </div>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='irs-monthly-debt' className='text-emerald-300 font-semibold tracking-wide'>IRS</label>
            <div className='flex'>
              <h1 className='bg-white px-1'>$</h1>
              <input
                id='irs-monthly-debt'
                type='number'
                value={irsMonthlyDebt}
                onChange={(e) => setIRSMonthlyDebt(e.target.value)}
                className='px-2 outline-none w-full'
              />
            </div>
          </div>
        </div>

        {/* Banking Details */}
        <div className='flex flex-col'>
          <label htmlFor='bank-name' className='text-emerald-50 font-semibold tracking-wide'>Your Bank&apos;s Name&nbsp;*</label>
          <input
            required
            id='bank-name'
            type='text'
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            className='px-2 outline-none'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='bank-account-type' className='text-emerald-50 font-semibold tracking-wide'>Account Type&nbsp;*</label>
          <select
            required
            value={bankAccountTypeSelected}
            onChange={(e) => handleOnBankAccountTypeSelect(e.target.value)}
            name='bank-account-type'
            className='w-fit px-2 border border-emerald-800 rounded outline-none bg-white'>
            <option value='Options'>Options</option>
            <option value='Personal'>Personal</option>
            <option value='Business'>Business</option>
          </select>
        </div>
        <div className='flex flex-col'>
          <label htmlFor='bank-account-number' className='text-emerald-50 font-semibold tracking-wide'>Account Number&nbsp;*</label>
          <input
            required
            id='bank-account-number'
            type='password'
            value={bankAccountNumber}
            onChange={(e) => setBankAccountNumber(e.target.value)}
            className='px-2 outline-none'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='bank-routing-number' className='text-emerald-50 font-semibold tracking-wide'>Routing Number&nbsp;*</label>
          <input
            required
            id='bank-routing-number'
            type='password'
            value={bankRoutingNumber}
            onChange={(e) => setBankRoutingNumber(e.target.value)}
            className='px-2 outline-none'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='borrower-assets' className='text-emerald-50 font-semibold tracking-wide'>Do you have any assets?</label>
          <div className='flex gap-4 text-md text-emerald-800 font-bold'>
            <div className='flex gap-1'>
              <input
                type='checkbox'
                checked={assetsCheckedYes}
                onChange={() => { handleAssetsCheckBoxChange('yes') }}
                className='w-4'
              />
              Yes
            </div>
            <div className='flex gap-1'>
              <input
                type='checkbox'
                checked={assetsCheckedNo}
                onChange={() => { handleAssetsCheckBoxChange('no') }}
                className='w-4'
              />
              No
            </div>
          </div>
          {isAsset && (
            <textarea
              id='assets-explanation'
              value={assetDesc}
              onChange={(e) => setAssetDesc(e.target.value)}
              rows='5'
              placeholder='Please list your assets and their net worth.'
              className='bg-emerald-800 text-emerald-50 rounded p-2 mt-2 outline-none placeholder:text-xs placeholder:italic placeholder:absolute placeholder:bottom-1 placeholder:left-1'
            >
            </textarea>
          )}
        </div>

        {/* Liabilities */}
        <div className='flex flex-col'>
          <label htmlFor='liabilities' className='text-emerald-50 font-semibold tracking-wide'>Do you have any outstanding debts?</label>
          <div className='flex gap-4 text-md text-emerald-800 font-bold'>
            <div className='flex gap-1'>
              <input
                type='checkbox'
                checked={liabilitiesCheckedYes}
                onChange={() => { handleLiabilitiesCheckBoxChange('yes') }}
                className='w-4'
              />
              Yes
            </div>
            <div className='flex gap-1'>
              <input
                type='checkbox'
                checked={liabilitiesCheckedNo}
                onChange={() => { handleLiabilitiesCheckBoxChange('no') }}
                className='w-4'
              />
              No
            </div>
          </div>
          {isLiability && (
            <textarea
              id='liabilities'
              value={liabilitiesDesc}
              onChange={(e) => setLiabilitiesDesc(e.target.value)}
              rows='5'
              placeholder='Please list your liabilities and the total outstanding debt.'
              className='bg-emerald-800 text-emerald-50 rounded p-2 mt-2 outline-none placeholder:text-xs placeholder:italic placeholder:absolute placeholder:bottom-1 placeholder:left-1'
            >
            </textarea>
          )}
        </div>
        <button type='button' onClick={handleFinancialInfoSaveAndSwitch} className='w-full py-1 px-2 bg-emerald-200 rounded font-semibold'>Continue to Loan Details</button>
      </form>
    </div>
  )
}

export default FinancialInfoForm