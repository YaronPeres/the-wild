import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";

export function useDeleteCabin() {
  // hook 1
  const queryClient = useQueryClient();
  // hook 2
  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success("Cabin successfully deleted");

      //this will make the cabin component to refresh and to refresh the cache
      queryClient.invalidateQueries({
        queryKeys: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isDeleting, deleteCabin };
}
// extacted logic that contains hook that becomes a custom hook
