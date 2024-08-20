/*
  Warnings:

  - You are about to alter the column `income` on the `ExpenseAndIncome` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `expense` on the `ExpenseAndIncome` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "ExpenseAndIncome" ALTER COLUMN "income" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "expense" SET DATA TYPE DOUBLE PRECISION;
