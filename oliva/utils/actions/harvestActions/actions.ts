"use server";

import { redirect } from "next/navigation";
import prisma from "../../db";
import {
  CreateAndEditHarvestType,
  HarvestType,
} from "../../models/harvestModel";
import { createAndEditHarvestFormSchema } from "./validations";
export const getHarvestsAction = async (): Promise<HarvestType[] | null> => {
  try {
    const harvests: HarvestType[] = await prisma.harvest.findMany({
      orderBy: { year: "desc" },
      include: { orchard: true },
    });

    return harvests;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getHarvestsDistinctAction = async (): Promise<
  HarvestType[] | null
> => {
  try {
    const harvests: HarvestType[] = await prisma.harvest.findMany({
      orderBy: { year: "desc" },
      include: { orchard: true },
    });

    // Group harvests by year and keep the most recent one
    const uniqueHarvests = harvests.reduce((acc, current) => {
      const existingHarvest = acc.find(
        (harvest) => harvest.year.getFullYear() === current.year.getFullYear()
      );

      if (
        !existingHarvest ||
        current.year.getFullYear() > existingHarvest.year.getFullYear()
      ) {
        acc.push(current);
      }

      return acc;
    }, [] as HarvestType[]);

    return uniqueHarvests;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getHarvestByIdAction = async (
  id: string
): Promise<HarvestType | null> => {
  let harvest: HarvestType | null = null;
  try {
    harvest = await prisma.harvest.findUnique({
      where: { id },
      include: { orchard: true },
    });
  } catch (error) {
    console.log(error);
    return null;
  }
  if (!harvest) {
    redirect("/harvests");
  }
  return harvest;
};

export const createHarvestAction = async (
  values: CreateAndEditHarvestType
): Promise<HarvestType | null> => {
  /* const userId = authenticateAndRedirect(); */
  try {
    createAndEditHarvestFormSchema.parse(values);
    const harvest: HarvestType = await prisma.harvest.create({
      data: {
        clerkId: "1234567890",
        ...values,
      },
    });
    return harvest;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const updateHarvestAction = async (
  id: string,
  values: CreateAndEditHarvestType
): Promise<HarvestType | null> => {
  /*  const userId = authenticateAndRedirect(); */

  try {
    const harvest: HarvestType = await prisma.harvest.update({
      where: { id },
      data: { ...values },
    });
    return harvest;
  } catch (error) {
    return null;
  }
};

export const deleteHarvestAction = async (
  id: string
): Promise<HarvestType | null> => {
  /* const userId = authenticateAndRedirect(); */

  try {
    const harvest: HarvestType = await prisma.harvest.delete({
      where: { id /* , clerkId: userId  */ },
    });
    return harvest;
  } catch (error) {
    return null;
  }
};
