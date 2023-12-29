'use client'

import { useState, useEffect } from "react"
import Image from "next/image";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { InputMask } from 'primereact/inputmask'
import { XSquare } from '@phosphor-icons/react'
import UsStatesDropdown from "../../ui/UsStatesDropdown"
import { useFormData } from "../../../../../FormDataContext";

const EditPersonalInfo = ({ onEdit, formData, onSave }) => {
  const [personalData, setPersonalData] = useState({
    fullLegalName: formData?.personalInfo?.fullLegalName || '',
    addressOne: formData?.personalInfo?.addressOne || '',
    addressTwo: formData?.personalInfo?.addressTwo || '',
    city: formData?.personalInfo?.city || '',
    zipcode: formData?.personalInfo?.zipcode || '',
    dateOfBirth: new Date(formData?.personalInfo?.dateOfBirth) || new Date(),
    maritalSelected: formData?.personalInfo?.maritalStatus || '',
    selectedState: formData?.personalInfo?.selectedState || '',
    phone: formData?.personalInfo?.phone || '',
    email: formData?.personalInfo?.email || '',
  });
  // const { formData, updateFormData } = useFormData();

  const {
    fullLegalName,
    addressOne,
    addressTwo,
    city,
    zipcode,
    startDate,
    maritalSelected,
    selectedState,
    phone,
    email,
  } = personalData;

  const handleOnStateSelect = (selectedState) => {
    setPersonalData((prevData) => ({ ...prevData, selectedState }));
  };

  const handleOnMaritalSelect = (value) => {
    setPersonalData((prevData) => ({ ...prevData, maritalSelected: value }));
  };

  const handlePersonalInfoSave = (e) => {
    e.preventDefault()

    const editedPersonalFormData = {
      fullLegalName,
      addressOne,
      addressTwo,
      city,
      zipcode,
      dateOfBirth: startDate,
      maritalStatus: maritalSelected,
      selectedState,
      phone,
      email,
    };
    onSave(editedPersonalFormData)
    onEdit();

    console.log("editedPersonalFormData IN EDIT PERSONAAL INFO:", editedPersonalFormData)
  }


  useEffect(() => {
    const dateOfBirthString = formData?.personalInfo?.dateOfBirth;
    console.log('dateOfBirthString:', dateOfBirthString);

    // Set a default date if dateOfBirthString is undefined
    const defaultDate = new Date(); // You can adjust this default date as needed

    setPersonalData((prevData) => ({
      ...prevData,
      ...formData?.personalInfo,
      startDate: dateOfBirthString ? new Date(dateOfBirthString) : defaultDate,
    }));

    const dateOfBirth = dateOfBirthString ? new Date(dateOfBirthString) : defaultDate;
    console.log('Parsed dateOfBirth:', dateOfBirth);
  }, [formData]);

  return (
    <div className="flex flex-wrap gap-6 w-full">
      <div className="flex flex-col border-8 my-4 border-blue-700/50 rounded w-full">
        <header>
          <h1 className="text-center text-[1rem] font-bold tracking-wider bg-blue-700/50 text-emerald-50 px-2 pb-2 border-b border-blue-800">
            &#40;Edit&#41;&nbsp;Personal Information
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
              value={personalData.fullLegalName}
              onChange={(e) => setPersonalData((prevData) => ({ ...prevData, fullLegalName: e.target.value }))}
              className='px-2 outline-none'
            />
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Date of Birth:</h3>
            <DatePicker
              required
              selected={startDate}
              value={personalData.startDate}
              onChange={(e) => setPersonalData((prevData) => ({ ...prevData, dateOfBirth: personalData.startDate }))}
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
              onChange={(e) => setPersonalData((prevData) => ({ ...prevData, addressOne: e.target.value }))}
              className='px-2 outline-none'
            />
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Address Two:</h3>
            <input
              id='address-two'
              type='text'
              value={addressTwo}
              onChange={(e) => setPersonalData((prevData) => ({ ...prevData, addressTwo: e.target.value }))}
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
              onChange={(e) => setPersonalData((prevData) => ({ ...prevData, city: e.target.value }))}
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
              onChange={(e) => setPersonalData((prevData) => ({ ...prevData, zipcode: e.target.value }))}
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
              onChange={(e) => setPersonalData((prevData) => ({ ...prevData, phone: e.target.value }))}
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
              onChange={(e) => setPersonalData((prevData) => ({ ...prevData, email: e.target.value }))}
              className='px-2 outline-none'
            />
          </div>
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