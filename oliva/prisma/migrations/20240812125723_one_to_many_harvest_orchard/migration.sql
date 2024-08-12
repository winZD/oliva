/*
  Warnings:

  - Made the column `harvestId` on table `Orchard` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Orchard" ALTER COLUMN "harvestId" SET NOT NULL;
