/*
  Warnings:

  - Added the required column `harvestId` to the `Orchard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Orchard" ALTER COLUMN "harvestId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Orchard" ADD CONSTRAINT "Orchard_harvestId_fkey" FOREIGN KEY ("harvestId") REFERENCES "Harvest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
