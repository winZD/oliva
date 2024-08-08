import EditOrchardForm from "@/components/EditOrchardForm";
import { getOrchardByIdAction } from "@/utils/actions/orchardActions/actions";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const OrchardDetailPage = async ({ params }: { params: { id: string } }) => {
  console.log(params.id);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["orchard", params?.id],
    queryFn: () => getOrchardByIdAction(params?.id),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <EditOrchardForm orchardId={params?.id} />
    </HydrationBoundary>
  );
};

export default OrchardDetailPage;
