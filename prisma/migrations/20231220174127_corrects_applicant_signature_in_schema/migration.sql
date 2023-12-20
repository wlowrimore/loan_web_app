/*
  Warnings:

  - You are about to drop the column `signature` on the `LoanDetailsInfo` table. All the data in the column will be lost.
  - Added the required column `applicant_signature` to the `LoanDetailsInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LoanDetailsInfo" DROP COLUMN "signature",
ADD COLUMN     "applicant_signature" TEXT NOT NULL;
