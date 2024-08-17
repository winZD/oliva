"use client";
import { getHarvestByIdAction } from "@/utils/actions/harvestActions/actions";
import { createAndEditHarvestFormSchema } from "@/utils/actions/harvestActions/validations";
import { getOrchardsAction } from "@/utils/actions/orchardActions/actions";
import { CreateAndEditHarvestType } from "@/utils/models/harvestModel";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Form } from "./ui/form";
import DatePicker from "./DatePicker";
import CustomFormSelect from "./CustomFormSelect";
import { CustomFormField } from "./FormComponents";
import { Button } from "./ui/button";

const EditHarvestForm = ({ harvestId }: { harvestId: string }) => {
  const { data: orchardData, isPending } = useQuery({
    queryKey: ["orchards"],
    queryFn: () => getOrchardsAction(),
  });
  const { data: harvestData } = useQuery({
    queryKey: ["harvest", harvestId],
    queryFn: () => getHarvestByIdAction(harvestId),
  });
  const router = useRouter();
  const queryClient = useQueryClient();
  const form = useForm<CreateAndEditHarvestType>({
    resolver: zodResolver(createAndEditHarvestFormSchema),
    defaultValues: {
      position: harvestData?.id || "",
      year: harvestData?.year || new Date(),
      oil_percentage: harvestData?.oil_percentage || 0,
      quantity: harvestData?.quantity || 0,
      orchardId: harvestData?.orchardId || "",
    },
  });

  const onSubmit = (values: CreateAndEditHarvestType) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    /*  mutate(values); */
    console.log({ ...values });
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-muted p-8 rounded"
      >
        <h2 className="capitalize font-semibold text-4xl mb-6">add harvest</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-end ">
          <DatePicker name="year" control={form.control} label="year" />
          <CustomFormSelect
            name="orchardId"
            placeholder="choose orchard"
            control={form.control}
            labelText="orchards"
            items={orchardData || []}
          />
          <CustomFormField name={"oil_percentage"} control={form.control} />
          <CustomFormField name={"quantity"} control={form.control} />
          <Button type="submit">Edit</Button>
        </div>
      </form>
    </Form>
  );
};

export default EditHarvestForm;
