"use server";

import prisma from "../db";
import { CreateAndEditOrchardType, OrchardType } from "../models/orchardModel";
import { createAndEditOrchardFormSchema } from "./validations";

export const createOrchardAction = async (
  values: CreateAndEditOrchardType
): Promise<OrchardType | null> => {
  /* const userId = authenticateAndRedirect(); */
  try {
    createAndEditOrchardFormSchema.parse(values);
    const orchard: OrchardType = await prisma.orchard.create({
      data: { clerkId: "1234", ...values },
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
