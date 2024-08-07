/*
  Warnings:

  - Added the required column `expense` to the `Expense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `note` to the `Expense` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Expense" ADD COLUMN     "expense" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "note" TEXT NOT NULL;
