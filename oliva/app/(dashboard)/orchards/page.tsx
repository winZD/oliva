import FertilizerCard from "@/components/FertilizerCard";
import HarvestCard from "@/components/HarvestCard";
import OrchardCard from "@/components/OrchardCard";
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
  const data = [
    { orchard: "Orchard 1", size: 30, position: "North", oliveTrees: 25 },
    { orchard: "Orchard 2", size: 45, position: "South", oliveTrees: 35 },
    // Add more orchards as needed
  ];
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div>
        <h1 className="text-2xl">ORCHARDS</h1>
        <div className="grid grid-cols-6 gap-5">
          {/* <div className="col-span-2">
          <FertilizerCard />
        </div> */}
          <div className="col-span-6">
            <OrchardCard data={orchards} />
          </div>
          {/*   <div className="col-span-2">
          <PrunningAndHarvestingCarData data={pruneHarvestData} />
        </div>
        <div className="col-span-2">
          <HarvestCard />
        </div> */}
          <div className="col-span-6">
            <CustomTable /* data={data}  */ />
          </div>
        </div>
      </div>
    </HydrationBoundary>
  );
};

export default OrchardsPage;
