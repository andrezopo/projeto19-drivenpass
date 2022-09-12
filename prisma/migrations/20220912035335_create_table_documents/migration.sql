-- CreateEnum
CREATE TYPE "documentTypes" AS ENUM ('rg', 'cnh');

-- CreateTable
CREATE TABLE "documents" (
    "id" SERIAL NOT NULL,
    "completeName" TEXT NOT NULL,
    "issueDate" TEXT NOT NULL,
    "expireDate" TEXT NOT NULL,
    "type" "documentTypes" NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "documents_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
