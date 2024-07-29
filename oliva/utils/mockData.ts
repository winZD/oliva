import { ChartConfig } from "@/components/ui/chart";

export const pruneHarvestData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

export const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export const orchards = [
  {
    property: "Špetica",
    size: 1300,
    oliveTrees: 32,
    fill: "hsl(var(--chart-1))",
  },
  { property: "Gojan", size: 420, oliveTrees: 17, fill: "hsl(var(--chart-2))" },
  {
    property: "Brajde Ardanića",
    desktop: 800,
    oliveTrees: 28,
    fill: "hsl(var(--chart-3))",
  },
  {
    property: "Šaragovci",
    size: 860,
    oliveTrees: 30,
    fill: "hsl(var(--chart-4))",
  },
  {
    property: "Zgonić",
    size: 1200,
    oliveTrees: 25,
    fill: "hsl(var(--chart-5))",
  },
];

export const chartConfig2 = {
  trees: {
    label: "Olive trees",
  },
  spetica: {
    label: "Špetica",
    color: "hsl(var(--chart-1))",
  },
  gojan: {
    label: "Gojan",
    color: "hsl(var(--chart-2))",
  },
  brajdeArdanica: {
    label: "Brajde Ardanića",
    color: "hsl(var(--chart-3))",
  },
  saragovci: {
    label: "Šaragovci",
    color: "hsl(var(--chart-4))",
  },
  zgonic: {
    label: "Zgonić",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;
