"use client";

import { useQuery } from "@tanstack/react-query";
import HarvestCard from "./HarvestCard";
import { getHarvestsAction } from "@/utils/actions/harvestActions/actions";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Button } from "./ui/button";
import { useParams, usePathname, useRouter } from "next/navigation";
import HarvestTable from "./HarvestTable";

const HarvestChartContainer = () => {
  const pathname = usePathname();

  const { data, isPending } = useQuery({
    queryKey: ["harvests"],
    queryFn: () => getHarvestsAction(),
  });
  return <HarvestCard data={data?.length ? data : []} />;
};

export default HarvestChartContainer;
