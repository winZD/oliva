"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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

import { useRouter } from "next/navigation";
import {
  deleteOrchardAction,
  getOrchardsAction,
} from "@/utils/actions/orchardActions/actions";

const CustomTable = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data, isPending } = useQuery({
    queryKey: ["orchards"],
    queryFn: () => getOrchardsAction(),
  });

  const { mutate, isPending: mutationIsPending } = useMutation({
    mutationFn: (id: string) => deleteOrchardAction(id),
    onSuccess: (data) => {
      if (!data) {
        /*  toast({
          description: "there was an error",
        }); */
        return;
      }
      queryClient.invalidateQueries({ queryKey: ["orchards"] });
      queryClient.invalidateQueries({ queryKey: ["orchard"] });

      /*  toast({ description: "jorchard removed" }); */
    },
  });

  const orchards = data || [];
  if (isPending) return <h2 className="text-xl">Please wait...</h2>;
  if (orchards.length < 1) return <div>No jobs found...</div>;

  return (
    <div>
      <div className="flex justify-end py-8">
        <Button onClick={() => ""} className="capitalize w-28" type="submit">
          {"add new"}
        </Button>
      </div>
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
                <Button
                  onClick={async () => await mutate(orchard?.id)}
                  size={"default"}
                >
                  Delete
                </Button>
              </TableCell>
              <TableCell className="text-right">
                <Button
                  onClick={() => router.push(`orchards/${orchard?.id}`)}
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
    </div>
  );
};

export default CustomTable;
