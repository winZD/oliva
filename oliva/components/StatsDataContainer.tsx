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
      const sumOil = harvestData.reduce(
        (acc, curr) => acc + curr.oil_percentage,
        0
      );

      const sumQuantitiy = harvestData.reduce(
        (acc, curr) => acc + curr.quantity,
        0
      );
      const averageOil = sumOil / harvestData.length;
      const averageQuantity = sumQuantitiy / harvestData.length;
      return {
        oilAvg: parseFloat(averageOil.toFixed(2)),
        quantityAvg: parseFloat(averageQuantity.toFixed(2)),
      };
    } else {
      return { oilAvg: 0, quantityAvg: 0 }; // Handle the case where harvestData is null or undefined
    }
  }, [harvestData]);
  console.log(avgOilPercentage);

  return (
    <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3">
      <StatsDataCard title="total trees" value={300} />
      <StatsDataCard title="Oil %" value={avgOilPercentage.oilAvg} />
      <StatsDataCard
        title="Harvest in tons"
        value={avgOilPercentage.quantityAvg}
      />
    </div>
  );
};

export default StatsDataContainer;
