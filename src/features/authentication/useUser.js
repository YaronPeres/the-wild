import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

/*getting the current user and storing into chache that it wont
have to be redownloaded each time its necessary*/

export function useUser() {
  const { isLoading, data: user } = useQuery({
    // getting the data into reactQuery
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });
  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}
