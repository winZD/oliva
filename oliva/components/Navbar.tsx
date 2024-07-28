import LinksDropdown from "./LinksDropdown";

const Navbar = () => {
  return (
    <div className="bg-primary py-4 px-4 flex items-start justify-between">
      <div>
        <LinksDropdown />
      </div>
    </div>
  );
};

export default Navbar;
