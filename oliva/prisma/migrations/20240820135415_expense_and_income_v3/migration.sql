/*
  Warnings:

  - You are about to drop the `ExpenseAndIncome` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ExpenseAndIncome" DROP CONSTRAINT "ExpenseAndIncome_harvestId_fkey";

-- DropTable
DROP TABLE "ExpenseAndIncome";

-- CreateTable
CREATE TABLE "IncomeAndExpense" (
    "id" TEXT NOT NULL,
    "clerkId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "harvestId" TEXT NOT NULL,
    "income" DOUBLE PRECISION NOT NULL,
    "expense" DOUBLE PRECISION NOT NULL,
    "note" TEXT NOT NULL,

    CONSTRAINT "IncomeAndExpense_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "IncomeAndExpense" ADD CONSTRAINT "IncomeAndExpense_harvestId_fkey" FOREIGN KEY ("harvestId") REFERENCES "Harvest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
