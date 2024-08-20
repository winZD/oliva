/*
  Warnings:

  - You are about to drop the `Expense` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Income` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Expense" DROP CONSTRAINT "Expense_harvestId_fkey";

-- DropForeignKey
ALTER TABLE "Expense" DROP CONSTRAINT "Expense_orchardId_fkey";

-- DropForeignKey
ALTER TABLE "Income" DROP CONSTRAINT "Income_harvestId_fkey";

-- DropForeignKey
ALTER TABLE "Income" DROP CONSTRAINT "Income_orchardId_fkey";

-- DropTable
DROP TABLE "Expense";

-- DropTable
DROP TABLE "Income";

-- CreateTable
CREATE TABLE "ExpenseAndIncome" (
    "id" TEXT NOT NULL,
    "clerkId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "harvestId" TEXT NOT NULL,
    "income" DECIMAL(65,30) NOT NULL,
    "expense" DECIMAL(65,30) NOT NULL,
    "note" TEXT NOT NULL,

    CONSTRAINT "ExpenseAndIncome_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ExpenseAndIncome" ADD CONSTRAINT "ExpenseAndIncome_harvestId_fkey" FOREIGN KEY ("harvestId") REFERENCES "Harvest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
