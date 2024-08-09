import { TrendingUp } from "lucide-react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";
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
import { HarvestType } from "@/utils/models/harvestModel";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

const HarvestCard = ({ data }: { data: HarvestType[] }) => {
  // Updated chartData to represent years instead of months

  const chartConfig = {
    quantity: {
      label: "Quantity",
      color: "green",
    },
  } satisfies ChartConfig;

  const CustomTooltip = ({
    active,
    payload,
    label,
  }: TooltipProps<ValueType, NameType>) => {
    console.log(label);
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#ffff",
            padding: "5px",
            border: "1px solid #cccc",
          }}
        >
          <p className="label">{`${label} ${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Harvest Chart - Linear</CardTitle>
        {/* Updated description to reflect years */}
        <CardDescription>2014- 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={data}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => {
                const date = new Date(value).getFullYear();
                return date.toString();
              }}
            />
            <ChartTooltip cursor={false} content={<s />} />
            <Line
              dataKey="quantity"
              type="linear"
              strokeWidth={2}
              stroke="var(--color-quantity)"
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
