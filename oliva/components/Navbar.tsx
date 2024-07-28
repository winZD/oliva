import Link from "next/link";
import LinksDropdown from "./LinksDropdown";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="bg-muted py-4 px-4 flex items-start justify-between">
      <Button>USER</Button>
      <div>
        <LinksDropdown />
      </div>
    </div>
  );
};

export default Navbar;
