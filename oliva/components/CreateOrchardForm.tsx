"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "./ui/form";
import { CustomFormField } from "./FormComponents";
import { Button } from "./ui/button";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  place: z.string().min(2, {
    message: "Place must be at least 2 characters.",
  }),
  size: z.string().min(2, {
    message: "Size must be at least 2 characters.",
  }),
  trees: z.string().refine(
    (v) => {
      let n = Number(v);
      return !isNaN(n) && v?.length > 0;
    },
    { message: "Invalid number" }
  ),
  note: z.string(),
});
const CreateOrchardForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      place: "",
      size: "",
      trees: undefined,
      note: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <CustomFormField
          name={"name"}
          control={form.control}
          description="This is your orchard name."
        />
        <CustomFormField
          name={"place"}
          control={form.control}
          description="This is your orchard position."
        />
        <CustomFormField
          name={"size"}
          control={form.control}
          description="This is your orchard size."
        />
        <CustomFormField
          name={"trees"}
          control={form.control}
          description="This is number of your orchard trees."
        />
        <CustomFormField
          name={"note"}
          control={form.control}
          description="Write some note."
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default CreateOrchardForm;
