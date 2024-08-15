-- DropForeignKey
ALTER TABLE "Orchard" DROP CONSTRAINT "Orchard_harvestId_fkey";

-- AlterTable
ALTER TABLE "Orchard" ALTER COLUMN "harvestId" DROP NOT NULL,
ALTER COLUMN "harvestId" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "Orchard" ADD CONSTRAINT "Orchard_harvestId_fkey" FOREIGN KEY ("harvestId") REFERENCES "Harvest"("id") ON DELETE SET NULL ON UPDATE CASCADE;
