'use client'

import { useState } from 'react'
import DatePicker from 'react-datepicker'

import { InputMask } from 'primereact/inputmask';
import "react-datepicker/dist/react-datepicker.css";
import GIDPopup from '../../ui/GIDPopup';
import UsStatesDropdown from '../../ui/UsStatesDropdown';

const PersonalInfo = ({ onClick }) => {
  const [fullLegalName, setFullLegalName] = useState('')
  const [addressOne, setAddressOne] = useState('')
  const [addressTwo, setAddressTwo] = useState(null)
  const [city, setCity] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [ssn, setSsn] = useState('')
  const [maritalSelected, setMaritalSelected] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [isOpen, setIsOpen] = useState(false);
  const [citizenshipCheckedYes, setCitizenshipCheckedYes] = useState(false)
  const [citizenshipCheckedNo, setCitizenshipCheckedNo] = useState(false)
  const [isCitizen, setIsCitizen] = useState(null)

  // const personalFormData = {
  //   fullLegalName,
  //   addressOne,
  //   addressTwo,
  //   city,
  //   zipcode,
  //   startDate,
  //   ssn,
  //   maritalSelected,
  //   selectedState,
  //   phone,
  //   email
  // }

  const handleOnStateSelect = (selectedState) => {
    setSelectedState(selectedState)
    console.log('The state you selected is:', selectedState)
  }

  const handleOnMaritalSelect = (value) => {
    setMaritalSelected(value)
  }

  const handleCitizenshipCheckBoxChange = (citizenshipCheckboxType) => {
    if (citizenshipCheckboxType === 'yes') {
      setCitizenshipCheckedYes(true)
      setCitizenshipCheckedNo(false)
      setIsCitizen(true)
    } else if (citizenshipCheckboxType === 'no') {
      setCitizenshipCheckedNo(true)
      setCitizenshipCheckedYes(false)
      setIsCitizen(false)
    } else {
      setCitizenshipCheckedYes(false)
      setCitizenshipCheckedNo(false)
      setIsCitizen(null)
    }
  }

  return (
    <div>
      <h1 className='text-2xl font-bold text-white'>Personal Information</h1>
      <div className='flex flex-col justify-between bg-emerald-100 py-1 px-2 border border-emerald-800 rounded mt-2 text-xs text-emerald-950'>
        <label htmlFor='citizenship' className='text-emerald-950 text-lg font-semibold tracking-wide'>Do you have proof of U.S. citizenship?</label>
        <div className='flex justify-between my-2'>
          <ul className='flex flex-col'>
            <li>Birth Certificate</li>
            <li>U.S. Passport</li>
          </ul>
          <ul className='flex flex-col'>
            <li>Form N-560/561</li>
            <li>Form N-550/551</li>
          </ul>
          <ul className='flex flex-col'>
            <li>CRBA</li>
            <li>Early Public Records</li>
          </ul>
        </div>

        <div className='flex gap-4 my-2 text-md text-emerald-800 font-bold'>
          <div className='flex gap-1'>
            <input
              type='checkbox'
              checked={citizenshipCheckedYes}
              onChange={() => { handleCitizenshipCheckBoxChange('yes') }}
              className='w-4'
            />
            Yes
          </div>
          <div className='flex gap-1'>
            <input
              type='checkbox'
              checked={citizenshipCheckedNo}
              onChange={() => { handleCitizenshipCheckBoxChange('no') }}
              className='w-4'
            />
            No
          </div>
        </div>
      </div>
      {isCitizen === true ? (
        <form id='personal' className='flex flex-col py-4 space-y-4 w-full'>
          <div className='flex flex-col'>
            <label htmlFor='full-legal-name' className='text-white font-semibold tracking-wide'>Full Legal Name&nbsp;*</label>
            <input
              required
              id='full-legal-name'
              type='text'
              value={fullLegalName}
              onChange={(e) => setFullLegalName(e.target.value)}
              className='px-2 outline-none'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='date-of-birth' className='text-white font-semibold tracking-wide'>Date of Birth&nbsp;*</label>
            <DatePicker
              required
              selected={startDate}
              value={startDate}
              onChange={(date) => setStartDate(date)}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              className='outline-none px-2'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="ssn" className="text-white font-semibold tracking-wide">
              SSN / <span onClick={(e) => setIsOpen(true)} className='underline cursor-pointer'>GID?</span>&nbsp;*</label>
            <InputMask
              required
              id="ssn"
              mask="999-99-9999"
              value={ssn}
              onChange={(e) => setSsn(e.target.value)}
              placeholder='000-00-0000'
              className='px-2 outline-none'
            />
          </div>
          {isOpen && (
            <div>
              <GIDPopup setIsOpen={setIsOpen} />
            </div>
          )}
          <div className='flex flex-col'>
            <label htmlFor='marital-status' className='text-white font-semibold tracking-wide'>Marital Status&nbsp;*</label>
            <select
              required
              value={maritalSelected}
              onChange={(e) => handleOnMaritalSelect(e.target.value)}
              name='marital-status'
              className='w-fit px-2 border border-emerald-800 rounded outline-none bg-white'>
              <option value='status'>----</option>
              <option value='single'>Single</option>
              <option value='married'>Married</option>
              <option value='other'>Common Law</option>
              <option value='separated'>Separated</option>
              <option value='widowed'>Widowed</option>
            </select>
          </div>

          <hr />

          <div className='flex flex-col'>
            <label htmlFor='address-one' className='text-white font-semibold tracking-wide'>Address One&nbsp;*</label>
            <input
              required
              id='address-one'
              type='text'
              value={addressOne}
              onChange={(e) => setAddressOne(e.target.value)}
              className='px-2 outline-none'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='address-two' className='text-white font-semibold tracking-wide'>Address Two&nbsp;&#40;optional&#41;</label>
            <input
              id='address-two'
              type='text'
              value={addressTwo}
              onChange={(e) => setAddressTwo(e.target.value)}
              className='px-2 outline-none'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='city' className='text-white font-semibold tracking-wide'>City&nbsp;*</label>
            <input
              required
              id='city'
              type='text'
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className='px-2 outline-none'
            />
          </div>

          <UsStatesDropdown handleOnStateSelect={handleOnStateSelect} />

          <div className='flex flex-col'>
            <label htmlFor='zipcode' className='text-white font-semibold tracking-wide'>Zipcode&nbsp;*</label>
            <input
              required
              id='zipcode'
              type='number'
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
              className='px-2 outline-none'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='phone' className='text-white font-semibold tracking-wide'>Contact Number&nbsp;*</label>
            <InputMask
              required
              id='phone'
              mask='(999) 999-9999'
              placeholder='(123) 456-7890'
              type='tel'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className='px-2 outline-none'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='email' className='text-white font-semibold tracking-wide'>Email&nbsp;*</label>
            <input
              required
              id='email'
              type='email'
              value={email}
              placeholder='hello@email.com'
              onChange={(e) => setEmail(e.target.value)}
              className='px-2 outline-none'
            />
          </div>
          <button onClick={onClick} className='w-full py-1 px-2 bg-emerald-200 rounded font-semibold'>Continue to Employment</button>
        </form>
      ) : isCitizen === false ? (
        <div className='bg-emerald-100 border border-emerald-800 rounded p-2 mt-1'>
          <h2 className='text-sm text-red-700'>Our apologies.  You must be a U.S. citizen to obtain a loan with Ascension Lending Group.</h2>
        </div>
      ) : (
        null
      )}
    </div>
  )
}

export default PersonalInfo