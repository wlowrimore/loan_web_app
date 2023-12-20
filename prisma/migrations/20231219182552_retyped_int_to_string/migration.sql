-- AlterTable
ALTER TABLE "EmploymentInfo" ALTER COLUMN "end_date" DROP NOT NULL,
ALTER COLUMN "gross_monthly_income" SET DATA TYPE TEXT,
ALTER COLUMN "employers_zipcode" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "FinancialInfo" ALTER COLUMN "housing_paymnent" SET DATA TYPE TEXT,
ALTER COLUMN "cc_debt" SET DATA TYPE TEXT,
ALTER COLUMN "auto_loans_debt" SET DATA TYPE TEXT,
ALTER COLUMN "student_loans_debt" SET DATA TYPE TEXT,
ALTER COLUMN "medical_bills_debt" SET DATA TYPE TEXT,
ALTER COLUMN "irs_debt" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "LoanDetailsInfo" ALTER COLUMN "amount_requested" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "PersonalInfo" ALTER COLUMN "zipcode" SET DATA TYPE TEXT;
