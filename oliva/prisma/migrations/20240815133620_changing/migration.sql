-- AlterTable
ALTER TABLE "Orchard" ADD COLUMN     "harvestId" TEXT NOT NULL DEFAULT '75fd9ff2-a76a-478e-bccd-5bb75374d956';

-- AddForeignKey
ALTER TABLE "Orchard" ADD CONSTRAINT "Orchard_harvestId_fkey" FOREIGN KEY ("harvestId") REFERENCES "Harvest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
