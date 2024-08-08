"use client";

import { useQuery } from "@tanstack/react-query";
import HarvestCard from "./HarvestCard";

const HarvestChartContainer = () => {
  const { data, isPending } = useQuery({
    queryKey: ["harvests"],
    queryFn: () => "",
  });
  return <HarvestCard />;
};

export default HarvestChartContainer;
