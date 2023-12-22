import Image from "next/image";
import Logo from "public/eagle-logo.webp";
import { Pencil } from '@phosphor-icons/react'
import TodaysDate from "../ui/TodaysDate";

const ConfirmAndSubmit = ({ formData, onSave }) => {
  console.log("FORM DATA FROM LOAN REQUEST FORM:", formData);
  const { personalInfo, employmentInfo, financialInfo, loanDetailsInfo } =
    formData;
  return (
    <>
      <div className="flex flex-col justify-between bg-emerald-100 py-1 px-2 border border-emerald-800 rounded mt-2 text-xs text-emerald-950">
        <h1 className="text-2xl font-bold text-emerald-800 pt-4">
          Let&apos;s Review
        </h1>
        <p className="flex flex-wrap text-[1rem] pb-4">
          Take a moment to carefully review your data before submitting your
          application. Make any edits you need on this page. The information you
          submit is final.
        </p>
        <hr />
        {/* PERSONAL INFO */}
        <div className="flex flex-wrap gap-6 w-full">
          <div className="flex flex-col border-8 my-4 border-emerald-700/70 rounded w-full">
            <header>
              <h1 className="text-center text-[1rem] font-bold tracking-wider bg-emerald-700/70 text-emerald-50 px-2 pb-2 border-b border-emerald-800">
                Personal Information
              </h1>
            </header>
            <div className="relative space-y-2 py-4 px-2">
              <div className='absolute z-10 top-2 right-2'><Pencil size={16} color="#3c675c" weight="light" /></div>
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
                <p className="text-[1rem] font-normal">
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

        {/* EMPLOYMENT INFO */}
        <div className="flex flex-wrap gap-6 w-full">
          <div className="flex flex-col border-8 my-4 border-emerald-700/70 rounded w-full">
            <header>
              <h1 className="text-center text-[1rem] font-bold tracking-wider bg-emerald-700/70 text-emerald-50 px-2 pb-2 border-b border-emerald-800">
                Employment Information
              </h1>
            </header>
            <div className="relative space-y-2 py-4 px-2">
              <div className='absolute z-10 top-2 right-2'><Pencil size={16} color="#3c675c" weight="light" /></div>
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

        {/* FINANCIAL INFO */}
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

        {/* LOAN DETAILS INFO */}
        <div className="flex flex-wrap gap-6 w-full">
          <div className="flex flex-col border-8 my-4 border-emerald-700/70 rounded w-full">
            <header>
              <h1 className="text-center text-[1rem] font-bold tracking-wider bg-emerald-700/70 text-emerald-50 px-2 pb-2 border-b border-emerald-800">
                Loan Request Details
              </h1>
            </header>
            <div className="relative space-y-2 py-4 px-2">
              <div className='absolute z-10 top-2 right-2'><Pencil size={16} color="#3c675c" weight="light" /></div>
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
                <p className="text-[1rem] font-normal">{loanDetailsInfo.otherSelectedDesc}
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
        <div className="mb-4">
          <button
            type="button"
            onClick={() => onSave()}
            className="w-full py-2 px-2 text-[1rem] text-emerald-50 bg-emerald-700/70 rounded font-semibold"
          >
            Submit Loan Application
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfirmAndSubmit;
