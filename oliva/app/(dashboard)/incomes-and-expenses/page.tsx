import IncomeExpenseContainer from "@/components/IncomeExpenseChartContainer";
import IncomeExpenseTable from "@/components/IncomeExpenseTable";
import { getHarvestsGroupedBy } from "@/utils/actions/harvestActions/actions";
import { getIncomesAndExpensesAction } from "@/utils/actions/incomeAndExpenseActions/actions";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const IncomesAndExpenses = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["incomesAndExpenses"],
    queryFn: () => getIncomesAndExpensesAction(),
  });
  /*   await queryClient.prefetchQuery({
    queryKey: ["harvests"],
    queryFn: () => getHarvestsGroupedBy(),
  });
 */
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <IncomeExpenseContainer />
      <IncomeExpenseTable />
    </HydrationBoundary>
  );
};

export default IncomesAndExpenses;
