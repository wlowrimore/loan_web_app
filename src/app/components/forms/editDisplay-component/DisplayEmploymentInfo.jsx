'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from '/public/eagle-logo.webp'
import { Pencil } from '@phosphor-icons/react'
import { useFormData } from "../../../../../FormDataContext";
// import { useState } from "react";

const DisplayEmploymentInfo = ({ updateFormData, onEdit }) => {
  const { formData } = useFormData()
  const [employmentInfo, setEmploymentInfo] = useState(formData?.employmentInfo)

  useEffect(() => {
    setEmploymentInfo(updateFormData)
    console.log("New Employment Form Data:", updateFormData)
  }, [formData?.employmentInfo])

  return (
    <div className="flex flex-wrap gap-6 w-full">
      <div className="flex flex-col border-8 my-4 border-emerald-700/70 rounded w-full">
        <header>
          <h1 className="text-center text-[1rem] font-bold tracking-wider bg-emerald-700/70 text-emerald-50 px-2 pb-2 border-b border-emerald-800">
            Employment Information
          </h1>
        </header>
        <div className="relative space-y-2 py-4 px-2">
          <div onClick={onEdit} className='absolute z-10 top-2 right-2'><Pencil size={16} color="#3c675c" weight="light" /></div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Employment Status:</h3>
            <p className="text-[1rem] font-normal">
              {employmentInfo?.employmentSelected}
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Employer&apos;s Name:</h3>
            <p className="text-[1rem] font-normal">
              {employmentInfo?.employersName}
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Employer&apos;s Phone:</h3>
            <p className="text-[1rem] font-normal">
              {employmentInfo?.employersPhone}
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Start Date:</h3>
            <p className="text-[1rem] font-normal">
              {employmentInfo?.startDate?.toLocaleDateString()}
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">End Date:</h3>
            <p className="text-[1rem] font-normal">
              {employmentInfo?.endDate || null}
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Current Employment:</h3>
            <p className="text-[1rem] font-normal">{employmentInfo?.isCurrentPosition ? "Yes" : "No"}</p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Job Title:</h3>
            <p className="text-[1rem] font-normal">
              {employmentInfo?.jobTitle}
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Job Responsibilities:</h3>
            <p className="text-[1rem] font-normal">
              {employmentInfo?.jobResponsibilities}
            </p>
          </div>
          <div className="relative flex flex-col">
            <h3 className="font-semibold">Gross Monthly Income:</h3>
            <p className="text-[1rem] font-normal"><span className='text-[.60rem] font-semibold absolute bottom-[.15rem]'>$</span>&nbsp;  {employmentInfo?.grossMonthlyIncome}</p>
          </div>

          <h2 className='italic underline'>Employer&apos;s Address</h2>

          <div className="flex flex-col">
            <h3 className="font-semibold">Address One:</h3>
            <p className="text-[1rem] font-normal">{employmentInfo?.employersAddressOne}</p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Address Two:</h3>
            <p className="text-[1rem] font-normal">{employmentInfo?.employersAddressTwo}</p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">City:</h3>
            <p className="text-[1rem] font-normal">{employmentInfo?.employersCity}</p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">State:</h3>
            <p className="text-[1rem] font-normal">{employmentInfo?.selectedState}</p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Zipcode:</h3>
            <p className="text-[1rem] font-normal">{employmentInfo?.employersZipcode}</p>
          </div>
          <div className="absolute bottom-28 -left-8 -z-1 w-[17.8rem]">
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

export default DisplayEmploymentInfo