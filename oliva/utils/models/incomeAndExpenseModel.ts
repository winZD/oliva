import { HarvestType } from "./harvestModel";

export type IncomeAndExpense = {
  id: string;
  clerkId: string;
  income: number;
  expense: number;
  note: string;
  harvestId: string;
  harvest: HarvestType | null;
};
