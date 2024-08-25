"use server";
import prisma from "@/utils/db";
import {
  CreateAndEditIncomeAndExpenseType,
  IncomeAndExpenseType,
} from "@/utils/models/incomeAndExpenseModel";
import { redirect } from "next/navigation";
import { createAndEditIncomeAndExpenseFormSchema } from "./validations";

export const getIncomesAndExpensesAction = async (): Promise<
  IncomeAndExpenseType[] | null
> => {
  try {
    const incomesAndExpenses: IncomeAndExpenseType[] =
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
): Promise<IncomeAndExpenseType | null> => {
  let incomeAndExpense: IncomeAndExpenseType | null = null;
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
): Promise<IncomeAndExpenseType | null> => {
  /* const userId = authenticateAndRedirect(); */

  try {
    const incomeAndExpense: IncomeAndExpenseType =
      await prisma.incomeAndExpense.delete({
        where: { id, clerkId: "1234567890" },
        include: { harvest: true },
      });
    return incomeAndExpense;
  } catch (error) {
    return null;
  }
};

export const createIncomeAndExpenseAction = async (
  values: CreateAndEditIncomeAndExpenseType
): Promise<IncomeAndExpenseType | null> => {
  /* const userId = authenticateAndRedirect(); */
  try {
    createAndEditIncomeAndExpenseFormSchema.parse(values);
    const incomeAndExpense: IncomeAndExpenseType =
      await prisma.incomeAndExpense.create({
        include: { harvest: true },
        data: {
          clerkId: "1234567890",
          ...values,
          harvestId: "",

          note: "",
        },
      });
    return incomeAndExpense;
  } catch (error) {
    console.log(error);
    return null;
  }
};
