import { Control } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

type CustomFormFieldProps = {
  name: string;
  control: Control<any>;
  description?: string;
};

export const CustomFormField = ({
  name,
  control,
  description,
}: CustomFormFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="capitalize">{name}</FormLabel>
          <FormControl>
            <Input placeholder={name} {...field} />
          </FormControl>
          {/*  <FormDescription>{description}</FormDescription> */}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
