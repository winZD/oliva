import { z } from "zod";
import { createAndEditOrchardFormSchema } from "../orchardActions/validations";

export type OrchardType = {
  id: string;
  clerkId: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  place: string;
  size: string;
  trees: number;
  note: string;
};

export type CreateAndEditOrchardType = z.infer<
  typeof createAndEditOrchardFormSchema
>;
