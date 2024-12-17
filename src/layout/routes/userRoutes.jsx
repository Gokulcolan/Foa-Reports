import React from "react";
import RootLayout from "../nav/rootLayout";
import Foa from "../../pages/User/Foa";
import PokeYokeCheckList from "../../pages/User/PokeYokeCheckList";
import DockAuditReport from "../../pages/User/DockAuditReport";
import StripAuditReport from "../../pages/User/StripAuditReport";
import ProcessApprovalReport from "../../pages/User/ProcessApproval";

// const Foa = React.lazy(() => import("../../pages/User/Foa/index"));
// const BarcodeDetails = React.lazy(() => import("../../pages/User/BarcodeDetails/index"));
// const Scraping = React.lazy(() => import("../../pages/User/Scraping/index"));
// const OperatorDetails = React.lazy(() => import("../../pages/User/OperatorDetails/index"));
// const PokeYokeCheckList = React.lazy(() => import("../../pages/User/PokeYokeCheckList/index"));
// const DockAuditReport = React.lazy(() => import("../../pages/User/DockAuditReport/index"));
// const StripAuditReport = React.lazy(() => import("../../pages/User/StripAuditReport/index"));
// const Qcpc = React.lazy(() => import("../../pages/User/Qcpc/index"));

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
        path: "PokeYokeCheckList",
        element: <PokeYokeCheckList />,
      },
      {
        path: "ProcessApprovalReport",
        element: <ProcessApprovalReport />,
      },
      {
        path: "DockAuditReport",
        element: <DockAuditReport />,
      },
      {
        path: "StripAuditReport",
        element: <StripAuditReport />,
      }
    ],
  },
];

export default UserRoutes;
