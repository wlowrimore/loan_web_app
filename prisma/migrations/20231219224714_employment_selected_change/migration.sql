/*
  Warnings:

  - You are about to drop the column `employment_status` on the `EmploymentInfo` table. All the data in the column will be lost.
  - Added the required column `employment_selected` to the `EmploymentInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EmploymentInfo" DROP COLUMN "employment_status",
ADD COLUMN     "employment_selected" TEXT NOT NULL;
