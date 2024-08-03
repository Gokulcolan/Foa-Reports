import Foa from "../../pages/User/Foa/index";

import BarcodeDetails from "../../pages/User/BarcodeDetails/index";
import RootLayout from "../nav/rootLayout";

const UserRoutes = [
  {
    path: "/userDashboard",
    element: <RootLayout />,
    children: [
      {
        path: "foa",
        element: <Foa />,
      },
      {
        path: "BarcodeDetails",
        element: <BarcodeDetails />,
      },
    ],
  },
];

export default UserRoutes;
