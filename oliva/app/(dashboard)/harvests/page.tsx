import HarvestChartContainer from "@/components/HarvestChartContainer";
import HarvestTable from "@/components/HarvestTable";
import { getHarvestsAction } from "@/utils/actions/harvestActions/actions";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const Harvests = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["harvests"],
    queryFn: () => getHarvestsAction(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HarvestChartContainer />
      <HarvestTable />
    </HydrationBoundary>
  );
};

export default Harvests;
