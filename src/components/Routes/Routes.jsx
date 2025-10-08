import { createBrowserRouter } from "react-router";
import App from "../../App";
import Root from "../Root/Root";
import Home from "../Home/Home";
import HomeError from "../HomeError/HomeError";
import AllApps from "../Pages/AllApps/AllApps";
import InstalledApps from "../Pages/InstalledApps/InstalledApps";
import AppDetails from "../Pages/AppDetails/AppDetails";
import HomeAppDetails from "../Pages/HomeAppDetails.jsx/HomeAppDetails";
import ErrorApp from "../Pages/ErrorApp/ErrorApp";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <HomeError></HomeError>,

    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/appData.json"),

        Component: Home,
      },
      {
        path: "/:id",
        loader: () => fetch("/appData.json"),
        Component: HomeAppDetails,
      },

      {
        path: "/allApps",
        loader: () => fetch("/allAppsData.json"),
        Component: AllApps,
      },

      {
        path: "/allApps/:id",
        loader: () => fetch("/allAppsData.json"),
        errorElement: <ErrorApp></ErrorApp>,
        Component: AppDetails,
      },

      {
        path: "/installed",
        loader: () => fetch("/allAppsData.json"),
        Component: InstalledApps,
      },
    ],
  },
]);

export default router;
