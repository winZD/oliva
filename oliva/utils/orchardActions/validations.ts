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
  trees: z.number().refine(
    (v) => {
      let n = Number(v);
      return !isNaN(n) && v > 0;
    },
    { message: "Invalid number" }
  ),
  note: z.string(),
});
