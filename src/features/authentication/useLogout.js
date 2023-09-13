import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { logout as logoutApi } from "../../services/apiAuth";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      // remove query from cache
      queryClient.removeQueries();

      navigate("/login", { replace: true });
      // replace:true This means that when the user clicks the browser's back button, they won't be taken back to the logout page.
      //Instead, they will be taken directly to the page they were on before the logout.
    },
  });
  return { logout, isLoading };
}
