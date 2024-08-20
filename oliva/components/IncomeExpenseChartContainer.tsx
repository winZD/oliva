"use client";
import { useQuery } from "@tanstack/react-query";
import IncomeExpenseCard from "./IncomeExpenseCard";

const IncomeExpenseContainer = () => {
  const { data, isPending } = useQuery({
    queryKey: ["incomesAndExpenses"],
    queryFn: () => "",
  });
  return <IncomeExpenseCard />;
};

export default IncomeExpenseContainer;
