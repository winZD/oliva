-- CreateTable
CREATE TABLE "Orchard" (
    "id" TEXT NOT NULL,
    "clerkId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "place" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "trees" INTEGER NOT NULL,
    "note" TEXT NOT NULL,

    CONSTRAINT "Orchard_pkey" PRIMARY KEY ("id")
);
