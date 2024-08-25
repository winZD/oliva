"use client";
import { createAndEditOrchardFormSchema } from "@/utils/actions/orchardActions/validations";
import { CreateAndEditIncomeAndExpenseType } from "@/utils/models/incomeAndExpenseModel";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "./ui/form";
import DatePicker from "./DatePicker";
import CustomFormSelect from "./CustomFormSelect";
import { CustomFormField } from "./FormComponents";
import { Button } from "./ui/button";
import { useQuery } from "@tanstack/react-query";
import { getHarvestsAction } from "@/utils/actions/harvestActions/actions";

const EditIncomeAndExpenseForm = ({
  incomeAndExpenseId,
}: {
  incomeAndExpenseId: string;
}) => {
  const { data: harvestData, isPending } = useQuery({
    queryKey: ["harvests"],
    queryFn: () => getHarvestsAction(),
  });
  console.log(harvestData);
  // 1. Define your form.
  const form = useForm<CreateAndEditIncomeAndExpenseType>({
    resolver: zodResolver(createAndEditOrchardFormSchema),
    defaultValues: {
      expense: 0,
      income: 0,
      year: undefined,
    },
  });

  function onSubmit(values: CreateAndEditIncomeAndExpenseType) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    /*  mutate(values); */
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-muted p-8 rounded"
      >
        <h2 className="capitalize font-semibold text-4xl mb-6">edit harvest</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-end ">
          <CustomFormSelect
            name="harvestId"
            placeholder="choose harvest"
            control={form.control}
            labelText="harvests"
            items={
              harvestData?.map((n) => ({
                name: n.year.getFullYear().toString(),
                id: n.id,
              })) || []
            }
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
