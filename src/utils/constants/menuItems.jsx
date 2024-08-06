import ContactPageIcon from "@mui/icons-material/ContactPage";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import BadgeIcon from "@mui/icons-material/Badge";
import VerifiedIcon from "@mui/icons-material/Verified";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import EngineeringIcon from "@mui/icons-material/Engineering";
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';

export const UsermenuItems = [
  {
    isNested: [
      {
        path: "/userDashboard/foa",
        name: "Foa",
        icon: <ContactPageIcon />,
      },
      {
        path: "/userDashboard/BarcodeDetails",
        name: "Barcode Details",
        icon: <QrCodeScannerIcon />,
      },
      {
        path: "/userDashboard/Scraping",
        name: "Scraping",
        icon: <AutoDeleteIcon />,
      },
      {
        path: "/userDashboard/OperatorDetails",
        name: "Operator Details",
        icon: <BadgeIcon />,
      },
      {
        path: "/userDashboard/PokeYokeCheckList",
        name: "PokeYoke Checklist",
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
