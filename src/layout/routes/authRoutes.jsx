import { Outlet } from "react-router";
import Login from "../../pages/Auth/Login";
import ForgotPassword from "../../pages/Auth/ForgetPassword";

const AuthRoutes = [
  {
    path: "/viewerLogin",
    element: <Outlet />,
    children: [
      {
        path: "login", // Corrected path
        element: <Login />,
      },
      {
        path: "forgot-password", // Corrected path
        element: <ForgotPassword />,
      },
    ],
  },
];

export default AuthRoutes;
