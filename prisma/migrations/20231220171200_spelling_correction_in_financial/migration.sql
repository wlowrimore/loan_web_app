/*
  Warnings:

  - You are about to drop the column `housing_monthly_paymnent` on the `FinancialInfo` table. All the data in the column will be lost.
  - Added the required column `housing_monthly_payment` to the `FinancialInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FinancialInfo" DROP COLUMN "housing_monthly_paymnent",
ADD COLUMN     "housing_monthly_payment" TEXT NOT NULL;
