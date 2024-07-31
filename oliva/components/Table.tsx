"use client";
import { useQuery } from "@tanstack/react-query";
import { Button } from "./ui/button";
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
import { getOrchardsAction } from "@/utils/orchardActions/actions";

const CustomTable = () => {
  const { data, isPending } = useQuery({
    queryKey: ["orchards"],
    queryFn: () => getOrchardsAction(),
  });
  const orchards = data || [];
  if (isPending) return <h2 className="text-xl">Please wait...</h2>;
  if (orchards.length < 1) return <div>No jobs found...</div>;

  return (
    <Table>
      <TableCaption>A list of your orchards.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Size</TableHead>
          <TableHead>Olive trees</TableHead>
          <TableHead className="text-right">Position</TableHead>
          <TableHead></TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orchards?.map((orchard) => (
          <TableRow key={orchard.id}>
            <TableCell className="font-medium">{orchard.name}</TableCell>
            <TableCell>{orchard.size}</TableCell>
            <TableCell>{orchard.trees}</TableCell>
            <TableCell className="text-right">{orchard.place}</TableCell>
            <TableCell className="text-right">
              <Button size={"default"}>Delete</Button>
            </TableCell>
            <TableCell className="text-right">
              <Button size={"icon"}>Edit</Button>
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
  );
};

export default CustomTable;
