import Image from "next/image";
import Logo from "public/eagle-logo.webp";
import { Pencil } from '@phosphor-icons/react'

const DisplayFinancialInfo = ({ formData }) => {
  const { financialInfo } = formData;
  return (
    <div className="flex flex-wrap gap-6 w-full">
      <div className="flex flex-col border-8 my-4 border-emerald-700/70 rounded w-full">
        <header>
          <h1 className="text-center text-[1rem] font-bold tracking-wider bg-emerald-700/70 text-emerald-50 px-2 pb-2 border-b border-emerald-800">
            Financial Information
          </h1>
        </header>
        <div className="relative space-y-2 py-4 px-2">
          <div className='absolute z-10 top-2 right-2'><Pencil size={16} color="#3c675c" weight="light" /></div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Housing Type:</h3>
            <p className="text-[1rem] font-normal">
              {financialInfo?.housingTypeSelected}
            </p>
          </div>
          <div className="relative flex flex-col">
            <h3 className="font-semibold">Monthly Housing Payment:</h3>
            <p className="text-[1rem] font-normal"><span className='text-[.60rem] font-semibold absolute bottom-[.15rem]'>$</span>&nbsp;  {financialInfo?.housingMonthlyPayment}
            </p>
          </div>
          <div className="relative flex flex-col">
            <h3 className="font-semibold">Monthly Credit Card Debt:</h3>
            <p className="text-[1rem] font-normal"><span className='text-[.60rem] font-semibold absolute bottom-[.15rem]'>$</span>&nbsp;  {financialInfo?.ccMonthlyDebt}
            </p>
          </div>
          <div className="relative flex flex-col">
            <h3 className="font-semibold">Montly Auto Debt:</h3>
            <p className="text-[1rem] font-normal"><span className='text-[.60rem] font-semibold absolute bottom-[.15rem]'>$</span>&nbsp;  {financialInfo?.autoMonthlyDebt}
            </p>
          </div>
          <div className="relative flex flex-col">
            <h3 className="font-semibold">Monthly Student Loans Debt:</h3>
            <p className="text-[1rem] font-normal"><span className='text-[.60rem] font-semibold absolute bottom-[.15rem]'>$</span>&nbsp;  {financialInfo?.studentLoansMonthlyDebt}
            </p>
          </div>
          <div className="relative flex flex-col">
            <h3 className="font-semibold">Monthly Medical Debt:</h3>
            <p className="text-[1rem] font-normal"><span className='text-[.60rem] font-semibold absolute bottom-[.15rem]'>$</span>&nbsp;  {financialInfo?.medicalMonthlyDebt}</p>
          </div>
          <div className="relative flex flex-col">
            <h3 className="font-semibold">Monthly IRS Debt:</h3>
            <p className="text-[1rem] font-normal"><span className='text-[.60rem] font-semibold absolute bottom-[.15rem]'>$</span>&nbsp;  {financialInfo?.irsMonthlyDebt}
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Bank Name:</h3>
            <p className="text-[1rem] font-normal">
              {financialInfo?.bankName}
            </p>
          </div>
          <div className="relative flex flex-col">
            <h3 className="font-semibold">Bank Account Type:</h3>
            <p className="text-[1rem] font-normal">  {financialInfo?.bankAccountTypeSelected}</p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Account Number:</h3>
            <p className="text-[1rem] font-normal">{financialInfo?.bankAccountNumber}</p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Routing Number:</h3>
            <p className="text-[1rem] font-normal">{financialInfo?.bankRoutingNumber}</p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Assets:</h3>
            <p className="text-[1rem] font-normal">{financialInfo?.assetsDesc}</p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Liabilities/Debts:</h3>
            <p className="text-[1rem] font-normal">{financialInfo?.liabilitiesDesc}</p>
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

export default DisplayFinancialInfo