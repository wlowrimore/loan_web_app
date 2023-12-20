/*
  Warnings:

  - You are about to drop the column `currently_employed` on the `EmploymentInfo` table. All the data in the column will be lost.
  - You are about to drop the column `employers_state` on the `EmploymentInfo` table. All the data in the column will be lost.
  - You are about to drop the column `account_number` on the `FinancialInfo` table. All the data in the column will be lost.
  - You are about to drop the column `account_type` on the `FinancialInfo` table. All the data in the column will be lost.
  - You are about to drop the column `auto_loans_debt` on the `FinancialInfo` table. All the data in the column will be lost.
  - You are about to drop the column `cc_debt` on the `FinancialInfo` table. All the data in the column will be lost.
  - You are about to drop the column `debts` on the `FinancialInfo` table. All the data in the column will be lost.
  - You are about to drop the column `housing_paymnent` on the `FinancialInfo` table. All the data in the column will be lost.
  - You are about to drop the column `housing_type` on the `FinancialInfo` table. All the data in the column will be lost.
  - You are about to drop the column `irs_debt` on the `FinancialInfo` table. All the data in the column will be lost.
  - You are about to drop the column `medical_bills_debt` on the `FinancialInfo` table. All the data in the column will be lost.
  - You are about to drop the column `routing_number` on the `FinancialInfo` table. All the data in the column will be lost.
  - You are about to drop the column `student_loans_debt` on the `FinancialInfo` table. All the data in the column will be lost.
  - You are about to drop the column `amount_requested` on the `LoanDetailsInfo` table. All the data in the column will be lost.
  - You are about to drop the column `loan_reason` on the `LoanDetailsInfo` table. All the data in the column will be lost.
  - You are about to drop the column `loan_term` on the `LoanDetailsInfo` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `PersonalInfo` table. All the data in the column will be lost.
  - Added the required column `state_selected` to the `EmploymentInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `auto_monthly_debt` to the `FinancialInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bank_account_number` to the `FinancialInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bank_account_type_selected` to the `FinancialInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bank_routing_number` to the `FinancialInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cc_monthly_debt` to the `FinancialInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `housing_monthly_paymnent` to the `FinancialInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `housing_type_selected` to the `FinancialInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `irs_monthly_debt` to the `FinancialInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `liabilities` to the `FinancialInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `medical_monthly_debt` to the `FinancialInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `student_loans_monthly_debt` to the `FinancialInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_signed` to the `LoanDetailsInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isConsentChecked` to the `LoanDetailsInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_other_selected` to the `LoanDetailsInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `loan_amount_requested` to the `LoanDetailsInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `loan_purpose_selected` to the `LoanDetailsInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `term_length_selected` to the `LoanDetailsInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `selected_state` to the `PersonalInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EmploymentInfo" DROP COLUMN "currently_employed",
DROP COLUMN "employers_state",
ADD COLUMN     "is_current_position" BOOLEAN,
ADD COLUMN     "state_selected" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "FinancialInfo" DROP COLUMN "account_number",
DROP COLUMN "account_type",
DROP COLUMN "auto_loans_debt",
DROP COLUMN "cc_debt",
DROP COLUMN "debts",
DROP COLUMN "housing_paymnent",
DROP COLUMN "housing_type",
DROP COLUMN "irs_debt",
DROP COLUMN "medical_bills_debt",
DROP COLUMN "routing_number",
DROP COLUMN "student_loans_debt",
ADD COLUMN     "asset_desc" TEXT,
ADD COLUMN     "auto_monthly_debt" TEXT NOT NULL,
ADD COLUMN     "bank_account_number" TEXT NOT NULL,
ADD COLUMN     "bank_account_type_selected" TEXT NOT NULL,
ADD COLUMN     "bank_routing_number" TEXT NOT NULL,
ADD COLUMN     "cc_monthly_debt" TEXT NOT NULL,
ADD COLUMN     "housing_monthly_paymnent" TEXT NOT NULL,
ADD COLUMN     "housing_type_selected" TEXT NOT NULL,
ADD COLUMN     "irs_monthly_debt" TEXT NOT NULL,
ADD COLUMN     "liabilites_desc" TEXT,
ADD COLUMN     "liabilities" BOOLEAN NOT NULL,
ADD COLUMN     "medical_monthly_debt" TEXT NOT NULL,
ADD COLUMN     "student_loans_monthly_debt" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "LoanDetailsInfo" DROP COLUMN "amount_requested",
DROP COLUMN "loan_reason",
DROP COLUMN "loan_term",
ADD COLUMN     "date_signed" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "isConsentChecked" BOOLEAN NOT NULL,
ADD COLUMN     "is_other_selected" BOOLEAN NOT NULL,
ADD COLUMN     "loan_amount_requested" TEXT NOT NULL,
ADD COLUMN     "loan_purpose_selected" TEXT NOT NULL,
ADD COLUMN     "other_selected_desc" TEXT,
ADD COLUMN     "term_length_selected" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PersonalInfo" DROP COLUMN "state",
ADD COLUMN     "selected_state" TEXT NOT NULL;
