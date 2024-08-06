import Foa from "../../pages/User/Foa/index";
import BarcodeDetails from "../../pages/User/BarcodeDetails/index";
import RootLayout from "../nav/rootLayout";
import Scraping from "../../pages/User/Scraping";
import OperatorDetails from "../../pages/User/OperatorDetails";
import PokeYokeCheckList from "../../pages/User/PokeYokeCheckList";
import DockAuditReport from "../../pages/User/DockAuditReport";
import StripAuditReport from "../../pages/User/StripAuditReport";

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
      {
        path: "Scraping",
        element: <Scraping />,
      },
      {
        path: "OperatorDetails",
        element: <OperatorDetails />,
      },
      {
        path: "PokeYokeCheckList",
        element: <PokeYokeCheckList />,
      },
      {
        path: "DockAuditReport",
        element: <DockAuditReport />,
      },
      {
        path: "StripAuditReport",
        element: <StripAuditReport />,
      },
    ],
  },
];

export default UserRoutes;
