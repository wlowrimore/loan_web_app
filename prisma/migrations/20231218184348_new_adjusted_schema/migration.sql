/*
  Warnings:

  - You are about to drop the column `EmployersAddressOne` on the `Employment` table. All the data in the column will be lost.
  - You are about to drop the column `EmployersAddressTwo` on the `Employment` table. All the data in the column will be lost.
  - You are about to drop the column `EmployersCity` on the `Employment` table. All the data in the column will be lost.
  - You are about to drop the column `EmployersName` on the `Employment` table. All the data in the column will be lost.
  - You are about to drop the column `EmployersPhone` on the `Employment` table. All the data in the column will be lost.
  - You are about to drop the column `EmployersState` on the `Employment` table. All the data in the column will be lost.
  - You are about to drop the column `EmployersZipcode` on the `Employment` table. All the data in the column will be lost.
  - You are about to drop the column `EmploymentSelected` on the `Employment` table. All the data in the column will be lost.
  - You are about to drop the column `EndDate` on the `Employment` table. All the data in the column will be lost.
  - You are about to drop the column `GrossMonthlyIncome` on the `Employment` table. All the data in the column will be lost.
  - You are about to drop the column `IsCurrentPosition` on the `Employment` table. All the data in the column will be lost.
  - You are about to drop the column `JobResponsibilities` on the `Employment` table. All the data in the column will be lost.
  - You are about to drop the column `JobTitle` on the `Employment` table. All the data in the column will be lost.
  - You are about to drop the column `StartDate` on the `Employment` table. All the data in the column will be lost.
  - You are about to drop the column `AssetDesc` on the `Financial` table. All the data in the column will be lost.
  - You are about to drop the column `Assets` on the `Financial` table. All the data in the column will be lost.
  - You are about to drop the column `AutoMonthlyDebt` on the `Financial` table. All the data in the column will be lost.
  - You are about to drop the column `BankAccountNumber` on the `Financial` table. All the data in the column will be lost.
  - You are about to drop the column `BankAccountTypeSelected` on the `Financial` table. All the data in the column will be lost.
  - You are about to drop the column `BankName` on the `Financial` table. All the data in the column will be lost.
  - You are about to drop the column `BankRoutingNumber` on the `Financial` table. All the data in the column will be lost.
  - You are about to drop the column `CcMonthlyDebt` on the `Financial` table. All the data in the column will be lost.
  - You are about to drop the column `HousingMonthlyPaymnet` on the `Financial` table. All the data in the column will be lost.
  - You are about to drop the column `HousingTypeSelected` on the `Financial` table. All the data in the column will be lost.
  - You are about to drop the column `IrsMonthlyDebt` on the `Financial` table. All the data in the column will be lost.
  - You are about to drop the column `Liabilities` on the `Financial` table. All the data in the column will be lost.
  - You are about to drop the column `LiabilitiesDesc` on the `Financial` table. All the data in the column will be lost.
  - You are about to drop the column `MedicalMonthlyDebt` on the `Financial` table. All the data in the column will be lost.
  - You are about to drop the column `StudentLoansMonthlyDebt` on the `Financial` table. All the data in the column will be lost.
  - You are about to drop the column `DateSigned` on the `LoanDetails` table. All the data in the column will be lost.
  - You are about to drop the column `IsConsentChecked` on the `LoanDetails` table. All the data in the column will be lost.
  - You are about to drop the column `IsOtherSelected` on the `LoanDetails` table. All the data in the column will be lost.
  - You are about to drop the column `LoanAmountRequested` on the `LoanDetails` table. All the data in the column will be lost.
  - You are about to drop the column `LoanPurposeSelected` on the `LoanDetails` table. All the data in the column will be lost.
  - You are about to drop the column `OtherSelectedDesc` on the `LoanDetails` table. All the data in the column will be lost.
  - You are about to drop the column `Signature` on the `LoanDetails` table. All the data in the column will be lost.
  - You are about to drop the column `TermLengthSelected` on the `LoanDetails` table. All the data in the column will be lost.
  - You are about to drop the column `AddressOne` on the `Personal` table. All the data in the column will be lost.
  - You are about to drop the column `AddressTwo` on the `Personal` table. All the data in the column will be lost.
  - You are about to drop the column `City` on the `Personal` table. All the data in the column will be lost.
  - You are about to drop the column `DateOfBirth` on the `Personal` table. All the data in the column will be lost.
  - You are about to drop the column `Email` on the `Personal` table. All the data in the column will be lost.
  - You are about to drop the column `FullLegalName` on the `Personal` table. All the data in the column will be lost.
  - You are about to drop the column `MaritalStatus` on the `Personal` table. All the data in the column will be lost.
  - You are about to drop the column `Phone` on the `Personal` table. All the data in the column will be lost.
  - You are about to drop the column `Ssn` on the `Personal` table. All the data in the column will be lost.
  - You are about to drop the column `State` on the `Personal` table. All the data in the column will be lost.
  - You are about to drop the column `UsCitizen` on the `Personal` table. All the data in the column will be lost.
  - You are about to drop the column `Zipcode` on the `Personal` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[ssn]` on the table `Personal` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `currently_employed` to the `Employment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employers_address_one` to the `Employment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employers_address_two` to the `Employment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employers_city` to the `Employment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employers_name` to the `Employment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employers_phone` to the `Employment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employers_state` to the `Employment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employers_zipcode` to the `Employment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employment_status` to the `Employment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `end_date` to the `Employment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gross_monthly_income` to the `Employment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `job_responsibilities` to the `Employment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `job_title` to the `Employment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_date` to the `Employment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `account_number` to the `Financial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `account_type` to the `Financial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `assets` to the `Financial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `auto_loans_debt` to the `Financial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bank_name` to the `Financial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cc_debt` to the `Financial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `debts` to the `Financial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `housing_paymnet` to the `Financial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `housing_type` to the `Financial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `irs_debt` to the `Financial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `medical_bills_debt` to the `Financial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `routing_number` to the `Financial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `student_loans_debt` to the `Financial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `amount_requested` to the `LoanDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `loan_reason` to the `LoanDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `loan_term` to the `LoanDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `signature` to the `LoanDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address_one` to the `Personal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address_two` to the `Personal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Personal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_of_birth` to the `Personal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Personal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `marital_status` to the `Personal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Personal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Personal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ssn` to the `Personal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Personal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zipcode` to the `Personal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Employment" DROP COLUMN "EmployersAddressOne",
DROP COLUMN "EmployersAddressTwo",
DROP COLUMN "EmployersCity",
DROP COLUMN "EmployersName",
DROP COLUMN "EmployersPhone",
DROP COLUMN "EmployersState",
DROP COLUMN "EmployersZipcode",
DROP COLUMN "EmploymentSelected",
DROP COLUMN "EndDate",
DROP COLUMN "GrossMonthlyIncome",
DROP COLUMN "IsCurrentPosition",
DROP COLUMN "JobResponsibilities",
DROP COLUMN "JobTitle",
DROP COLUMN "StartDate",
ADD COLUMN     "currently_employed" BOOLEAN NOT NULL,
ADD COLUMN     "employers_address_one" TEXT NOT NULL,
ADD COLUMN     "employers_address_two" TEXT NOT NULL,
ADD COLUMN     "employers_city" TEXT NOT NULL,
ADD COLUMN     "employers_name" TEXT NOT NULL,
ADD COLUMN     "employers_phone" TEXT NOT NULL,
ADD COLUMN     "employers_state" TEXT NOT NULL,
ADD COLUMN     "employers_zipcode" INTEGER NOT NULL,
ADD COLUMN     "employment_status" TEXT NOT NULL,
ADD COLUMN     "end_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "gross_monthly_income" INTEGER NOT NULL,
ADD COLUMN     "job_responsibilities" TEXT NOT NULL,
ADD COLUMN     "job_title" TEXT NOT NULL,
ADD COLUMN     "start_date" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Financial" DROP COLUMN "AssetDesc",
DROP COLUMN "Assets",
DROP COLUMN "AutoMonthlyDebt",
DROP COLUMN "BankAccountNumber",
DROP COLUMN "BankAccountTypeSelected",
DROP COLUMN "BankName",
DROP COLUMN "BankRoutingNumber",
DROP COLUMN "CcMonthlyDebt",
DROP COLUMN "HousingMonthlyPaymnet",
DROP COLUMN "HousingTypeSelected",
DROP COLUMN "IrsMonthlyDebt",
DROP COLUMN "Liabilities",
DROP COLUMN "LiabilitiesDesc",
DROP COLUMN "MedicalMonthlyDebt",
DROP COLUMN "StudentLoansMonthlyDebt",
ADD COLUMN     "account_number" TEXT NOT NULL,
ADD COLUMN     "account_type" TEXT NOT NULL,
ADD COLUMN     "assets" BOOLEAN NOT NULL,
ADD COLUMN     "auto_loans_debt" INTEGER NOT NULL,
ADD COLUMN     "bank_name" TEXT NOT NULL,
ADD COLUMN     "cc_debt" INTEGER NOT NULL,
ADD COLUMN     "debts" BOOLEAN NOT NULL,
ADD COLUMN     "housing_paymnet" INTEGER NOT NULL,
ADD COLUMN     "housing_type" TEXT NOT NULL,
ADD COLUMN     "irs_debt" INTEGER NOT NULL,
ADD COLUMN     "medical_bills_debt" INTEGER NOT NULL,
ADD COLUMN     "routing_number" TEXT NOT NULL,
ADD COLUMN     "student_loans_debt" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "LoanDetails" DROP COLUMN "DateSigned",
DROP COLUMN "IsConsentChecked",
DROP COLUMN "IsOtherSelected",
DROP COLUMN "LoanAmountRequested",
DROP COLUMN "LoanPurposeSelected",
DROP COLUMN "OtherSelectedDesc",
DROP COLUMN "Signature",
DROP COLUMN "TermLengthSelected",
ADD COLUMN     "amount_requested" INTEGER NOT NULL,
ADD COLUMN     "loan_reason" TEXT NOT NULL,
ADD COLUMN     "loan_term" TEXT NOT NULL,
ADD COLUMN     "signature" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Personal" DROP COLUMN "AddressOne",
DROP COLUMN "AddressTwo",
DROP COLUMN "City",
DROP COLUMN "DateOfBirth",
DROP COLUMN "Email",
DROP COLUMN "FullLegalName",
DROP COLUMN "MaritalStatus",
DROP COLUMN "Phone",
DROP COLUMN "Ssn",
DROP COLUMN "State",
DROP COLUMN "UsCitizen",
DROP COLUMN "Zipcode",
ADD COLUMN     "address_one" TEXT NOT NULL,
ADD COLUMN     "address_two" TEXT NOT NULL,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "date_of_birth" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "marital_status" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "ssn" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "zipcode" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Personal_ssn_key" ON "Personal"("ssn");
