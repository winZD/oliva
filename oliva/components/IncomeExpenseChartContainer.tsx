"use client";
import { useQuery } from "@tanstack/react-query";
import IncomeExpenseCard from "./IncomeExpenseCard";
import { getIncomesAndExpensesAction } from "@/utils/actions/incomeAndExpenseActions/actions";

const IncomeExpenseContainer = () => {
  const { data, isPending } = useQuery({
    queryKey: ["incomesAndExpenses"],
    queryFn: () => getIncomesAndExpensesAction(),
  });

  return <IncomeExpenseCard data={data?.length ? data : []} />;
};

export default IncomeExpenseContainer;
