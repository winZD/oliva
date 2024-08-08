/*
  Warnings:

  - You are about to drop the column `oilPercentage` on the `Harvest` table. All the data in the column will be lost.
  - Added the required column `oil_percentage` to the `Harvest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Harvest" DROP COLUMN "oilPercentage",
ADD COLUMN     "oil_percentage" DOUBLE PRECISION NOT NULL;
