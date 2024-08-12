/*
  Warnings:

  - Added the required column `harvestId` to the `Orchard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Orchard" ADD COLUMN "harvestId" TEXT;


-- AddForeignKey
ALTER TABLE "Orchard" ADD CONSTRAINT "Orchard_harvestId_fkey" FOREIGN KEY ("harvestId") REFERENCES "Harvest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
