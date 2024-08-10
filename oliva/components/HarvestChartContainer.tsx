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
import { useRouter } from "next/navigation";

const HarvestChartContainer = () => {
  const router = useRouter();

  const { data, isPending } = useQuery({
    queryKey: ["harvests"],
    queryFn: () => getHarvestsAction(),
  });
  return (
    <>
      <HarvestCard data={data ? data : []} />
      <Button
        /*  onClick={async () => await mutate(orchard?.id)} */
        size={"default"}
      >
        Add
      </Button>
      <Table>
        <TableCaption>A list of your harvests.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] capitalize">Position</TableHead>
            <TableHead>Year</TableHead>
            <TableHead>Oil(%)</TableHead>
            <TableHead className="text-right">Quantity(t)</TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((harvest) => (
            <TableRow key={harvest.id}>
              <TableCell className="font-medium">{harvest.position}</TableCell>
              <TableCell>{harvest.year.getFullYear()}</TableCell>
              <TableCell>{harvest.oil_percentage}</TableCell>
              <TableCell className="text-right">{harvest.quantity}</TableCell>
              <TableCell className="text-right">
                <Button
                  /*  onClick={async () => await mutate(orchard?.id)} */
                  size={"default"}
                >
                  Delete
                </Button>
              </TableCell>
              <TableCell className="text-right">
                <Button
                  onClick={() => router.push(`harvests/${harvest?.id}`)}
                  size={"icon"}
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
};

export default HarvestChartContainer;
