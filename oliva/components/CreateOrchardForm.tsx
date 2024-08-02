"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "./ui/form";
import { CustomFormField } from "./FormComponents";
import { Button } from "./ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { createOrchardAction } from "@/utils/orchardActions/actions";
import { CreateAndEditOrchardType } from "@/utils/models/orchardModel";
import { createAndEditOrchardFormSchema } from "@/utils/orchardActions/validations";

/* const formSchema = z.object({
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
}); */
const CreateOrchardForm = () => {
  // 1. Define your form.
  const form = useForm<CreateAndEditOrchardType>({
    resolver: zodResolver(createAndEditOrchardFormSchema),
    defaultValues: {
      name: "",
      place: "",
      size: "",
      trees: 0,
      note: "",
    },
  });

  const queryClient = useQueryClient();

  /*   const { toast } = useToast() */ const router = useRouter();

  const { isPending, mutate } = useMutation({
    mutationFn: (values: CreateAndEditOrchardType) =>
      createOrchardAction({ ...values }),
    onSuccess: (data) => {
      if (!data) {
        /*   toast({ description: "There was an error!" }); */
        return;
      }
      /* toast({ description: "Job created!" }); */
      queryClient.invalidateQueries({ queryKey: ["orchards"] });

      router.push("/orchards");
    },
  });

  function onSubmit(values: CreateAndEditOrchardType) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    mutate(values);
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
