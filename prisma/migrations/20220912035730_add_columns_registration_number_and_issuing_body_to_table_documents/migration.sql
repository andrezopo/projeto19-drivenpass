/*
  Warnings:

  - Added the required column `issuingBody` to the `documents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `registrationNumber` to the `documents` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "documents" ADD COLUMN     "issuingBody" TEXT NOT NULL,
ADD COLUMN     "registrationNumber" TEXT NOT NULL;
