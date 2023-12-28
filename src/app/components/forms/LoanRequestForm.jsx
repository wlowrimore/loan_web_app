"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import PersonalInfoForm from "./loan-form-components/PersonalInfoForm";
import EmploymentInfoForm from "./loan-form-components/EmploymentInfoForm";
import FinancialInfoForm from "./loan-form-components/FinancialInfoForm";
import LoanDetailsInfoForm from "./loan-form-components/LoanDetailsForm";
import Submitted from "../Submitted";
import TimelineComponent from "../ui/TimelineComponent";
import ConfirmAndSubmit from "../confirm-submit/ConfirmAndSubmit";
import { useFormData } from "../../../../FormDataContext";

const LoanRequestForm = () => {
  const { formData, updateFormData } = useFormData();
  const { personalInfo, employmentInfo, financialInfo, loanDetailsInfo } = formData

  const [isPersonalInfoCompleted, setIsPersonalInfoCompleted] = useState(false);
  const [isEmploymentInfoCompleted, setIsEmploymentInfoCompleted] =
    useState(false);
  const [isFinancialInfoCompleted, setIsFinancialInfoCompleted] =
    useState(false);
  const [isLoanDetailsInfoCompleted, setIsLoanDetailsInfoCompleted] =
    useState(false);
  const [isRequestSubmitted, setIsRequestSubmitted] = useState(false);

  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);

  const handlePersonalInfoSubmit = (data) => {
    setIsPersonalInfoCompleted(true);
    updateFormData({ personalInfo: data })

    if (currentComponentIndex < 3) {
      setCurrentComponentIndex(currentComponentIndex + 1)
    } else {
      setCurrentComponentIndex(4);
    }
  };
  useEffect(() => {
    console.log("UPDATED PERSONAL INFO FROM LOAN RQST FORM:", personalInfo)
  }, [personalInfo])

  const handleEmploymentInfoSubmit = (data) => {
    setIsEmploymentInfoCompleted(true);
    updateFormData({ employmentInfo: data })

    if (currentComponentIndex < 3) {
      setCurrentComponentIndex(currentComponentIndex + 1)
    } else {
      setCurrentComponentIndex(4);
    }
  };
  useEffect(() => {
    console.log("UPDATED EMPLOYMENT INFO FROM LOAN RQST FORM:", employmentInfo)
  }, [employmentInfo])

  const handleFinancialInfoSubmit = (data) => {
    setIsFinancialInfoCompleted(true);
    updateFormData({ financialInfo: data })

    if (currentComponentIndex < 3) {
      setCurrentComponentIndex(currentComponentIndex + 1)
    } else {
      setCurrentComponentIndex(4);
    }
  };
  useEffect(() => {
    console.log("UPDATED FINANCIALl INFO FROM LOAN RQST FORM:", financialInfo)
  }, [financialInfo])

  const handleLoanDetailsInfoSubmit = (data) => {
    setIsLoanDetailsInfoCompleted(true);
    updateFormData({ loanDetailsInfo: data })

    if (currentComponentIndex < 3) {
      setCurrentComponentIndex(currentComponentIndex + 1)
    } else {
      setCurrentComponentIndex(4);
    }
  };
  useEffect(() => {
    console.log("UPDATED LOAN DETAILS INFO FROM LOAN RQST FORM:", loanDetailsInfo)
  }, [loanDetailsInfo])

  // const handleConfirmAndSubmit = () => {
  //   setIsRequestSubmitted(true);
  //   handleSaveToDatabase()
  //   setCurrentComponentIndex(5);
  // };

  const handleEditPersonalInfoSave = (editedData) => {
    updateFormData({ personalInfo: editedData })
  }

  // const handleEditEmploymentInfoSave = (editedData) => {
  //   updateFormData({ employmentInfo: editedData })
  // }

  // const handleEditFinancialInfoSave = (editedData) => {
  //   updateFormData({ financialInfo: editedData })
  // }

  // const handleEditLoanDetailsInfoSave = (editedData) => {
  //   updateFormData({ employmentInfo: editedData })
  // }

  const handleSaveToDatabase = async () => {
    const formData = {
      ...(isPersonalInfoCompleted && { personalInfo }),
      ...(isEmploymentInfoCompleted && { employmentInfo }),
      ...(isFinancialInfoCompleted && { financialInfo }),
      ...(isLoanDetailsInfoCompleted && { loanDetailsInfo }),
    };
    console.log("Form Data Submitted:", formData);
    try {
      const response = await fetch("/api/loan-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const responseData = await response.json();
        console.log("Data saved successfully:", responseData);
      } else {
        console.error("Failed to save data:", response.statusText);
      }
    } catch (error) {
      console.error("Error saving data:", error.message);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [currentComponentIndex]);


  const renderCurrentForm = () => {
    switch (currentComponentIndex) {
      case 0:
        return <PersonalInfoForm onSave={handlePersonalInfoSubmit} />;
      case 1:
        return <EmploymentInfoForm onSave={handleEmploymentInfoSubmit} />
      case 2:
        return <FinancialInfoForm onSave={handleFinancialInfoSubmit} />
      case 3:
        return <LoanDetailsInfoForm onSave={handleLoanDetailsInfoSubmit} />
      case 4:
        return (
          <ConfirmAndSubmit
            formData={{
              personalInfo,
              employmentInfo,
              financialInfo,
              loanDetailsInfo,
            }}
            onSave={(editedData) =>
              handleEditPersonalInfoSave(editedData)
            }
          />
        );
      case 5:
        return <Submitted />;
      default:
        return null;
    }
  };

  return (
    <>
      <TimelineComponent
        isPersonalInfoCompleted={isPersonalInfoCompleted}
        isEmploymentInfoCompleted={isEmploymentInfoCompleted}
        isFinancialInfoCompleted={isFinancialInfoCompleted}
        isLoanDetailsInfoCompleted={isLoanDetailsInfoCompleted}
        isRequestSubmitted={isRequestSubmitted}
      />
      <div className="w-full border border-emerald-800 rounded-tl rounded-tr bg-green-800/60 pt-2 pb-4 px-4 mt-8">
        {renderCurrentForm()}
      </div>
      <div className="w-full flex border border-emerald-800 rounded-bl rounded-br bg-green-100/40 p-4 mt-2">
        <div className="w-full flex justify-between text-sm text-neutral-800">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/responsible-lending">Responsible Lending</Link>
            </li>
            <li>
              <Link href="/rates-fees">Rates & Fees</Link>
            </li>
          </ul>
          <ul className="flex flex-col space-y-2">
            <li>
              <Link href="/disclaimer">Disclaimer</Link>
            </li>
            <li>
              <Link href="/marketing-practices">Marketing Practices</Link>
            </li>
            <li>
              <Link href="/terms-of-use">Terms of Use</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LoanRequestForm;
