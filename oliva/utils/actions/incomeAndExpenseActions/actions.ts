"use server";
import prisma from "@/utils/db";
import { IncomeAndExpense } from "@/utils/models/incomeAndExpenseModel";

export const getIncomeAndExpenseAction = async (): Promise<
  IncomeAndExpense[] | null
> => {
  try {
    const incomesAndExpenses: IncomeAndExpense[] =
      await prisma.incomeAndExpense.findMany({
        include: { harvest: true },
        orderBy: { harvest: { year: "desc" } },
      });

    return incomesAndExpenses;
  } catch (error) {
    console.log(error);
    return null;
  }
};
