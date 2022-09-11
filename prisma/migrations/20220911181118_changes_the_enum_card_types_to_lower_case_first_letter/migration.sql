/*
  Warnings:

  - The values [Credit,Debit,Both] on the enum `cardTypes` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "cardTypes_new" AS ENUM ('credit', 'debit', 'both');
ALTER TABLE "cards" ALTER COLUMN "type" TYPE "cardTypes_new" USING ("type"::text::"cardTypes_new");
ALTER TYPE "cardTypes" RENAME TO "cardTypes_old";
ALTER TYPE "cardTypes_new" RENAME TO "cardTypes";
DROP TYPE "cardTypes_old";
COMMIT;
