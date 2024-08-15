/*
  Warnings:

  - You are about to drop the column `harvestId` on the `Orchard` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Orchard" DROP CONSTRAINT "Orchard_harvestId_fkey";

-- AlterTable
ALTER TABLE "Harvest" ADD COLUMN     "orchardId" TEXT;

-- AlterTable
ALTER TABLE "Orchard" DROP COLUMN "harvestId";

-- AddForeignKey
ALTER TABLE "Harvest" ADD CONSTRAINT "Harvest_orchardId_fkey" FOREIGN KEY ("orchardId") REFERENCES "Orchard"("id") ON DELETE SET NULL ON UPDATE CASCADE;
