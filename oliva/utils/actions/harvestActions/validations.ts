import { z } from "zod";

export const createAndEditHarvestFormSchema = z.object({
  year: z.date().transform((date) => date.toISOString()),
  position: z.string().min(2, {
    message: "Position must be at least 2 characters.",
  }),
  oil_percentage: z.number(),
  quantity: z.number(),
});
