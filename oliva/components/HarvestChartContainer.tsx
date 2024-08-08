"use client";

import { useQuery } from "@tanstack/react-query";
import HarvestCard from "./HarvestCard";
import { getHarvestsAction } from "@/utils/actions/harvestActions/actions";

const HarvestChartContainer = () => {
  const { data, isPending } = useQuery({
    queryKey: ["harvests"],
    queryFn: () => getHarvestsAction(),
  });
  return <HarvestCard data={data ? data : []} />;
};

export default HarvestChartContainer;
