import { getIncomeAndExpenseAction } from "@/utils/actions/incomeAndExpenseActions/actions";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const IncomeAndExpenseDetailsPage = async ({
  params,
}: {
  params: { id: string };
}) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["incomeAndExpense", params?.id],
    queryFn: () => getIncomeAndExpenseAction(params?.id),
  });
  return <HydrationBoundary state={dehydrate(queryClient)}></HydrationBoundary>;
};

export default IncomeAndExpenseDetailsPage;
