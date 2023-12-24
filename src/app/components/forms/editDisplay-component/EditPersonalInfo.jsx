'use client'

import { useState } from "react"
import Image from "next/image";
import Logo from "public/eagle-logo.webp";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { InputMask } from 'primereact/inputmask'
import { XSquare } from '@phosphor-icons/react'
import UsStatesDropdown from "../../ui/UsStatesDropdown"

const EditPersonalInfo = ({ onEdit, formData, onSave }) => {  
  const [fullLegalName, setFullLegalName] = useState('')
  const [addressOne, setAddressOne] = useState('')
  const [addressTwo, setAddressTwo] = useState(null)
  const [city, setCity] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [maritalSelected, setMaritalSelected] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [isOpen, setIsOpen] = useState(false);

  const [personalData, setPersonalData] = useState({formData});
  const dateOfBirth = startDate
  const maritalStatus = maritalSelected
  
  const handlePersonalInfoSave = (e) => {
    e.preventDefault()
    const editedPersonalFormData = {
      fullLegalName,
      addressOne,
      addressTwo,
      city,
      zipcode,
      dateOfBirth,
      maritalStatus,
      selectedState,
      phone,
      email,
    }
    console.log("Edited Data:", editedPersonalFormData)
    onSave(editedPersonalFormData)
    onEdit();
  }

  const handleOnStateSelect = (selectedState) => {
    setSelectedState(selectedState)
    console.log('The state you selected is:', selectedState)
  }

  const handleOnMaritalSelect = (value) => {
    setMaritalSelected(value)
  }

  return (
    <div className="flex flex-wrap gap-6 w-full">
      <div className="flex flex-col border-8 my-4 border-blue-700/50 rounded w-full">
        <header>
          <h1 className="text-center text-[1rem] font-bold tracking-wider bg-blue-700/50 text-emerald-50 px-2 pb-2 border-b border-blue-800">
            Personal Information
          </h1>
        </header>
        <div className="relative space-y-2 py-4 px-2 bg-blue-500/20">
          <div onClick={() => onEdit()} className='absolute z-10 top-2 right-2'><XSquare size={16} color="#3c675c" weight="thin" /></div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Full Legal Name:</h3>
            <input
              required
              id='full-legal-name'
              type='text'
              value={fullLegalName}
              onChange={(e) => setFullLegalName(e.target.value)}
              className='px-2 outline-none'
            />
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Date of Birth:</h3>
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
          <div className="flex flex-col">
            <h3 className="font-semibold">Marital Status:</h3>
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
          <div className="flex flex-col">
            <h3 className="font-semibold">Address One:</h3>
            <input
              required
              id='address-one'
              type='text'
              value={addressOne}
              onChange={(e) => setAddressOne(e.target.value)}
              className='px-2 outline-none'
            />
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Address Two:</h3>
            <input
              id='address-two'
              type='text'
              value={addressTwo}
              onChange={(e) => setAddressTwo(e.target.value)}
              className='px-2 outline-none'
            />
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">City:</h3>
            <input
              required
              id='city'
              type='text'
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className='px-2 outline-none'
            />
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">State:</h3>
            <UsStatesDropdown handleOnStateSelect={handleOnStateSelect} />
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Zipcode:</h3>
            <input
              required
              id='zipcode'
              type='number'
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
              className='pfullLegalNamex-2 outline-none'
            />
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Phone:</h3>
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
          <div className="flex flex-col">
            <h3 className="font-semibold">Email:</h3>
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
          {/* <div className="absolute bottom-14 -left-8 -z-3 w-[17.8rem]">
            <Image
              src={Logo}
              alt="eagle-silhouette"
              width={300}
              height={300}
              className="flex p-2 items-center justify-center opacity-10"
            />
          </div> */}
          <button 
            type='button' 
            onClick={handlePersonalInfoSave} 
            className='w-full py-1 px-2 bg-slate-700/70 text-white rounded font-semibold'>Update Personal Information</button>
        </div>
      </div>
    </div>
  )
}

export default EditPersonalInfo