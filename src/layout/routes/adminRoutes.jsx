
import FoaAdmin from "../../pages/Admin/Foa";
import RootLayout from "../nav/rootLayout";

const AdminRoutes = [
  {
    path: "/adminDashboard",
    element: <RootLayout />,
    children: [
      {
        path: "foa",
        element: <FoaAdmin />,
      },
     
    ],
  },
];

export default AdminRoutes;
