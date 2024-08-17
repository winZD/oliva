import CreateHarvestForm from "@/components/CreateHarvestForm";
import EditHarvestForm from "@/components/EditHarvestForm";
import { CustomFormField } from "@/components/FormComponents";
import { getHarvestByIdAction } from "@/utils/actions/harvestActions/actions";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";

const HarvestDetailPage = async ({ params }: { params: { id: string } }) => {
  console.log(params.id);

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["harvest", params?.id],
    queryFn: () => getHarvestByIdAction(params?.id),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <EditHarvestForm harvestId={params?.id} />
    </HydrationBoundary>
  );
};

export default HarvestDetailPage;
