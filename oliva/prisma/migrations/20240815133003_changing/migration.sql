/*
  Warnings:

  - You are about to drop the `HarvestsOnOrchards` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "HarvestsOnOrchards" DROP CONSTRAINT "HarvestsOnOrchards_harvestId_fkey";

-- DropForeignKey
ALTER TABLE "HarvestsOnOrchards" DROP CONSTRAINT "HarvestsOnOrchards_orchardId_fkey";

-- AlterTable
ALTER TABLE "Orchard" ADD COLUMN     "harvestId" TEXT;

-- DropTable
DROP TABLE "HarvestsOnOrchards";

-- AddForeignKey
ALTER TABLE "Orchard" ADD CONSTRAINT "Orchard_harvestId_fkey" FOREIGN KEY ("harvestId") REFERENCES "Harvest"("id") ON DELETE SET NULL ON UPDATE CASCADE;
