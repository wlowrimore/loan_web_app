/*
  Warnings:

  - You are about to drop the column `state_selected` on the `EmploymentInfo` table. All the data in the column will be lost.
  - Added the required column `selected_state` to the `EmploymentInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EmploymentInfo" DROP COLUMN "state_selected",
ADD COLUMN     "selected_state" TEXT NOT NULL;
