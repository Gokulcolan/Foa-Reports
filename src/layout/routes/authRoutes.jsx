import { lazy } from "react";
import { Outlet } from "react-router-dom";



const Login = lazy(() => import("../../pages/Auth/Login/index"));

const authRoutes = [
  {
    path: "/",
    element: (
      <div>
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Login />,
      },
     
    //   {
    //     path: "/forgot",
    //     element: <ForgotPassword />,
    //   },
     
    //   {
    //     path: "*",
    //     element: <NotFound/>
    //   },
    ],
  },
];

export default authRoutes;
