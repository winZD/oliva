import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { AlignLeft } from "lucide-react";
import links from "@/utils/links";
import Link from "next/link";

const LinksDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="lg:hidden">
        <Button variant="outline" size={"icon"}>
          <AlignLeft />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="lg:hidden">
        {links.map((link) => (
          <DropdownMenuItem asChild key={link.href}>
            <Link href={link.href} className="flex items-center gap-x-2 ">
              {link.icon} <span className="capitalize">{link.label}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LinksDropdown;
