"use client";
import { useForm } from "react-hook-form";
import { CustomFormField } from "./FormComponents";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "./ui/form";
import DatePicker from "./DatePicker";
import { Button } from "./ui/button";

const CreateHarvestForm = () => {
  const formSchema = z.object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    date: z.date().transform((date) => date.toISOString()),
  });

  const form = useForm<any>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      date: null,
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
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-end ">
          <CustomFormField name={"name"} control={form.control} />
          <DatePicker name="date" control={form.control} />
          {/* <CustomFormField/> */}
        </div>
        <Button type="submit">Add</Button>
      </form>
    </Form>
  );
};

export default CreateHarvestForm;
