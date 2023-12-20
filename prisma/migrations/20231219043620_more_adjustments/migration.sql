/*
  Warnings:

  - You are about to drop the column `housing_paymnet` on the `Financial` table. All the data in the column will be lost.
  - Added the required column `housing_paymnent` to the `Financial` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Financial" DROP COLUMN "housing_paymnet",
ADD COLUMN     "housing_paymnent" INTEGER NOT NULL;
