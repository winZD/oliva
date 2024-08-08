import HarvestChartContainer from "@/components/HarvestChartContainer";
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
      <div className="grid">
        <div>big line chart </div>
        <div>harvests table</div>
      </div>
    </HydrationBoundary>
  );
};

export default Harvests;
