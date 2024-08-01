// import EditProfile from "../../components/EditProfile/editProfile";
// import AddRoles from "../../components/Roles&Permissions/addRoles";
// import NotFound from "../../pages/Auth/notFound/notFound";

import BarcodeDetails from "../../pages/User/BarcodeDetails";
import Foa from "../../pages/User/Foa";
import RootLayout from "../nav/rootLayout";

const UserRoutes = [
  {
    path: "/dashboard",
    element: <RootLayout />,
    children: [
      { path:'foa', element: <Foa /> },
      { path: "barcodeDetails", element: <BarcodeDetails /> },

    ],
  },
//   {
//     path: "/payment",
//     element: <Payment />,
//   },
//   {
//     path:'/*',
//     element:<NotFound/>
//   }
];

export default UserRoutes;
