'use client'

import { useState } from 'react'
import { InputMask } from 'primereact/inputmask'
import DatePicker from 'react-datepicker'
import UsStatesDropdown from '../../ui/UsStatesDropdown'

const EmploymentInfo = ({ onClick }) => {
  const [employmentSelected, setEmploymentSelected] = useState('')
  const [employersName, setEmployersName] = useState('')
  const [employersPhone, setEmployersPhone] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [jobResponsibilites, setJobResponsibilities] = useState('')
  const [grossMonthlyIncome, setGrossMonthlyIncome] = useState('')
  const [employersAddressOne, setEmployersAddressOne] = useState('')
  const [employersAddressTwo, setEmployersAddressTwo] = useState('')
  const [employersCity, setEmployersCity] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [employersZipcode, setEmployersZipcode] = useState('')

  const employmentFormData = {
    employmentSelected,
    employersName,
    employersPhone,
    startDate,
    endDate,
    jobTitle,
    jobResponsibilites,
    grossMonthlyIncome,
    employersAddressOne,
    employersAddressTwo,
    employersCity,
    selectedState,
    employersZipcode
  }

  const handleOnEmploymentSelect = (value) => {
    setEmploymentSelected(value)
  }

  const handleOnStateSelect = (selectedState) => {
    setSelectedState(selectedState)
    console.log('The state you selected is:', selectedState)
  }

  return (
    <div>
      <h1 className='text-2xl font-bold text-white'>Employment Information</h1>
      <form id='employment' className='flex flex-col py-4 space-y-4'>
        <div className='flex flex-col'>
          <label htmlFor='employment-status' className='text-white font-semibold tracking-wide'>Employment Status&nbsp;*</label>
          <select
            required
            value={employmentSelected}
            onChange={(e) => handleOnEmploymentSelect(e.target.value)}
            name='employment-status'
            className='w-fit px-2 border border-emerald-800 rounded outline-none bg-white'>
            <option value='status'>----</option>
            <option value='full-time-employed'>Employed &#40;Full-Time&#41;</option>
            <option value='part-time-employed'>Employed &#40;Part-Time&#41;</option>
            <option value='self-employed'>Self-Employed</option>
            <option value='unemployed'>Unemployed</option>
          </select>
        </div>
        <div className='flex flex-col'>
          <label htmlFor='employers-name' className='text-white font-semibold tracking-wide'>Employer&apos;s Name&nbsp;*</label>
          <input
            required
            id='employers-name'
            type='text'
            value={employersName}
            onChange={(e) => setEmployersName(e.target.value)}
            className='px-2 outline-none'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='employers-phone' className='text-white font-semibold tracking-wide'>Employer&apos;s Phone&nbsp;*</label>
          <InputMask
            required
            id='employers-phone'
            mask='(999) 999-9999'
            placeholder='(123) 456-7890'
            type='tel'
            value={employersPhone}
            onChange={(e) => setEmployersPhone(e.target.value)}
            className='px-2 outline-none'
          />
        </div>
        <div className='flex'>
          <div className='flex flex-col'>
            <label htmlFor='start-date' className='text-white font-semibold tracking-wide'>Start Date&nbsp;*</label>
            {typeof window !== 'undefined' && (
              <DatePicker
                required
                selected={startDate}
                value={startDate}
                onChange={(date) => setStartDate(date)}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                className='outline-none px-2 w-4/5'
              />
            )}
          </div>
          <div className='flex flex-col'>
            <label htmlFor='end-date' className='text-white font-semibold tracking-wide'>End Date&nbsp;*</label>
            {typeof window !== 'undefined' && (
              <DatePicker
                required
                selected={endDate}
                value={endDate}
                onChange={(date) => setEndDate(date)}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                className='outline-none px-2 w-4/5'
              />
            )}
          </div>
        </div>
        <div className='flex gap-2'>
          <input
            type='checkbox'
            name='checkbox'
            selected
          />
          <span className='text-white text-sm'>Currently employed here</span>
        </div>
        <div className='flex flex-col'>
          <label htmlFor='job-title' className='text-white font-semibold tracking-wide'>Job Title&nbsp;*</label>
          <input
            id='job-title'
            type='text'
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className='px-2 outline-none'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='job-responsibilies' className='text-white font-semibold tracking-wide'>Job Responsibilities&nbsp;*</label>
          <textarea
            id='job-responsibilies'
            rows='5'
            value={jobResponsibilites}
            onChange={(e) => setJobResponsibilities(e.target.value)}
            className='px-2 outline-none'
          >
          </textarea>
        </div>
        <div className='flex flex-col'>
          <label htmlFor='gross-monthly-income' className='text-white font-semibold tracking-wide'>Gross Monthly Income&nbsp;*</label>
          <input
            id='gross-monthly-income'
            type='number'
            value={grossMonthlyIncome}
            onChange={(e) => setGrossMonthlyIncome(e.target.value)}
            className='px-2 outline-none'
          />
        </div>
        {/* Address Section */}
        <hr />
        <h2 className='text-xl text-white'>Employer's Address</h2>
        <div className='flex flex-col'>
          <label htmlFor='employers-address-one' className='text-white font-semibold tracking-wide'>Address One&nbsp;*</label>
          <input
            required
            id='employers-address-one'
            type='text'
            value={employersAddressOne}
            onChange={(e) => setEmployersAddressOne(e.target.value)}
            className='px-2 outline-none'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='employers-address-two' className='text-white font-semibold tracking-wide'>Address Two&nbsp;&#40;optional&#41;</label>
          <input
            id='employers-address-two'
            type='text'
            value={employersAddressTwo}
            onChange={(e) => setEmployersAddressTwo(e.target.value)}
            className='px-2 outline-none'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='employers-city' className='text-white font-semibold tracking-wide'>City&nbsp;*</label>
          <input
            required
            id='employers-city'
            type='text'
            value={employersCity}
            onChange={(e) => setEmployersCity(e.target.value)}
            className='px-2 outline-none'
          />
        </div>
        <UsStatesDropdown handleOnStateSelect={handleOnStateSelect} />
        <div className='flex flex-col'>
          <label htmlFor='employers-zipcode' className='text-white font-semibold tracking-wide'>Zipcode&nbsp;*</label>
          <input
            required
            id='employers-zipcode'
            type='number'
            value={employersZipcode}
            onChange={(e) => setEmployersZipcode(e.target.value)}
            className='px-2 outline-none'
          />
        </div>
        <button onClick={onClick} className='w-full py-1 px-2 bg-emerald-200 rounded font-semibold'>Continue to Financials</button>
      </form>
    </div>
  )
}

export default EmploymentInfo