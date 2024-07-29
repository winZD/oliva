import FertilizerCard from "@/components/FertilizerCard";
import HarvestCard from "@/components/HarvestCard";
import PrunningAndHarvestingCarData from "@/components/PrunningAndHarvestingCard";

import CustomTable from "@/components/Table";
import React from "react";

const OrchardsPage = () => {
  const data = [
    { orchard: "Orchard 1", size: 30, position: "North", oliveTrees: 25 },
    { orchard: "Orchard 2", size: 45, position: "South", oliveTrees: 35 },
    // Add more orchards as needed
  ];
  return (
    <div>
      <h1 className="text-2xl">ORCHARDS</h1>
      <div className="grid grid-cols-6 gap-5">
        <div className="col-span-2">
          <FertilizerCard />
        </div>
        <div className="col-span-2">
          <PrunningAndHarvestingCarData />
        </div>
        <div className="col-span-2">
          <HarvestCard />
        </div>
        <div className="col-span-6">
          <CustomTable data={data} />
        </div>
      </div>
    </div>
  );
};

export default OrchardsPage;
