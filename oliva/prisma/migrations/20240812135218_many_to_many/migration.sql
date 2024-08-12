/*
  Warnings:

  - You are about to drop the column `harvestId` on the `Orchard` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Orchard" DROP CONSTRAINT "Orchard_harvestId_fkey";

-- AlterTable
ALTER TABLE "Orchard" DROP COLUMN "harvestId";

-- CreateTable
CREATE TABLE "HarvestsOnOrchards" (
    "harvestId" TEXT NOT NULL,
    "orchardId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "HarvestsOnOrchards_pkey" PRIMARY KEY ("harvestId","orchardId")
);

-- AddForeignKey
ALTER TABLE "HarvestsOnOrchards" ADD CONSTRAINT "HarvestsOnOrchards_harvestId_fkey" FOREIGN KEY ("harvestId") REFERENCES "Harvest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HarvestsOnOrchards" ADD CONSTRAINT "HarvestsOnOrchards_orchardId_fkey" FOREIGN KEY ("orchardId") REFERENCES "Orchard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
