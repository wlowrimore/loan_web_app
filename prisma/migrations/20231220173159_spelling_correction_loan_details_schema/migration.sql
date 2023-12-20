/*
  Warnings:

  - You are about to drop the column `isConsentChecked` on the `LoanDetailsInfo` table. All the data in the column will be lost.
  - Added the required column `is_consent_checked` to the `LoanDetailsInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LoanDetailsInfo" DROP COLUMN "isConsentChecked",
ADD COLUMN     "is_consent_checked" BOOLEAN NOT NULL;
