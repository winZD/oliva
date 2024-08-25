import { z } from "zod";

export const createAndEditIncomeAndExpenseFormSchema = z.object({
  year: z.date(),
  income: z.number(),
  expense: z.number(),
  harvestId: z.string(),
});
