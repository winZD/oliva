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
