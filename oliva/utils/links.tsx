import { AppWindow, Trees } from "lucide-react";

type NavLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const links: NavLink[] = [
  {
    href: "/orchards",
    label: "orchards",
    icon: <Trees />,
  },
  {
    href: "/add-orchard",
    label: "add orchard",
    icon: <AppWindow />,
  },
];

export default links;
