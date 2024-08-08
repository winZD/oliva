-- CreateTable
CREATE TABLE "Harvest" (
    "id" TEXT NOT NULL,
    "year" TIMESTAMP(3) NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "position" TEXT NOT NULL,
    "oilPercentage" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Harvest_pkey" PRIMARY KEY ("id")
);
