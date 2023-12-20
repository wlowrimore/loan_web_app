/*
  Warnings:

  - You are about to drop the `Employment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Financial` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LoanDetails` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Personal` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Employment" DROP CONSTRAINT "Employment_userId_fkey";

-- DropForeignKey
ALTER TABLE "Financial" DROP CONSTRAINT "Financial_userId_fkey";

-- DropForeignKey
ALTER TABLE "LoanDetails" DROP CONSTRAINT "LoanDetails_userId_fkey";

-- DropForeignKey
ALTER TABLE "Personal" DROP CONSTRAINT "Personal_userId_fkey";

-- DropTable
DROP TABLE "Employment";

-- DropTable
DROP TABLE "Financial";

-- DropTable
DROP TABLE "LoanDetails";

-- DropTable
DROP TABLE "Personal";

-- CreateTable
CREATE TABLE "PersonalInfo" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "date_of_birth" TIMESTAMP(3) NOT NULL,
    "ssn" TEXT NOT NULL,
    "marital_status" TEXT NOT NULL,
    "address_one" TEXT NOT NULL,
    "address_two" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipcode" INTEGER NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "personalId" INTEGER NOT NULL,

    CONSTRAINT "PersonalInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmploymentInfo" (
    "id" SERIAL NOT NULL,
    "employment_status" TEXT NOT NULL,
    "employers_name" TEXT NOT NULL,
    "employers_phone" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "currently_employed" BOOLEAN NOT NULL,
    "job_title" TEXT NOT NULL,
    "job_responsibilities" TEXT NOT NULL,
    "gross_monthly_income" INTEGER NOT NULL,
    "employers_address_one" TEXT NOT NULL,
    "employers_address_two" TEXT NOT NULL,
    "employers_city" TEXT NOT NULL,
    "employers_state" TEXT NOT NULL,
    "employers_zipcode" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "employmentId" INTEGER NOT NULL,

    CONSTRAINT "EmploymentInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FinancialInfo" (
    "id" SERIAL NOT NULL,
    "housing_type" TEXT NOT NULL,
    "housing_paymnent" INTEGER NOT NULL,
    "cc_debt" INTEGER NOT NULL,
    "auto_loans_debt" INTEGER NOT NULL,
    "student_loans_debt" INTEGER NOT NULL,
    "medical_bills_debt" INTEGER NOT NULL,
    "irs_debt" INTEGER NOT NULL,
    "bank_name" TEXT NOT NULL,
    "account_type" TEXT NOT NULL,
    "account_number" TEXT NOT NULL,
    "routing_number" TEXT NOT NULL,
    "assets" BOOLEAN NOT NULL,
    "debts" BOOLEAN NOT NULL,
    "userId" INTEGER NOT NULL,
    "financialId" INTEGER NOT NULL,

    CONSTRAINT "FinancialInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LoanDetailsInfo" (
    "id" SERIAL NOT NULL,
    "amount_requested" INTEGER NOT NULL,
    "loan_reason" TEXT NOT NULL,
    "loan_term" TEXT NOT NULL,
    "signature" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "loanDetailsId" INTEGER NOT NULL,

    CONSTRAINT "LoanDetailsInfo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PersonalInfo_ssn_key" ON "PersonalInfo"("ssn");

-- CreateIndex
CREATE UNIQUE INDEX "PersonalInfo_userId_key" ON "PersonalInfo"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "EmploymentInfo_userId_key" ON "EmploymentInfo"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "FinancialInfo_userId_key" ON "FinancialInfo"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "LoanDetailsInfo_userId_key" ON "LoanDetailsInfo"("userId");

-- AddForeignKey
ALTER TABLE "PersonalInfo" ADD CONSTRAINT "PersonalInfo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmploymentInfo" ADD CONSTRAINT "EmploymentInfo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FinancialInfo" ADD CONSTRAINT "FinancialInfo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LoanDetailsInfo" ADD CONSTRAINT "LoanDetailsInfo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
