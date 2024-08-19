"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";
import StatsDataCard from "./StatsDataCard";
import { getOrchardsAction } from "@/utils/actions/orchardActions/actions";
import { getHarvestsAction } from "@/utils/actions/harvestActions/actions";

const StatsDataContainer = () => {
  const { data } = useQuery({
    queryKey: ["orchards"],
    queryFn: () => getOrchardsAction(),
  });
  const { data: harvestData } = useQuery({
    queryKey: ["harvests"],
    queryFn: () => getHarvestsAction(),
  });

  const avgOilPercentage = React.useMemo(() => {
    if (harvestData?.length) {
      const sum = harvestData.reduce(
        (acc, curr) => acc + curr.oil_percentage,
        0
      );
      const average = sum / harvestData.length;
      return parseFloat(average.toFixed(2));
    } else {
      return 0; // Handle the case where harvestData is null or undefined
    }
  }, [harvestData]);
  console.log(avgOilPercentage);

  return (
    <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3">
      <StatsDataCard title="total trees" value={300} />
      <StatsDataCard title="Oil %" value={avgOilPercentage} />
      <StatsDataCard title="Harvest in tons" value={12} />
    </div>
  );
};

export default StatsDataContainer;
