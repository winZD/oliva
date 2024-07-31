"use client";

import { useQuery } from "@tanstack/react-query";
import OrchardCard from "./OrchardCard";
import { getOrchardsAction } from "@/utils/orchardActions/actions";

const OrchardChartContainer = () => {
  const { data, isPending } = useQuery({
    queryKey: ["orchards"],
    queryFn: () => getOrchardsAction(),
  });
  return <OrchardCard data={data!} />;
};

export default OrchardChartContainer;
