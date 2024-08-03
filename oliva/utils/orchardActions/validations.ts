import { z } from "zod";

export const createAndEditOrchardFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  place: z.string().min(2, {
    message: "Place must be at least 2 characters.",
  }),
  size: z.string().min(2, {
    message: "Size must be at least 2 characters.",
  }),
  trees: z
    .string()
    .min(1, { message: "Field is required" })
    .refine((value) => !isNaN(Number(value)) && Number(value) > 0, {
      message: "Value must be a positive number",
    }),
  note: z.string(),
});
