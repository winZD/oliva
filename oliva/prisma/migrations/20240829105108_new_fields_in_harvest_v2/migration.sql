/*
  Warnings:

  - The `expense` column on the `Harvest` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `income` column on the `Harvest` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Harvest" DROP COLUMN "expense",
ADD COLUMN     "expense" DECIMAL(65,30),
DROP COLUMN "income",
ADD COLUMN     "income" DECIMAL(65,30);
