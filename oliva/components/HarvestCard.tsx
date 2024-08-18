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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Button } from "./ui/button";
import { useParams, usePathname, useRouter } from "next/navigation";

const HarvestCard = ({ data }: { data: HarvestType[] }) => {
  const router = useRouter();
  const pathname = usePathname();
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

  const fromYearToYear = (data: HarvestType[]): string => {
    const mappedYears = data.map((record) => record.year);

    const fromYear = mappedYears[0]?.getUTCFullYear();
    const toYear = mappedYears[mappedYears.length - 1]?.getUTCFullYear();
    return `${fromYear || ""} - ${toYear || ""}`;
  };

  const calculateGrowthRate = (data: HarvestType[]) => {
    const epsilon = 1e-9;
    console.log(epsilon);
    const adjustedData = data.map((item) => ({
      ...item,
      quantity: item.quantity === 0 ? epsilon : item.quantity,
    }));
    let growthRate = 0;
    for (let i = 1; i < adjustedData.length; i++) {
      const prevAvg = Number(adjustedData[i - 1].quantity);

      const currAvg = Number(adjustedData[i].quantity);
      growthRate += ((currAvg - prevAvg) / prevAvg) * 100;
    }

    return growthRate.toFixed(1); // Return as percentage
  };

  console.log(calculateGrowthRate(data));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Harvest Chart - Linear</CardTitle>
        {/* Updated description to reflect years */}
        <CardDescription>{fromYearToYear(data)}</CardDescription>
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
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
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
          Showing total harvests (now spanning across years)
        </div>
      </CardFooter>
      {pathname !== "/harvests" && (
        <Button className="capitalize " onClick={() => router.push("harvests")}>
          details
        </Button>
      )}
    </Card>
  );
};

export default HarvestCard;
