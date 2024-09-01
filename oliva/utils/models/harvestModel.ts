import { z } from "zod";
import { createAndEditHarvestFormSchema } from "../actions/harvestActions/validations";
import { OrchardType } from "./orchardModel";
import { Decimal } from "@prisma/client/runtime/library";

export type HarvestType = {
  id: string;
  clerkId: string;
  year: Date;
  harvestYear: number | null;
  quantity: number;
  position: string;
  oil_percentage: number;
  orchardId?: string | null;
  orchard?: OrchardType | null;
  transactionType?: string | null;
  income?: Decimal | null;
  expense?: Decimal | null;
};

export enum TransactionType {
  INCOME = "income",
  EXPENSE = "expense",
}

export type CreateAndEditHarvestType = z.infer<
  typeof createAndEditHarvestFormSchema
>;
