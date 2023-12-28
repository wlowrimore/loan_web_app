'use client'

import { useState } from "react";

import DisplayPersonalInfo from "../forms/editDisplay-component/DisplayPersonalInfo";
import EditPersonalInfo from "../forms/editDisplay-component/EditPersonalInfo";
import { useFormData } from "../../../../FormDataContext";

const ConfirmAndSubmit = ({ onSave }) => {
  const { formData, updateFormData } = useFormData();
  const [editedPersonalData, setEditedPersonalData] = useState(formData.personalInfo)

  console.log("formData form ConfirmAndSubmit.jsx:", formData)

  const [isPersonalInfoEditable, setIsPersonalInfoEditable] = useState(false)
  const [personalData, setPersonalData] = useState(formData.personalInfo)

  const handleEditPersonalInfo = () => {
    setIsPersonalInfoEditable(!isPersonalInfoEditable)
  }

  const handlePersonalInfoUpdate = (editedData) => {
    setEditedPersonalData(editedData)
    console.log("EDITED DATA FROM CONFIRM AND SUBMIT:", editedData)
  }

  const handleSave = () => {
    // Validate and convert dateOfBirth to a valid Date object
    const dateOfBirth = parseDate(personalData.dateOfBirth);

    const editedData = {
      personalInfo: {
        ...personalData,
        dateOfBirth,
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
        <p className="flex flex-wrap text-[1rem] pb-4">
          Take a moment to carefully review your data before submitting your
          application. Make any edits you need on this page. The information you
          submit is final.
        </p>

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
        {/* {isEmploymentInfoEditable ? (
          <EditEmploymentInfo
            formData={formData.employmentInfo}
            onSave={handleSaveEmploymentInfo}
            onEdit={handleEditEmploymentInfo} />
        ) : (
          <DisplayEmploymentInfo formData={formData.employmentInfo} onEdit={handleEditEmploymentInfo} />
        )} */}

        {/* FINANCIAL INFO */}
        {/* {isFinancialInfoEditable ? (
          <EditFinancialInfo />
        ) : (
          <DisplayFinancialInfo formData={formData} />
        )} */}

        {/* LOAN DETAILS INFO */}
        {/* {isLoanDetailsInfoEditable ? (
          <EditLoanDetailsInfo />
        ) : (
          <DisplayLoanDetailsInfo formData={formData} />
        )} */}

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
