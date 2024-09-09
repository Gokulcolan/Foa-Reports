import React from "react";
import { Outlet } from "react-router";
import LandingScreen from "../../pages/Landing/landingScreen";

const LandingRoutes = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <LandingScreen />,
      },
    ],
  },
];

export default LandingRoutes;
