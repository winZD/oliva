import { TransactionType } from "@/utils/models/harvestModel";
import { z } from "zod";

export const createAndEditHarvestFormSchema = z.object({
  year: z.date(),
  position: z.string().min(2, {
    message: "Position must be at least 2 characters.",
  }),
  oil_percentage: z.number(),
  quantity: z.number(),
  orchardId: z.string(),
  transactionType: z.nativeEnum(TransactionType),
  expense: z.string(),
  income: z.string(),
  /* orchard: z.object({}), */
});
