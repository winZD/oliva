import { z } from "zod";

import { createAndEditHarvestFormSchema } from "../actions/harvestActions/validations";
import { OrchardType } from "./orchardModel";

export type HarvestType = {
  id: string;
  clerkId: string;
  year: Date;
  quantity: number;
  position: string;
  oil_percentage: number;
  orchardId?: string | null;
  orchard?: OrchardType | null;
};

export type CreateAndEditHarvestType = z.infer<
  typeof createAndEditHarvestFormSchema
>;
