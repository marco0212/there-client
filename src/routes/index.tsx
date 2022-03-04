import { Route, RouteProps, Routes } from "react-router-dom";
import { ROUTE_PATHS } from "../constants";
import { Home, Posts } from "../pages";

const ROUTES: RouteProps[] = [
  { path: ROUTE_PATHS.home, element: <Home /> },
  { path: ROUTE_PATHS.posts, element: <Posts /> },
];

export default function Router() {
  return (
    <Routes>
      {ROUTES.map((route) => (
        <Route key={route.path} {...route} />
      ))}
    </Routes>
  );
}
