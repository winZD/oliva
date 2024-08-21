"use client";
import { useQuery } from "@tanstack/react-query";
import IncomeExpenseCard from "./IncomeExpenseCard";
import { getIncomeAndExpenseAction } from "@/utils/actions/incomeAndExpenseActions/actions";

const IncomeExpenseContainer = () => {
  const { data, isPending } = useQuery({
    queryKey: ["incomeAndExpense"],
    queryFn: () => getIncomeAndExpenseAction(),
  });

  console.log(data);
  return <IncomeExpenseCard data={data?.length ? data : []} />;
};

export default IncomeExpenseContainer;
