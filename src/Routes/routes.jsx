import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/home";
import AllApps from "../pages/allApps";
import RootLayout from "../Layouts/RootLayout";
import ErrorRoute from "../pages/ErrorRoute";
import InstalledApps from "../pages/InstalledApps";
import AppDetails from "../pages/AppDetails";
export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorRoute />,
    hydrateFallbackElement: <p><span className="loading loading-dots loading-xl"></span>
</p>,
    children: [
      {
        // path: '/',
        index: true,
        element: <Home />,
      },
      {
        path: '/all-apps',
        element: <AllApps />
      },
      {
        path: '/installed-apps',
        element: <InstalledApps />
      },
      {
        path: '/app/:id',
        element: <AppDetails />
      }
    ]
  }
  // {
  //   path: '*',
  //   element: <ErrorRoute />
  // }
])

