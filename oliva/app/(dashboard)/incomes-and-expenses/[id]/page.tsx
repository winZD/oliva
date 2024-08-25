import CreateHarvestForm from "@/components/CreateHarvestForm";
import CreateIncomeAndExpenseForm from "@/components/CreateIncomeAndExpenseForm";
import EditIncomeAndExpenseForm from "@/components/EditIncomeAndExpenseForm";
import { getHarvestsAction } from "@/utils/actions/harvestActions/actions";
import {
  createIncomeAndExpenseAction,
  getIncomeAndExpenseAction,
} from "@/utils/actions/incomeAndExpenseActions/actions";
import { createAndEditIncomeAndExpenseFormSchema } from "@/utils/actions/incomeAndExpenseActions/validations";
import { CreateAndEditIncomeAndExpenseType } from "@/utils/models/incomeAndExpenseModel";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

const IncomeAndExpenseDetailsPage = async ({
  params,
}: {
  params: { id: string };
}) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["harvests"],
    queryFn: () => getHarvestsAction(),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <EditIncomeAndExpenseForm incomeAndExpenseId={params?.id} />
    </HydrationBoundary>
  );
};

export default IncomeAndExpenseDetailsPage;
