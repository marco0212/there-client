import { Route, RouteProps, Routes } from "react-router-dom";
import styled from "styled-components";
import { ROUTE_PATHS } from "../constants";
import { TabNavigation } from "../libs/feature-navigation";
import { useAccountContext } from "../libs/provider-account";
import { Spinner } from "../libs/shared-ui/Spinner";
import { Home, Login, Posts } from "../pages";

const ROUTES: RouteProps[] = [
  { path: ROUTE_PATHS.home, element: <Home /> },
  { path: ROUTE_PATHS.posts, element: <Posts /> },
];

const Router = () => (
  <Routes>
    <>
      {ROUTES.map((route) => (
        <Route key={route.path} {...route} />
      ))}
    </>
  </Routes>
);

const CheckoutRouter = () => {
  const { isCheckedUser, isLoggedIn } = useAccountContext();

  if (!isCheckedUser) {
    return <VerticalCenterSpinner size={50} />;
  }

  if (!isLoggedIn) {
    return <Login />;
  }

  return (
    <Container>
      <Router />
      <TabNavigation />
    </Container>
  );
};

export default CheckoutRouter;

const Container = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  background-color: white;
`;

const VerticalCenterSpinner = styled(Spinner)`
  margin: auto 0;
  img {
    filter: invert(0.7);
  }
`;
