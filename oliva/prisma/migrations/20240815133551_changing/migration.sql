/*
  Warnings:

  - You are about to drop the column `harvestId` on the `Orchard` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Orchard" DROP CONSTRAINT "Orchard_harvestId_fkey";

-- AlterTable
ALTER TABLE "Orchard" DROP COLUMN "harvestId";
