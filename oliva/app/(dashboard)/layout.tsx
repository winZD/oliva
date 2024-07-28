import Navbar from "@/components/Navbar";
import { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="grid">
      <div>
        <Navbar />
      </div>
      <div>Sidebar</div>

      {children}
    </main>
  );
};

export default layout;
