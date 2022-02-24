import { Route, RouteProps, Routes } from "react-router-dom";
import { Home } from "../pages";

const ROUTES: RouteProps[] = [{ path: "/", element: <Home /> }];

export default function Router() {
  return (
    <Routes>
      {ROUTES.map((route) => (
        <Route key={route.path} {...route} />
      ))}
    </Routes>
  );
}
