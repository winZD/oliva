"use client";
import { useForm } from "react-hook-form";
import { CustomFormField } from "./FormComponents";
import { createAndEditOrchardFormSchema } from "@/utils/actions/orchardActions/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateAndEditOrchardType } from "@/utils/models/orchardModel";
import { z } from "zod";
import { Form } from "./ui/form";

const CreateHarvestForm = () => {
  const formSchema = z.object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
  });
  const form = useForm<any>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });
  function onSubmit(values: any) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-muted p-8 rounded"
      >
        <h2 className="capitalize font-semibold text-4xl mb-6">add harvest</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-start">
          <CustomFormField name={"name"} control={form.control} />
        </div>
      </form>
    </Form>
  );
};

export default CreateHarvestForm;
