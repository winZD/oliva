"use client";
import { CreateAndEditOrchardType } from "@/utils/models/orchardModel";
import {
  getOrchardByIdAction,
  updateOrchardAction,
} from "@/utils/orchardActions/actions";
import { createAndEditOrchardFormSchema } from "@/utils/orchardActions/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Form } from "./ui/form";
import { CustomFormField } from "./FormComponents";
import { Button } from "./ui/button";

const EditOrchardForm = ({ orchardId }: { orchardId: string }) => {
  const queryClient = useQueryClient();

  /*   const { toast } = useToast() */ const router = useRouter();

  const { data } = useQuery({
    queryKey: ["orchard", orchardId],
    queryFn: () => getOrchardByIdAction(orchardId),
  });
  const form = useForm<CreateAndEditOrchardType>({
    resolver: zodResolver(createAndEditOrchardFormSchema),
    defaultValues: {
      name: data?.name || "",
      place: data?.place || "",
      size: data?.size || "",
      trees: data?.trees.toString() || "",
      note: data?.note || "",
    },
  });

  const { isPending, mutate } = useMutation({
    mutationFn: (values: CreateAndEditOrchardType) =>
      updateOrchardAction(orchardId, values),
    onSuccess: (data) => {
      if (!data) {
        /*   toast({ description: "There was an error!" }); */
        return;
      }
      /* toast({ description: "ORchard edited!" }); */
      queryClient.invalidateQueries({ queryKey: ["orchards"] });
      queryClient.invalidateQueries({ queryKey: ["orchard", orchardId] });

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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-muted p-8 rounded"
      >
        <h2 className="capitalize font-semibold text-4xl mb-6">edit orchard</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-start">
          <CustomFormField
            name={"name"}
            control={form.control}
            /* description="This is your orchard name." */
          />
          <CustomFormField
            name={"place"}
            control={form.control}
            /* description="This is your orchard position." */
          />
          <CustomFormField
            name={"size"}
            control={form.control}
            /*  description="This is your orchard size." */
          />
          <CustomFormField
            name={"trees"}
            control={form.control}
            /*   description="This is number of your orchard trees." */
          />
          <CustomFormField
            name={"note"}
            control={form.control}
            /*  description="Write some note." */
          />
        </div>
        <div className="flex justify-end py-8">
          <Button className="capitalize w-28" type="submit">
            {isPending ? "loading..." : "edit"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default EditOrchardForm;
