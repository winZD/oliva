import FertilizerCard from "@/components/FertilizerCard";
import HarvestCard from "@/components/HarvestCard";
import HarvestChartContainer from "@/components/HarvestChartContainer";
import IncomeExpenseContainer from "@/components/IncomeExpenseChartContainer";
import OrchardCard from "@/components/OrchardCard";
import OrchardChartContainer from "@/components/OrchardChartContainer";
import PrunningAndHarvestingCarData from "@/components/PrunningAndHarvestingCard";
import StatsDataContainer from "@/components/StatsDataContainer";

import CustomTable from "@/components/Table";
import { orchards, pruneHarvestData } from "@/utils/mockData";
import { getOrchardsAction } from "@/utils/orchardActions/actions";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";

const OrchardsPage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["orchards"],
    queryFn: () => getOrchardsAction(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div>
        <StatsDataContainer />
        <h1 className="text-2xl">ORCHARDS</h1>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-4 lg:grid-cols-3">
          {/* <div className="col-span-2">
          <FertilizerCard />
        </div> */}

          <OrchardChartContainer />

          <HarvestChartContainer />
          <IncomeExpenseContainer />

          {/* <div className="col-span-3  lg:col-span-2">
            <PrunningAndHarvestingCarData data={pruneHarvestData} />
          </div>
          <div className="col-span-3  lg:col-span-2">
            <HarvestCard />
          </div> */}
          <div className="md:hidden lg:inline lg:col-span-3">
            <CustomTable /* data={data}  */ />
          </div>
        </div>
      </div>
    </HydrationBoundary>
  );
};

export default OrchardsPage;
