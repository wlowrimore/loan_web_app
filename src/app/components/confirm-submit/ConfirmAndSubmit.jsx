'use client'

import { useState } from "react";

import DisplayPersonalInfo from "../forms/editDisplay-component/DisplayPersonalInfo";
import DisplayEmploymentInfo from "../forms/editDisplay-component/DisplayEmploymentInfo";
import DisplayFinancialInfo from "../forms/editDisplay-component/DisplayFinancialInfo";
import DisplayLoanDetailsInfo from "../forms/editDisplay-component/DisplayLoanDetailsInfo";

import EditPersonalInfo from "../forms/editDisplay-component/EditPersonalInfo";
import EditEmploymentInfo from "../forms/editDisplay-component/EditEmploymentInfo";
import EditFinancialInfo from "../forms/editDisplay-component/EditFinancialInfo";
import EditLoanDetailsInfo from "../forms/editDisplay-component/EditLoanDetailsInfo";

const ConfirmAndSubmit = ({ formData, onSave }) => {
  const [isPersonalInfoEditable, setIsPersonalInfoEditable] = useState(false)
  const [isEmploymentInfoEditable, setIsEmploymentInfoEditable] = useState(false)
  const [isFinancialInfoEditable, setIsFinancialInfoEditable] = useState(false)
  const [isLoanDetailsInfoEditable, setIsLoanDetailsInfoEditable] = useState(false)

  const handleEditPersonalInfo = () => {
    setIsPersonalInfoEditable(!isPersonalInfoEditable)
  }

  const handleSavePersonalInfo = (editedData) => {
    onSave({
      ...formData,
      personalInfo: {
        ...formData.personalInfo,
        ...editedData,
      }
    });
    handleEditPersonalInfo();
  }

  const handleEditEmploymentInfo = () => {
    setIsEmploymentInfoEditable(!isEmploymentInfoEditable)
  }

  const handleEditFinancialInfo = () => {
    setIsFinancialInfoEditable(!isFinancialInfoEditable)
  }

  const handleLoanDetailsInfo = () => {
    setIsLoanDetailsInfoEditable(!isLoanDetailsInfoEditable)
  }

  // console.log("FORM DATA FROM LOAN REQUEST FORM:", formData);
  // const { personalInfo, employmentInfo, financialInfo, loanDetailsInfo } =
  //   formData;

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
        {isPersonalInfoEditable ? (
          <EditPersonalInfo formData={formData} onSave={onSave} onEdit={handleEditPersonalInfo} />
        ) : (
          <DisplayPersonalInfo formData={formData} onEdit={handleEditPersonalInfo} />
        )}

        {/* EMPLOYMENT INFO */}
        {isEmploymentInfoEditable ? (
          <EditEmploymentInfo />
        ) : (
          <DisplayEmploymentInfo formData={formData} />
        )}

        {/* FINANCIAL INFO */}
        {isFinancialInfoEditable ? (
          <EditFinancialInfo />
        ) : (
          <DisplayFinancialInfo formData={formData} />
        )}

        {/* LOAN DETAILS INFO */}
        {isLoanDetailsInfoEditable ? (
          <EditLoanDetailsInfo />
        ) : (
          <DisplayLoanDetailsInfo formData={formData} />
        )}

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
