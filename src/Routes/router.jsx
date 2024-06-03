import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import { About } from "../Pages/About/About";
import MainLayout from "../layouts/HomePageLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to={`/dashboard`} replace />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
