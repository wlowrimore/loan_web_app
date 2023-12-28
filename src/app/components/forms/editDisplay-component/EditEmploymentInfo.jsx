'use client'

import { useState } from 'react'
import { InputMask } from 'primereact/inputmask'
import { XSquare } from '@phosphor-icons/react'
import DatePicker from 'react-datepicker'
import UsStatesDropdown from '../../ui/UsStatesDropdown'

const EditEmploymentInfo = ({ onEdit, formData, onSave, updateEmploymentInfo }) => {
  const [employmentSelected, setEmploymentSelected] = useState('')
  const [employersName, setEmployersName] = useState('')
  const [employersPhone, setEmployersPhone] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [isCurrentPosition, setIsCurrentPosition] = useState(false)
  const [jobTitle, setJobTitle] = useState('')
  const [jobResponsibilites, setJobResponsibilities] = useState('')
  const [grossMonthlyIncome, setGrossMonthlyIncome] = useState('')
  const [employersAddressOne, setEmployersAddressOne] = useState('')
  const [employersAddressTwo, setEmployersAddressTwo] = useState('')
  const [employersCity, setEmployersCity] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [employersZipcode, setEmployersZipcode] = useState('')

  const handleEmploymentInfoSave = (e) => {
    e.preventDefault()
    const editedEmploymentFormData = {
      employmentSelected,
      employersName,
      employersPhone,
      startDate,
      endDate,
      isCurrentPosition,
      jobTitle,
      jobResponsibilites,
      grossMonthlyIncome,
      employersAddressOne,
      employersAddressTwo,
      employersCity,
      selectedState,
      employersZipcode
    }
    console.log("LATEST UPDATED DATA:", editedEmploymentFormData)
    onSave(editedEmploymentFormData)
    // updateEmploymentInfo(editedEmploymentFormData)
    onEdit()
  }

  const handleOnEmploymentSelect = (value) => {
    setEmploymentSelected(value)
  }

  const handleOnStateSelect = (selectedState) => {
    setSelectedState(selectedState)
    console.log('The state you selected is:', selectedState)
  }

  return (
    <div className="flex flex-wrap gap-6 w-full">
      <div className="flex flex-col border-8 my-4 border-blue-700/50 rounded w-full">
        <header>
          <h1 className="text-center text-[1rem] font-bold tracking-wider bg-blue-700/50 text-emerald-50 px-2 pb-2 border-b border-blue-800">
            Employment Information
          </h1>
        </header>
        <div className="relative space-y-2 py-4 px-2 bg-blue-500/20">
          <div onClick={() => onEdit()} className='absolute z-10 top-2 right-2'><XSquare size={16} color="#3c675c" weight="thin" /></div>
          <div className="flex flex-col space-y-1">
            <h3 className="font-semibold">Employment Status:</h3>
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
          <div className="flex flex-col space-y-1">
            <h3 className="font-semibold">Employer&apos;s Name:</h3>
            <input
              required
              id='employers-name'
              type='text'
              value={employersName}
              onChange={(e) => setEmployersName(e.target.value)}
              className='px-1 outline-none'
            />
          </div>
          <div className="flex flex-col space-y-1">
            <h3 className="font-semibold">Employer&apos;s Phone:</h3>
            <InputMask
              required
              id='employers-phone'
              mask='(999) 999-9999'
              type='tel'
              value={employersPhone}
              onChange={(e) => setEmployersPhone(e.target.value)}
              className='px-1 outline-none'
            />
          </div>
          <div className="flex flex-col space-y-1">
            <h3 className="font-semibold">Start Date:</h3>
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
          <div className="flex flex-col space-y-1">
            <h3 className="font-semibold">End Date:</h3>
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
          <div className="flex gap-2 space-y-1">
            <h3 className="font-semibold">Current Employment:</h3>
            <input
              type='checkbox'
              name='current-position'
              value={isCurrentPosition}
              onChange={(e) => setIsCurrentPosition(!isCurrentPosition)}
              selected
            />
          </div>
          <div className="flex flex-col space-y-1">
            <h3 className="font-semibold">Job Title:</h3>
            <input
              id='job-title'
              type='text'
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className='px-1 outline-none'
            />
          </div>
          <div className="flex flex-col space-y-1">
            <h3 className="font-semibold">Job Responsibilities:</h3>
            <textarea
              id='job-responsibilies'
              rows='5'
              value={jobResponsibilites}
              onChange={(e) => setJobResponsibilities(e.target.value)}
              className='px-1 outline-none'
            >
            </textarea>
          </div>
          <div className="relative flex flex-col space-y-1">
            <h3 className="font-semibold">Gross Monthly Income:</h3>
            <input
              id='gross-monthly-income'
              type='number'
              value={grossMonthlyIncome}
              onChange={(e) => setGrossMonthlyIncome(e.target.value)}
              className='px-1 outline-none'
            />          </div>

          <h2 className='italic underline py-3 text-xl'>Employer&apos;s Address</h2>

          <div className="flex flex-col space-y-1">
            <h3 className="font-semibold">Address One:</h3>
            <input
              required
              id='employers-address-one'
              type='text'
              value={employersAddressOne}
              onChange={(e) => setEmployersAddressOne(e.target.value)}
              className='px-1 outline-none'
            />          </div>
          <div className="flex flex-col space-y-1">
            <h3 className="font-semibold">Address Two:</h3>
            <input
              id='employers-address-two'
              type='text'
              value={employersAddressTwo}
              onChange={(e) => setEmployersAddressTwo(e.target.value)}
              className='px-1 outline-none'
            />          </div>
          <div className="flex flex-col space-y-1">
            <h3 className="font-semibold">City:</h3>
            <input
              required
              id='employers-city'
              type='text'
              value={employersCity}
              onChange={(e) => setEmployersCity(e.target.value)}
              className='px-1 outline-none'
            />          </div>
          <div className="flex flex-col space-y-1">
            <h3 className="font-semibold">State:</h3>
            <UsStatesDropdown handleOnStateSelect={handleOnStateSelect} />
          </div>
          <div className="flex flex-col space-y-1">
            <h3 className="font-semibold">Zipcode:</h3>
            <input
              required
              id='employers-zipcode'
              type='number'
              value={employersZipcode}
              onChange={(e) => setEmployersZipcode(e.target.value)}
              className='px-1 outline-none'
            />
          </div>
          <button
            type='button'
            onClick={handleEmploymentInfoSave}
            className='w-full py-1 px-2 bg-slate-700/70 text-white rounded font-semibold'>Update Employment Information</button>
        </div>
      </div>
    </div>
  )
}

export default EditEmploymentInfo