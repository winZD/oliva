import {
  AppWindow,
  ChartColumnBig,
  Cherry,
  HandCoins,
  TreeDeciduous,
} from "lucide-react";

type NavLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const links: NavLink[] = [
  {
    href: "/orchards",
    label: "orchards",
    icon: <TreeDeciduous />,
  },
  /*  {
    href: "/add-orchard",
    label: "add orchard",
    icon: <AppWindow />,
  }, */
  {
    href: "/harvests",
    label: "harvests",
    icon: <Cherry />,
  },
  {
    href: "/expenses",
    label: "expenses",
    icon: <ChartColumnBig />,
  },
  {
    href: "/incomes",
    label: "incomes",
    icon: <HandCoins />,
  },
];

export default links;
