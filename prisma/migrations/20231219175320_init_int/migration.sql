/*
  Warnings:

  - Changed the type of `ssn` on the `PersonalInfo` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "PersonalInfo" DROP COLUMN "ssn",
ADD COLUMN     "ssn" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "PersonalInfo_ssn_key" ON "PersonalInfo"("ssn");
