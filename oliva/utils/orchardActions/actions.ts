"use server";

import { redirect } from "next/navigation";
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

export const updateOrchardAction = async (
  id: string,
  values: CreateAndEditOrchardType
): Promise<OrchardType | null> => {
  /*  const userId = authenticateAndRedirect(); */

  try {
    const orchard: OrchardType = await prisma.orchard.update({
      where: { id },
      data: { ...values },
    });
    return orchard;
  } catch (error) {
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

export const getOrchardByIdAction = async (
  id: string
): Promise<OrchardType | null> => {
  let orchard: OrchardType | null = null;
  /* const userId = authenticateAndRedirect(); */

  try {
    orchard = await prisma.orchard.findUnique({
      where: {
        id,
        /* clerkId: userId, */
      },
    });
  } catch (error) {
    orchard = null;
  }
  if (!orchard) {
    redirect("/orchards");
  }
  return orchard;
};

export const deleteOrchardAction = async (
  id: string
): Promise<OrchardType | null> => {
  /* const userId = authenticateAndRedirect(); */

  try {
    const orchard: OrchardType = await prisma.orchard.delete({
      where: { id /* , clerkId: userId  */ },
    });
    return orchard;
  } catch (error) {
    return null;
  }
};
