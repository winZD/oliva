"use client";
import { chartConfig, pruneHarvestData } from "@/utils/mockData";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";

const PrunningAndHarvestingCarData = ({ data }: { data: any[] }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle> Prunning And Harvesting</CardTitle>
        <CardDescription> Prunning And Harvesting Data</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default PrunningAndHarvestingCarData;
