"use server";

import prisma from "../db";
import { OrchardType } from "../models/orchardModel";

export const createOrchardAction = async (
  values: OrchardType
): Promise<OrchardType | null> => {
  /* const userId = authenticateAndRedirect(); */
  try {
    /*  createAndEditJobSchema.parse(values); */
    const orchard: OrchardType = await prisma.orchard.create({
      data: { ...values },
    });
    return orchard;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getOrchardsAction = async (): Promise<OrchardType[] | null> => {
  try {
    const orchards: OrchardType[] = await prisma.orchard.findMany({
      orderBy: { createdAt: "desc" },
    });

    return orchards;
  } catch (error) {
    console.log(error);
    return null;
  }
};
