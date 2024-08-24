"use server";
import prisma from "@/utils/db";
import { IncomeAndExpense } from "@/utils/models/incomeAndExpenseModel";
import { redirect } from "next/navigation";

export const getIncomesAndExpensesAction = async (): Promise<
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

export const getIncomeAndExpenseAction = async (
  id: string
): Promise<IncomeAndExpense | null> => {
  let incomeAndExpense: IncomeAndExpense | null = null;
  try {
    incomeAndExpense = await prisma.incomeAndExpense.findUnique({
      where: { id, clerkId: "1234567890" },
      include: { harvest: true },
    });
  } catch (error) {
    console.log(error);
    return null;
  }
  if (!incomeAndExpense) {
    redirect("/incomes-and-expenses");
  }
  return incomeAndExpense;
};

/* export const updateIncomeAndExpenseAction = async (
  id: string,
  values: any
): Promise<IncomeAndExpense | null> => {
   //const userId = authenticateAndRedirect();

  try {
    const incomeAndExpense: IncomeAndExpense =
      await prisma.incomeAndExpense.update({
        where: { id },
        data: { ...values },
      });
    return incomeAndExpense;
  } catch (error) {
    return null;
  }
}; */

export const deleteIncomeAndExpenseAction = async (
  id: string
): Promise<IncomeAndExpense | null> => {
  /* const userId = authenticateAndRedirect(); */

  try {
    const incomeAndExpense: IncomeAndExpense =
      await prisma.incomeAndExpense.delete({
        where: { id, clerkId: "1234567890" },
        include: { harvest: true },
      });
    return incomeAndExpense;
  } catch (error) {
    return null;
  }
};
