import ContactPageIcon from "@mui/icons-material/ContactPage";
import VerifiedIcon from "@mui/icons-material/Verified";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import EngineeringIcon from "@mui/icons-material/Engineering";
import VerifiedUserSharpIcon from '@mui/icons-material/VerifiedUserSharp';

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
        path: "/userDashboard/ProcessApprovalReport",
        name: "Process Approval Report",
        icon: <AssignmentTurnedInIcon />,
      },
      {
        path: "/userDashboard/DockAuditReport",
        name: "Dock Audit Report",
        icon: <VerifiedUserSharpIcon />,
      },
      {
        path: "/userDashboard/StripAuditReport",
        name: "Strip Audit Report",
        icon: <EngineeringIcon />,
      },
     
    ],
  },
];