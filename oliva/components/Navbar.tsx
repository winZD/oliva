import Link from "next/link";
import LinksDropdown from "./LinksDropdown";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="bg-muted py-4 px-4 flex items-start justify-between">
      <div>
        <LinksDropdown />
      </div>
      <Button>USER</Button>
    </div>
  );
};

export default Navbar;
