"use server";

import { redirect } from "next/navigation";
import prisma from "../../db";
import { HarvestType } from "../../models/harvestModel";
export const getHarvestsAction = async (): Promise<HarvestType[] | null> => {
  try {
    const harvests: HarvestType[] = await prisma.harvest.findMany({
      orderBy: { year: "desc" },
    });

    return harvests;
  } catch (error) {
    console.log(error);
    return null;
  }
};
