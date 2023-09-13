import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";

export function useDeleteBooking() {
  // hook 1
  const queryClient = useQueryClient();
  // hook 2
  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: () => {
      toast.success("Booking successfully deleted");

      //this will make the bookings component to refresh and to refresh the cache
      queryClient.invalidateQueries({
        queryKeys: ["bookings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isDeleting, deleteBooking };
}
// extacted logic that contains hook that becomes a custom hook
