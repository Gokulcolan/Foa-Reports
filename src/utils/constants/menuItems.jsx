import ContactPageIcon from "@mui/icons-material/ContactPage";
import VerifiedIcon from "@mui/icons-material/Verified";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import EngineeringIcon from "@mui/icons-material/Engineering";

export const UsermenuItems = [
  {
    isNested: [
      {
        path: "/userDashboard/foa",
        name: "Foa Reports",
        icon: <ContactPageIcon />,
      },
      {
        path: "/userDashboard/PokeYokeCheckList",
        name: "PokeYoke Verification",
        icon: <VerifiedIcon />,
      },
      {
        path: "/userDashboard/DockAuditReport",
        name: "Dock Audit Report",
        icon: <AssignmentTurnedInIcon />,
      },
      {
        path: "/userDashboard/StripAuditReport",
        name: "Strip Audit Report",
        icon: <EngineeringIcon />,
      },
      {
        path: "/userDashboard/qcpc",
        name: "QCPC",
        icon: <EngineeringIcon />,
      },
    ],
  },
];

export const AdminmenuItems = [
  {
    isNested: [
      {
        path: "/adminDashboard/foa",
        name: "Master Admin",
        icon: <ContactPageIcon />,
      },
    ],
  },
];
