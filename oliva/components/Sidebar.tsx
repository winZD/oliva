"use client";
import links from "@/utils/links";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "../public/logo_2.svg";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="py-4 px-8 h-full bg-muted">
      <Link href={"/"}>
        <Image height={50} src={Logo} alt="logo" className="mx-auto" priority />
      </Link>

      <div className="flex flex-col mt-20 gap-y-4">
        {links.map((link) => {
          return (
            <Button
              asChild
              key={link.href}
              variant={pathname === link.href ? "default" : "link"}
            >
              <Link href={link.href} className="flex items-center gap-x-2 ">
                {link.icon} <span className="capitalize">{link.label}</span>
              </Link>
            </Button>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
