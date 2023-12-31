'use client'

import { useState } from "react";

import DisplayPersonalInfo from "../forms/editDisplay-component/DisplayPersonalInfo";
import EditPersonalInfo from "../forms/editDisplay-component/EditPersonalInfo";

import DisplayEmploymentInfo from "../forms/editDisplay-component/DisplayEmploymentInfo";
import EditEmploymentInfo from "../forms/editDisplay-component/EditEmploymentInfo";

import DisplayFinancialInfo from "../forms/editDisplay-component/DisplayFinancialInfo";
import EditFinancialInfo from "../forms/editDisplay-component/EditFinancialInfo";

import DisplayLoanDetailsInfo from "../forms/editDisplay-component/DisplayLoanDetailsInfo";
import EditLoanDetailsInfo from "../forms/editDisplay-component/EditLoanDetailsInfo";

import { useFormData } from "../../../../FormDataContext";

const ConfirmAndSubmit = ({ onSave }) => {
  const { formData, updateFormData } = useFormData();
  const [editedPersonalData, setEditedPersonalData] = useState(formData.personalInfo)
  const [editedEmploymentData, setEditedEmploymentData] = useState(formData.employmentInfo)
  const [editedFinancialData, setEditedFinancialData] = useState(formData.financialInfo)
  const [editedLoanDetailsData, setEditedLoanDetailsData] = useState(formData.loanDetailsInfo)

  console.log("formData form ConfirmAndSubmit.jsx:", formData)

  const [isPersonalInfoEditable, setIsPersonalInfoEditable] = useState(false)
  const [personalData, setPersonalData] = useState(formData.personalInfo)

  const [isEmploymentInfoEditable, setIsEmploymentInfoEditable] = useState(false)
  const [employmentData, setEmploymentData] = useState(formData.employmentInfo)

  const [isFinancialInfoEditable, setIsFinancialInfoEditable] = useState(false)
  const [financialData, setFinancialData] = useState(formData.financialInfo)

  const [isLoanDetailsInfoEditable, setIsLoanDetailsInfoEditable] = useState(false)
  const [loanDetailsData, setLoanDetailsData] = useState(formData.loanDetailsInfo)

  const handleEditPersonalInfo = () => {
    setIsPersonalInfoEditable(!isPersonalInfoEditable)
  }

  const handlePersonalInfoUpdate = (editedData) => {
    setEditedPersonalData(editedData)
    console.log("EDITED DATA FROM CONFIRM AND SUBMIT:", editedData)
  }

  const handleEditEmploymentInfo = () => {
    setIsEmploymentInfoEditable(!isEmploymentInfoEditable)
  }

  const handleEmploymentInfoUpdate = (editedData) => {
    setEditedEmploymentData(editedData)
  }

  const handleEditFinancialInfo = () => {
    setIsFinancialInfoEditable(!isFinancialInfoEditable)
  }

  const handleFinancialInfoUpdate = (editedData) => {
    setEditedFinancialData(editedData)
  }

  const handleEditLoanDetailsInfo = () => {
    setIsLoanDetailsInfoEditable(!isLoanDetailsInfoEditable)
  }

  const handleLoanDetailsInfoUpdate = (editedData) => {
    setEditedLoanDetailsData(editedData)
  }

  const handleSave = () => {
    // Validate and convert dateOfBirth to a valid Date object
    const dateOfBirth = parseDate(personalData.dateOfBirth);

    const editedData = {
      personalInfo: {
        ...personalData,
        dateOfBirth,
      },
      employmentInfo: {
        ...employmentData,
      },
      financialInfo: {
        ...financialData,
      },
      loanDetailsInfo: {
        ...loanDetailsData,
      },
    };

    updateFormData(editedData);

    onSave(editedData);
  }

  return (
    <>
      <div className="flex flex-col justify-between bg-emerald-100 py-1 px-2 border border-emerald-800 rounded mt-2 text-xs text-emerald-950">
        <h1 className="text-2xl font-bold text-emerald-800 pt-4">
          Let&apos;s Review
        </h1>
        <ul className="flex flex-wrap text-[1rem] pb-3">
          Take a moment to carefully review your entered information before submitting your
          application. Make any edits needed on this page. The information you
          submit is final.
        </ul>

        <hr />

        {/* PERSONAL INFO */}
        {isPersonalInfoEditable ? (
          <EditPersonalInfo
            formData={formData}
            onSave={handlePersonalInfoUpdate}
            onEdit={handleEditPersonalInfo} />
        ) : (
          <DisplayPersonalInfo updateFormData={editedPersonalData} onEdit={handleEditPersonalInfo} />
        )}

        {/* EMPLOYMENT INFO */}
        {isEmploymentInfoEditable ? (
          <EditEmploymentInfo
            formData={formData}
            onSave={handleEmploymentInfoUpdate}
            onEdit={handleEditEmploymentInfo} />
        ) : (
          <DisplayEmploymentInfo updateFormData={editedEmploymentData} onEdit={handleEditEmploymentInfo} />
        )}

        {/* FINANCIAL INFO */}
        {isFinancialInfoEditable ? (
          <EditFinancialInfo
            formData={formData}
            onSave={handleFinancialInfoUpdate}
            onEdit={handleEditFinancialInfo} />
        ) : (
          <DisplayFinancialInfo updateFormData={editedFinancialData} onEdit={handleEditFinancialInfo} />
        )}

        {/* LOAN DETAILS INFO */}
        {isLoanDetailsInfoEditable ? (
          <EditLoanDetailsInfo
            formData={formData}
            onSave={handleLoanDetailsInfoUpdate}
            onEdit={handleEditLoanDetailsInfo} />
        ) : (
          <DisplayLoanDetailsInfo updateFormData={editedLoanDetailsData} onEdit={handleEditLoanDetailsInfo} />
        )}

        <div className="mb-4">
          <button
            type="button"
            onClick={handleSave}
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
