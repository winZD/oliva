import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const HarvestCard = () => {
  // Updated chartData to represent years instead of months
  const chartData = [
    { year: "2023", desktop: 186 },
    { year: "2022", desktop: 305 },
    { year: "2021", desktop: 237 },
    { year: "2020", desktop: 73 },
    { year: "2019", desktop: 0 },
    { year: "2018", desktop: 0 },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "green",
    },
  } satisfies ChartConfig;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Harvest Chart - Linear</CardTitle>
        {/* Updated description to reflect years */}
        <CardDescription>2023 - 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 4)} // Adjusted to slice the first 4 characters for year
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="linear"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months (now spanning across
          years)
        </div>
      </CardFooter>
    </Card>
  );
};

export default HarvestCard;
