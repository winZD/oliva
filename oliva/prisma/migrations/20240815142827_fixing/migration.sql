/*
  Warnings:

  - Made the column `harvestId` on table `Orchard` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Orchard" DROP CONSTRAINT "Orchard_harvestId_fkey";

-- AlterTable
ALTER TABLE "Orchard" ALTER COLUMN "harvestId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Orchard" ADD CONSTRAINT "Orchard_harvestId_fkey" FOREIGN KEY ("harvestId") REFERENCES "Harvest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
