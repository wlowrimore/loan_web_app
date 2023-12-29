'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "/public/eagle-logo.webp";
import { Pencil } from '@phosphor-icons/react'
import TodaysDate from "../../ui/TodaysDate";
import { useFormData } from "../../../../../FormDataContext";

const DisplayLoanDetailsInfo = ({ onEdit, updateFormData }) => {
  const { formData } = useFormData()
  const [loanDetailsInfo, setLoanDetailsInfo] = useState(formData?.loanDetailsInfo)

  useEffect(() => {
    setLoanDetailsInfo(updateFormData)
    console.log("New Loan Details Form Data:", updateFormData)
  }, [formData?.loanDetailsInfo])

  return (
    <div className="flex flex-wrap gap-6 w-full">
      <div className="flex flex-col border-8 my-4 border-emerald-700/70 rounded w-full">
        <header>
          <h1 className="text-center text-[1rem] font-bold tracking-wider bg-emerald-700/70 text-emerald-50 px-2 pb-2 border-b border-emerald-800">
            Loan Request Details
          </h1>
        </header>
        <div className="relative space-y-2 py-4 px-2">
          <div onClick={onEdit} className='absolute z-10 top-2 right-2'><Pencil size={16} color="#3c675c" weight="light" /></div>
          <div className="relative flex flex-col">
            <h3 className="font-semibold">Loan Amount Requested:</h3>
            <p className="text-[1rem] font-normal"><span className='text-[.60rem] font-semibold absolute bottom-[.15rem]'>$</span>&nbsp;  {loanDetailsInfo.loanAmountRequested}
            </p>
          </div>
          <div className="relative flex flex-col">
            <h3 className="font-semibold">Reason for Loan:</h3>
            <p className="text-[1rem] font-normal">{loanDetailsInfo.loanPurposeSelected}
            </p>
          </div>
          <div className="relative flex flex-col">
            <h3 className="font-semibold">Reason if Other:</h3>
            <p className="text-[0.9rem] font-normal">{loanDetailsInfo.otherSelectedDesc}
            </p>
          </div>
          <div className="relative flex flex-col">
            <h3 className="font-semibold">Loan Term Length:</h3>
            <p className="text-[1rem] font-normal">{loanDetailsInfo.termLengthSelected}
            </p>
          </div>
          <div className="relative flex flex-col">
            <h3 className="font-semibold">Consent for Credit Check:</h3>
            <p className="text-[1rem] font-normal">{loanDetailsInfo.isConsentChecked ? "Yes" : "No"}
            </p>
          </div>
          <div className="relative flex flex-col">
            <h3 className="font-semibold">Applicant&apos;s Digital Signature:</h3>
            <p className="text-[1rem] font-normal">{loanDetailsInfo.applicantSignature}</p>
          </div>
          <div className="relative flex flex-col">
            <h3 className="font-semibold">Date of Signature:</h3>
            <p className="text-[1rem] font-normal -ml-[0.3rem]"><TodaysDate />
            </p>
          </div>
          <div className="absolute bottom-0 -left-8 -z-1 w-[17.8rem]">
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

export default DisplayLoanDetailsInfo