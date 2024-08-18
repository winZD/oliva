"use client";
import { HarvestType } from "@/utils/models/harvestModel";
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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteHarvestAction,
  getHarvestsAction,
} from "@/utils/actions/harvestActions/actions";
import AlertDialogComponent from "./AlertDialogComponent";

const HarvestTable = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data, isPending } = useQuery({
    queryKey: ["harvests"],
    queryFn: () => getHarvestsAction(),
  });
  const { mutate, isPending: mutationIsPending } = useMutation({
    mutationFn: (id: string) => deleteHarvestAction(id),
    onSuccess: (data) => {
      if (!data) {
        /*  toast({
          description: "there was an error",
        }); */
        return;
      }
      queryClient.invalidateQueries({ queryKey: ["harvests"] });
      queryClient.invalidateQueries({ queryKey: ["harvest"] });

      /*  toast({ description: "jorchard removed" }); */
    },
  });
  return (
    <div>
      <Button onClick={() => router.push(`add-harvest`)} size={"default"}>
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
              <TableCell className="font-medium">
                {harvest?.orchard?.name}
              </TableCell>
              <TableCell>{harvest.year.getFullYear()}</TableCell>
              <TableCell>{harvest.oil_percentage}</TableCell>
              <TableCell className="text-right">{harvest.quantity}</TableCell>
              <TableCell className="text-right">
                {/*  <Button
                   onClick={async () => await mutate(orchard?.id)}
                  size={"default"}
                >
                  Delete
                </Button> */}
                <AlertDialogComponent
                  props={{
                    id: harvest?.id,
                    openDialogBtnName: "Delete",
                    dialogTitle: "Are you absolutely sure?",
                    dialogDescription:
                      "This action cannot be undone. This will permanently delete your harvest and remove your data from our servers.",
                    cancelBtnName: "Cancel",
                    continueBtnName: "Continue",
                    continue: () => mutate(harvest?.id),
                  }}
                />
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
    </div>
  );
};

export default HarvestTable;
