import { Outlet } from "react-router";
import ForgotPassword from "../../pages/Auth/ForgetPassword";
import Login from "../../pages/Auth/Login";

const AuthRoutes = [
    {
      path: "/",
      element: <Outlet />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/forgot-password",
          element: <ForgotPassword />,
        },
       
      ],
    },
  ];

  export default AuthRoutes;