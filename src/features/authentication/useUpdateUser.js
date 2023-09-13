import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-hot-toast";
import { UpdateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: UpdateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success("User account successfully updated");

      // saving data in cache
      queryClient.setQueryData(["user"], user);

      //   queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateUser };
}
