"use client";
import { useRouter } from "next/navigation";
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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteIncomeAndExpenseAction,
  getIncomesAndExpensesAction,
} from "@/utils/actions/incomeAndExpenseActions/actions";
import AlertDialogComponent from "./AlertDialogComponent";

const IncomeExpenseTable = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data, isPending } = useQuery({
    queryKey: ["incomesAndExpenses"],
    queryFn: () => getIncomesAndExpensesAction(),
  });

  const { mutate, isPending: mutationIsPending } = useMutation({
    mutationFn: (id: string) => deleteIncomeAndExpenseAction(id),
    onSuccess: (data) => {
      if (!data) {
        /*  toast({
            description: "there was an error",
          }); */
        return;
      }
      queryClient.invalidateQueries({ queryKey: ["incomesAndExpenses"] });
      queryClient.invalidateQueries({ queryKey: ["incomeAndExpense"] });

      /*  toast({ description: "jorchard removed" }); */
    },
  });

  const incomesAndExpenses = data || [];
  if (isPending) return <h2 className="text-xl">Please wait...</h2>;
  if (incomesAndExpenses.length < 1) return <div>No jobs found...</div>;

  return (
    <div>
      <div className="flex justify-end py-8">
        <Button onClick={() => ""} className="capitalize w-28" type="submit">
          {"add new"}
        </Button>
      </div>
      <Table>
        <TableCaption>Income and expense list</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Income</TableHead>
            <TableHead>Expense</TableHead>
            <TableHead>Harvest year</TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {incomesAndExpenses?.map((incomeAndExpense) => (
            <TableRow key={incomeAndExpense.id}>
              <TableCell className="font-medium">
                {incomeAndExpense.income}
              </TableCell>
              <TableCell>{incomeAndExpense.expense}</TableCell>
              <TableCell>
                {incomeAndExpense.harvest?.year.getFullYear()}
              </TableCell>
              <TableCell className="text-right">
                <AlertDialogComponent
                  props={{
                    id: incomeAndExpense?.id,
                    openDialogBtnName: "Delete",
                    dialogTitle: "Are you absolutely sure?",
                    dialogDescription:
                      "This action cannot be undone. This will permanently delete your orchard and remove your data from our servers.",
                    cancelBtnName: "Cancel",
                    continueBtnName: "Continue",
                    continue: mutate,
                  }}
                />
              </TableCell>
              <TableCell className="text-right">
                <Button
                  onClick={() =>
                    router.push(`incomes-and-expenses/${incomeAndExpense?.id}`)
                  }
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

export default IncomeExpenseTable;
