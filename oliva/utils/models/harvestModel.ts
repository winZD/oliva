import { z } from "zod";
import { createAndEditOrchardFormSchema } from "../actions/orchardActions/validations";

export type HarvestType = {
  id: string;
  clerkId: string;
  year: Date;
  quantity: number;
  position: string;
  oil_percentage: number;
};

export type CreateAndEditHarvestType = z.infer<
  typeof createAndEditOrchardFormSchema
>;
