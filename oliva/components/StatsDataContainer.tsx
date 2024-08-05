"use client";
import { getOrchardsAction } from "@/utils/orchardActions/actions";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import StatsDataCard from "./StatsDataCard";

const StatsDataContainer = () => {
  const { data, isPending } = useQuery({
    queryKey: ["orchards"],
    queryFn: () => getOrchardsAction(),
  });

  return (
    <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3">
      <StatsDataCard title="total trees" value={300} />
      <StatsDataCard title="Oil %" value={15} />
      <StatsDataCard title="Harvest in tons" value={12} />
    </div>
  );
};

export default StatsDataContainer;
