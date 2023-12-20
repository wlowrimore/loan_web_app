/*
  Warnings:

  - You are about to drop the column `employmentId` on the `EmploymentInfo` table. All the data in the column will be lost.
  - You are about to drop the column `financialId` on the `FinancialInfo` table. All the data in the column will be lost.
  - You are about to drop the column `loanDetailsId` on the `LoanDetailsInfo` table. All the data in the column will be lost.
  - You are about to drop the column `personalId` on the `PersonalInfo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "EmploymentInfo" DROP COLUMN "employmentId";

-- AlterTable
ALTER TABLE "FinancialInfo" DROP COLUMN "financialId";

-- AlterTable
ALTER TABLE "LoanDetailsInfo" DROP COLUMN "loanDetailsId";

-- AlterTable
ALTER TABLE "PersonalInfo" DROP COLUMN "personalId";
