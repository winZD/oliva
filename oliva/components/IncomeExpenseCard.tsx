"use client";
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { IncomeAndExpenseType } from "@/utils/models/incomeAndExpenseModel";
import CustomFormSelect from "./CustomFormSelect";
import { useForm } from "react-hook-form";
import { Form } from "./ui/form";
import { useQuery } from "@tanstack/react-query";
import { getHarvestsByYearsAction } from "@/utils/actions/harvestActions/actions";
import { HarvestType } from "@/utils/models/harvestModel";

const IncomeExpenseCard = ({ data }: { data: IncomeAndExpenseType[] }) => {
  const { data: yearData } = useQuery({
    queryKey: ["harvestsByYears"],
    queryFn: () => getHarvestsByYearsAction(),
  });
  console.log(yearData);
  const chartConfig = {
    expense: {
      label: "Expense",
      color: "red",
    },
    income: {
      label: "Income",
      color: "green",
    },
  } satisfies ChartConfig;

  const form = useForm<{ year: string }>({
    defaultValues: {
      year: "2024",
    },
  });

  return (
    <Card className="bg-muted">
      <CardHeader>
        <Form {...form}>
          <form>
            <CustomFormSelect
              name="year"
              labelText="search"
              placeholder="Enter year"
              control={form.control}
              items={
                yearData?.map((data) => ({
                  id: data?.id || "",
                  name: data?.harvestYear?.toString() || "",
                })) ||
                // Add other years as needed
                []
              }
            />
          </form>
        </Form>
        <CardTitle>Income/Expense Chart - Multiple</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={"harvest.year"}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                const date = new Date(value).getFullYear();
                return date.toString();
              }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <ChartLegend
              content={
                data.length === 0 ? <p>No data</p> : <ChartLegendContent />
              }
            />
            <Bar dataKey="expense" fill="var(--color-expense)" radius={4} />
            <Bar dataKey="income" fill="var(--color-income)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
};

export default IncomeExpenseCard;
