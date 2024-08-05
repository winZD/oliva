"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";
import { chartConfig2 } from "@/utils/mockData";
import { Cell, Label, Pie, PieChart } from "recharts";
import { TrendingUp } from "lucide-react";
import { OrchardType } from "@/utils/models/orchardModel";
import { barColors } from "@/utils/chartColors";
import { Button } from "./ui/button";

const OrchardCard = ({ data }: { data: OrchardType[] }) => {
  const totalTrees = React.useMemo(() => {
    return data.reduce((acc, curr) => acc + curr.trees, 0);
  }, []);

  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>TOTAL Orchards</CardTitle>
        <CardDescription>Orchards by number of trees</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={{}}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={data}
              dataKey="trees"
              nameKey="name"
              innerRadius={60}
              strokeWidth={5}
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={barColors[index % 20]} />
              ))}

              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalTrees.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Trees
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
        <Button className="capitalize ">detailss</Button>
      </CardFooter>
    </Card>
  );
};

export default OrchardCard;
