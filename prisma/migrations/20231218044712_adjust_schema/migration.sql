/*
  Warnings:

  - You are about to drop the column `currently_employed` on the `Employment` table. All the data in the column will be lost.
  - You are about to drop the column `employers_address_one` on the `Employment` table. All the data in the column will be lost.
  - You are about to drop the column `employers_address_two` on the `Employment` table. All the data in the column will be lost.
  - You are about to drop the column `employers_city` on the `Employment` table. All the data in the column will be lost.
  - You are about to drop the column `employers_name` on the `Employment` table. All the data in the column will be lost.
  - You are about to drop the column `employers_phone` on the `Employment` table. All the data in the column will be lost.
  - You are about to drop the column `employers_state` on the `Employment` table. All the data in the column will be lost.
  - You are about to drop the column `employers_zipcode` on the `Employment` table. All the data in the column will be lost.
  - You are about to drop the column `employment_status` on the `Employment` table. All the data in the column will be lost.
  - You are about to drop the column `end_date` on the `Employment` table. All the data in the column will be lost.
  - You are about to drop the column `gross_monthly_income` on the `Employment` table. All the data in the column will be lost.
  - You are about to drop the column `job_responsibilities` on the `Employment` table. All the data in the column will be lost.
  - You are about to drop the column `job_title` on the `Employment` table. All the data in the column will be lost.
  - You are about to drop the column `start_date` on the `Employment` table. All the data in the column will be lost.
  - You are about to drop the column `account_number` on the `Financial` table. All the data in the column will be lost.
  - You are about to drop the column `account_type` on the `Financial` table. All the data in the column will be lost.
  - You are about to drop the column `assets` on the `Financial` table. All the data in the column will be lost.
  - You are about to drop the column `auto_loans_debt` on the `Financial` table. All the data in the column will be lost.
  - You are about to drop the column `bank_name` on the `Financial` table. All the data in the column will be lost.
  - You are about to drop the column `cc_debt` on the `Financial` table. All the data in the column will be lost.
  - You are about to drop the column `debts` on the `Financial` table. All the data in the column will be lost.
  - You are about to drop the column `housing_paymnet` on the `Financial` table. All the data in the column will be lost.
  - You are about to drop the column `housing_type` on the `Financial` table. All the data in the column will be lost.
  - You are about to drop the column `irs_debt` on the `Financial` table. All the data in the column will be lost.
  - You are about to drop the column `medical_bills_debt` on the `Financial` table. All the data in the column will be lost.
  - You are about to drop the column `routing_number` on the `Financial` table. All the data in the column will be lost.
  - You are about to drop the column `student_loans_debt` on the `Financial` table. All the data in the column will be lost.
  - You are about to drop the column `amount_requested` on the `LoanDetails` table. All the data in the column will be lost.
  - You are about to drop the column `loan_reason` on the `LoanDetails` table. All the data in the column will be lost.
  - You are about to drop the column `loan_term` on the `LoanDetails` table. All the data in the column will be lost.
  - You are about to drop the column `signature` on the `LoanDetails` table. All the data in the column will be lost.
  - You are about to drop the column `address_one` on the `Personal` table. All the data in the column will be lost.
  - You are about to drop the column `address_two` on the `Personal` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `Personal` table. All the data in the column will be lost.
  - You are about to drop the column `date_of_birth` on the `Personal` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Personal` table. All the data in the column will be lost.
  - You are about to drop the column `marital_status` on the `Personal` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Personal` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Personal` table. All the data in the column will be lost.
  - You are about to drop the column `ssn` on the `Personal` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `Personal` table. All the data in the column will be lost.
  - You are about to drop the column `zipcode` on the `Personal` table. All the data in the column will be lost.
  - Added the required column `EmployersAddressOne` to the `Employment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `EmployersAddressTwo` to the `Employment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `EmployersCity` to the `Employment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `EmployersName` to the `Employment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `EmployersPhone` to the `Employment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `EmployersState` to the `Employment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `EmployersZipcode` to the `Employment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `EmploymentSelected` to the `Employment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `EndDate` to the `Employment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `GrossMonthlyIncome` to the `Employment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `IsCurrentPosition` to the `Employment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `JobResponsibilities` to the `Employment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `JobTitle` to the `Employment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `StartDate` to the `Employment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `AssetDesc` to the `Financial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Assets` to the `Financial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `AutoMonthlyDebt` to the `Financial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `BankAccountNumber` to the `Financial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `BankAccountTypeSelected` to the `Financial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `BankName` to the `Financial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `BankRoutingNumber` to the `Financial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CcMonthlyDebt` to the `Financial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `HousingMonthlyPaymnet` to the `Financial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `HousingTypeSelected` to the `Financial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `IrsMonthlyDebt` to the `Financial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Liabilities` to the `Financial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `LiabilitiesDesc` to the `Financial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `MedicalMonthlyDebt` to the `Financial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `StudentLoansMonthlyDebt` to the `Financial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `DateSigned` to the `LoanDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `IsConsentChecked` to the `LoanDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `IsOtherSelected` to the `LoanDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `LoanAmountRequested` to the `LoanDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `LoanPurposeSelected` to the `LoanDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `OtherSelectedDesc` to the `LoanDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Signature` to the `LoanDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `TermLengthSelected` to the `LoanDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `AddressOne` to the `Personal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `AddressTwo` to the `Personal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `City` to the `Personal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `DateOfBirth` to the `Personal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Email` to the `Personal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `FullLegalName` to the `Personal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `MaritalStatus` to the `Personal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Phone` to the `Personal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Ssn` to the `Personal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `State` to the `Personal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UsCitizen` to the `Personal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Zipcode` to the `Personal` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Personal_ssn_key";

-- AlterTable
ALTER TABLE "Employment" DROP COLUMN "currently_employed",
DROP COLUMN "employers_address_one",
DROP COLUMN "employers_address_two",
DROP COLUMN "employers_city",
DROP COLUMN "employers_name",
DROP COLUMN "employers_phone",
DROP COLUMN "employers_state",
DROP COLUMN "employers_zipcode",
DROP COLUMN "employment_status",
DROP COLUMN "end_date",
DROP COLUMN "gross_monthly_income",
DROP COLUMN "job_responsibilities",
DROP COLUMN "job_title",
DROP COLUMN "start_date",
ADD COLUMN     "EmployersAddressOne" TEXT NOT NULL,
ADD COLUMN     "EmployersAddressTwo" TEXT NOT NULL,
ADD COLUMN     "EmployersCity" TEXT NOT NULL,
ADD COLUMN     "EmployersName" TEXT NOT NULL,
ADD COLUMN     "EmployersPhone" TEXT NOT NULL,
ADD COLUMN     "EmployersState" TEXT NOT NULL,
ADD COLUMN     "EmployersZipcode" INTEGER NOT NULL,
ADD COLUMN     "EmploymentSelected" TEXT NOT NULL,
ADD COLUMN     "EndDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "GrossMonthlyIncome" INTEGER NOT NULL,
ADD COLUMN     "IsCurrentPosition" BOOLEAN NOT NULL,
ADD COLUMN     "JobResponsibilities" TEXT NOT NULL,
ADD COLUMN     "JobTitle" TEXT NOT NULL,
ADD COLUMN     "StartDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Financial" DROP COLUMN "account_number",
DROP COLUMN "account_type",
DROP COLUMN "assets",
DROP COLUMN "auto_loans_debt",
DROP COLUMN "bank_name",
DROP COLUMN "cc_debt",
DROP COLUMN "debts",
DROP COLUMN "housing_paymnet",
DROP COLUMN "housing_type",
DROP COLUMN "irs_debt",
DROP COLUMN "medical_bills_debt",
DROP COLUMN "routing_number",
DROP COLUMN "student_loans_debt",
ADD COLUMN     "AssetDesc" TEXT NOT NULL,
ADD COLUMN     "Assets" BOOLEAN NOT NULL,
ADD COLUMN     "AutoMonthlyDebt" INTEGER NOT NULL,
ADD COLUMN     "BankAccountNumber" TEXT NOT NULL,
ADD COLUMN     "BankAccountTypeSelected" TEXT NOT NULL,
ADD COLUMN     "BankName" TEXT NOT NULL,
ADD COLUMN     "BankRoutingNumber" TEXT NOT NULL,
ADD COLUMN     "CcMonthlyDebt" INTEGER NOT NULL,
ADD COLUMN     "HousingMonthlyPaymnet" INTEGER NOT NULL,
ADD COLUMN     "HousingTypeSelected" TEXT NOT NULL,
ADD COLUMN     "IrsMonthlyDebt" INTEGER NOT NULL,
ADD COLUMN     "Liabilities" BOOLEAN NOT NULL,
ADD COLUMN     "LiabilitiesDesc" TEXT NOT NULL,
ADD COLUMN     "MedicalMonthlyDebt" INTEGER NOT NULL,
ADD COLUMN     "StudentLoansMonthlyDebt" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "LoanDetails" DROP COLUMN "amount_requested",
DROP COLUMN "loan_reason",
DROP COLUMN "loan_term",
DROP COLUMN "signature",
ADD COLUMN     "DateSigned" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "IsConsentChecked" BOOLEAN NOT NULL,
ADD COLUMN     "IsOtherSelected" BOOLEAN NOT NULL,
ADD COLUMN     "LoanAmountRequested" INTEGER NOT NULL,
ADD COLUMN     "LoanPurposeSelected" TEXT NOT NULL,
ADD COLUMN     "OtherSelectedDesc" TEXT NOT NULL,
ADD COLUMN     "Signature" TEXT NOT NULL,
ADD COLUMN     "TermLengthSelected" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Personal" DROP COLUMN "address_one",
DROP COLUMN "address_two",
DROP COLUMN "city",
DROP COLUMN "date_of_birth",
DROP COLUMN "email",
DROP COLUMN "marital_status",
DROP COLUMN "name",
DROP COLUMN "phone",
DROP COLUMN "ssn",
DROP COLUMN "state",
DROP COLUMN "zipcode",
ADD COLUMN     "AddressOne" TEXT NOT NULL,
ADD COLUMN     "AddressTwo" TEXT NOT NULL,
ADD COLUMN     "City" TEXT NOT NULL,
ADD COLUMN     "DateOfBirth" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "Email" TEXT NOT NULL,
ADD COLUMN     "FullLegalName" TEXT NOT NULL,
ADD COLUMN     "MaritalStatus" TEXT NOT NULL,
ADD COLUMN     "Phone" TEXT NOT NULL,
ADD COLUMN     "Ssn" TEXT NOT NULL,
ADD COLUMN     "State" TEXT NOT NULL,
ADD COLUMN     "UsCitizen" BOOLEAN NOT NULL,
ADD COLUMN     "Zipcode" INTEGER NOT NULL;
