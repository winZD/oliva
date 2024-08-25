"use client";
import { CreateAndEditIncomeAndExpenseType } from "@/utils/models/incomeAndExpenseModel";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "./ui/form";
import DatePicker from "./DatePicker";
import CustomFormSelect from "./CustomFormSelect";
import { CustomFormField } from "./FormComponents";
import { Button } from "./ui/button";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getHarvestsAction } from "@/utils/actions/harvestActions/actions";
import { useRouter } from "next/navigation";
import { createAndEditIncomeAndExpenseFormSchema } from "@/utils/actions/incomeAndExpenseActions/validations";
import { getIncomeAndExpenseAction } from "@/utils/actions/incomeAndExpenseActions/actions";

const EditIncomeAndExpenseForm = ({
  incomeAndExpenseId,
}: {
  incomeAndExpenseId: string;
}) => {
  const { data: harvestData, isPending } = useQuery({
    queryKey: ["harvests"],
    queryFn: () => getHarvestsAction(),
  });
  const prepareData =
    harvestData?.map((n) => ({
      id: n.id,
      name: n.year.getFullYear().toString(),
    })) || [];
  const { data: incomeAndExpenseData } = useQuery({
    queryKey: ["incomeAndExpense", incomeAndExpenseId],
    queryFn: () => getIncomeAndExpenseAction(incomeAndExpenseId),
  });

  // 1. Define your form.
  const form = useForm<CreateAndEditIncomeAndExpenseType>({
    resolver: zodResolver(createAndEditIncomeAndExpenseFormSchema),
    defaultValues: {
      expense: 0,
      income: 0,
      year: new Date(),
      harvestId: incomeAndExpenseData?.harvestId || "",
    },
  });

  const router = useRouter();
  const queryClient = useQueryClient();
  /* const { mutate } = useMutation({
    mutationFn: (values: CreateAndEditIncomeAndExpenseType) =>
      updateHarvestAction(harvestId, values),
    onSuccess: (data) => {
      if (!data) {
          //toast({ description: "There was an error!" });
        return;
      }
      //toast({ description: "ORchard edited!" });
      queryClient.invalidateQueries({ queryKey: ["incomesAndExpenses"] });
      queryClient.invalidateQueries({ queryKey: ["incomeANdExpense", incomeAndExpenseId] });

      router.push("/harvests");
    },
  }); */

  function onSubmit(values: CreateAndEditIncomeAndExpenseType) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    /*  mutate(values); */
    console.log("KLIK");
    console.log({ ...values });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-muted p-5 rounded"
      >
        <h2 className="capitalize font-semibold text-4xl mb-6">edit IE</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-end ">
          <p>{incomeAndExpenseData?.expense}</p>
          <CustomFormSelect
            name="harvestId"
            placeholder="choose harvest"
            control={form.control}
            labelText="harvests"
            items={prepareData}
          />
          <CustomFormField name={"income"} control={form.control} />
          <CustomFormField name={"expense"} control={form.control} />
          <DatePicker name="year" control={form.control} label="year" />
          <Button type="submit">Add</Button>
        </div>
      </form>
    </Form>
  );
};

export default EditIncomeAndExpenseForm;
