import { z } from "zod";

export const createAndEditHarvestFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  date: z.date().transform((date) => date.toISOString()),
});
