import FertilizerCard from "@/components/FertilizerCard";
import HarvestCard from "@/components/HarvestCard";
import OrchardCard from "@/components/OrchardCard";
import OrchardChartContainer from "@/components/OrchardChartContainer";
import PrunningAndHarvestingCarData from "@/components/PrunningAndHarvestingCard";

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
        <h1 className="text-2xl">ORCHARDS</h1>
        <div className="">
          {/* <div className="col-span-2">
          <FertilizerCard />
        </div> */}

          <OrchardChartContainer />

          {/*   <div className="col-span-2">
          <PrunningAndHarvestingCarData data={pruneHarvestData} />
        </div>
        <div className="col-span-2">
          <HarvestCard />
        </div> */}
          <div className="">
            <CustomTable /* data={data}  */ />
          </div>
        </div>
      </div>
    </HydrationBoundary>
  );
};

export default OrchardsPage;
