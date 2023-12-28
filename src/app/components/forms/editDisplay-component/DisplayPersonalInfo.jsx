'use client'

import { useState, useEffect } from 'react';
import Image from "next/image";
import Logo from "/public/eagle-logo.webp";
import { Pencil } from '@phosphor-icons/react'
import { useFormData } from '../../../../../FormDataContext';

const DisplayPersonalInfo = ({ onEdit, updateFormData }) => {
  const { formData } = useFormData()
  const [personalInfo, setPersonalInfo] = useState(formData?.personalInfo)
  // const personalInfo = formData?.personalInfo

  useEffect(() => {
    setPersonalInfo(updateFormData)
    console.log("New FormData:", updateFormData)
  }, [formData?.personalInfo])

  return (
    <div className="flex flex-wrap gap-6 w-full">
      <div className="flex flex-col border-8 my-4 border-emerald-700/70 rounded w-full">
        <header>
          <h1 className="text-center text-[1rem] font-bold tracking-wider bg-emerald-700/70 text-emerald-50 px-2 pb-2 border-b border-emerald-800">
            Personal Information
          </h1>
        </header>
        <div className="relative space-y-2 py-4 px-2">
          <div onClick={onEdit} className='absolute z-10 top-2 right-2'><Pencil size={16} color="#3c675c" weight="light" /></div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Full Legal Name:</h3>
            <p className="text-[1rem] font-normal">
              {personalInfo?.fullLegalName}
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Date of Birth:</h3>
            <p className="text-[1rem] font-normal">
              {personalInfo?.dateOfBirth?.toLocaleDateString()}
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Marital Status:</h3>
            <p className="text-[1rem] font-normal capitalize">
              {personalInfo?.maritalStatus}
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Address One:</h3>
            <p className="text-[1rem] font-normal">
              {personalInfo?.addressOne}
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Address Two:</h3>
            <p className="text-[1rem] font-normal">
              {personalInfo?.addressTwo}
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">City:</h3>
            <p className="text-[1rem] font-normal">{personalInfo?.city}</p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">State:</h3>
            <p className="text-[1rem] font-normal">
              {personalInfo?.selectedState}
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Zipcode:</h3>
            <p className="text-[1rem] font-normal">
              {personalInfo?.zipcode}
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Phone:</h3>
            <p className="text-[1rem] font-normal">{personalInfo?.phone}</p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Email:</h3>
            <p className="text-[1rem] font-normal">{personalInfo?.email}</p>
          </div>
          <div className="absolute bottom-14 -left-8 -z-1 w-[17.8rem]">
            <Image
              src={Logo}
              alt="eagle-silhouette"
              width={300}
              height={300}
              className="flex p-2 items-center justify-center opacity-10"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisplayPersonalInfo