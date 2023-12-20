/*
  Warnings:

  - You are about to drop the column `name` on the `PersonalInfo` table. All the data in the column will be lost.
  - Added the required column `full_legal_name` to the `PersonalInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PersonalInfo" DROP COLUMN "name",
ADD COLUMN     "full_legal_name" TEXT NOT NULL;
