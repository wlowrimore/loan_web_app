import { createContext, useContext, useState } from "react";

const FormDataContext = createContext();

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    personalInfo: {
      fullLegalName: '',
      addressOne: '',
      addressTwo: '',
      city: '',
      zipcode: '',
      dateOfBirth: new Date(),
      ssn: '',
      maritalStatus: '',
      selectedState: '',
      phone: '',
      email: '',
      usCitizen: null
    },
    employmentInfo: {
      employmentSelected: '',
      employersName: '',
      employersPhone: '',
      startDate: '',
      endDate: '',
      isCurrentPosition: false,
      jobTitle: '',
      jobResponsibilites: '',
      grossMonthlyIncome: '',
      employersAddressOne: '',
      employersAddressTwo: '',
      employersCity: '',
      selectedState: '',
      employersZipcode: ''
    },
    financialInfo: {
      housingTypeSelected: '',
      housingMonthlyPayment: '',
      ccMonthlyDebt: '',
      autoMonthlyDebt: '',
      studentLoansMonthlyDebt: '',
      medicalMonthlyDebt: '',
      irsMonthlyDebt: '',
      bankAccountTypeSelected: '',
      bankName: '',
      bankAccountNumber: '',
      bankRoutingNumber: '',
      isAsset: false,
      assetDesc: '',
      isLiability: false,
      liabilitiesDesc: ''
    },
    loanDetailsInfo: {
      loanAmountRequested: '',
      loanPurposeSelected: '',
      isOtherSelected: false,
      otherSelectedDesc: '',
      termLengthSelected: '',
      isConsentChecked: false,
      apllicantSignature: '',
      applicantSignature: '',
      dateSigned: ''
    }
  });

  const updateFormData = (newFormData) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ...newFormData,
    }))
  }

  return (
    <FormDataContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormDataContext.Provider>
  )
}

export const useFormData = () => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error('useFormData must be used within a FormDataProvider')
  }
  return context;
}