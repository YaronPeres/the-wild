import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

import Spinner from "./Spinner";
import { useUser } from "../features/authentication/useUser";
import { is } from "date-fns/locale";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate(); // we are only allowed to call this function in another function. call back or useEffect/ not at the top level of the component

  // 1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();
  // 2. if ther is no authenticated user, redirect to the login page
  useEffect(
    function () {
      // this is a condition so it will change the call order of our react hooks. not allowed
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );
  // 3. while loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />;
      </FullPage>
    );

  // 4. if there is a user render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
