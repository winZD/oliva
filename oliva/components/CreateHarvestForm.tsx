"use client";
import { useForm } from "react-hook-form";
import { CustomFormField } from "./FormComponents";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "./ui/form";
import DatePicker from "./DatePicker";
import { Button } from "./ui/button";
import CustomFormSelect from "./CustomFormSelect";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getOrchardsAction } from "@/utils/actions/orchardActions/actions";
import { createAndEditHarvestFormSchema } from "@/utils/actions/harvestActions/validations";
import {
  CreateAndEditHarvestType,
  TransactionType,
} from "@/utils/models/harvestModel";
import { createHarvestAction } from "@/utils/actions/harvestActions/actions";
import { useRouter } from "next/navigation";

const CreateHarvestForm = () => {
  const { data, isPending } = useQuery({
    queryKey: ["orchards"],
    queryFn: () => getOrchardsAction(),
  });
  const router = useRouter();
  const queryClient = useQueryClient();
  const form = useForm<CreateAndEditHarvestType>({
    resolver: zodResolver(createAndEditHarvestFormSchema),
    defaultValues: {
      position: "92866148-9a11-401a-b2f2-847873864243",
      year: new Date(),
      oil_percentage: 0,
      quantity: 0,
      orchardId: "",
      transactionType: undefined,
      income: "",
      expense: "",
    },
  });

  const { isPending: mutationIsPending, mutate } = useMutation({
    mutationFn: (values: CreateAndEditHarvestType) =>
      createHarvestAction({ ...values }),
    onSuccess: (data) => {
      if (!data) {
        /*   toast({ description: "There was an error!" }); */
        return;
      }
      /* toast({ description: "Job created!" }); */
      queryClient.invalidateQueries({ queryKey: ["harvests"] });

      router.push("/harvests");
    },
  });

  const onSubmit = (values: CreateAndEditHarvestType) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    mutate(values);
    console.log({ ...values });
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-muted p-8 rounded"
      >
        <h2 className="capitalize font-semibold text-4xl mb-6">edit harvest</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-end ">
          <DatePicker name="year" control={form.control} label="year" />
          <CustomFormSelect
            name="orchardId"
            placeholder="choose orchard"
            control={form.control}
            labelText="orchards"
            items={data || []}
          />
          <CustomFormSelect
            name="transactionType"
            placeholder="choose transaction"
            control={form.control}
            labelText="transaction type"
            items={Object.values(TransactionType).map((value) => ({
              id: value,
              name: value,
            }))}
          />
          <CustomFormField name={"oil_percentage"} control={form.control} />
          <CustomFormField name={"quantity"} control={form.control} />
          {form.getValues("transactionType") === "income" && (
            <CustomFormField name={"income"} control={form.control} />
          )}{" "}
          {form.getValues("transactionType") === "expense" && (
            <CustomFormField name={"expense"} control={form.control} />
          )}
          <Button type="submit">Add</Button>
        </div>
      </form>
    </Form>
  );
};

export default CreateHarvestForm;
