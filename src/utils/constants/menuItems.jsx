import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import SettingsIcon from "@mui/icons-material/Settings";
import ForumIcon from "@mui/icons-material/Forum";
import ListIcon from "@mui/icons-material/List";

export const UsermenuItems = [
  {
    isNested: [
      {
        path: "/dashboard/foa",
        name: "Foa",
        icon: <ManageAccountsIcon />,
      },
      {
        path: "/dashboard/barcodeDetails",
        name: "BarcodeDetails",
        icon: <SettingsIcon />,
      },
    ],
  },
];

export const UsermenuIconItems = [
  {
    path: "/dashboard/subadmin",
    icon: "",

    isNested: [
      {
        path: "/dashboard",
        icon: <ListIcon />,
      },
      {
        path: "/dashboard/subadmin",

        icon: <ManageAccountsIcon />,
      },
      {
        path: "/dashboard/data",

        icon: <SettingsIcon />,
      },
      {
        path: "/dashboard/roles",
        icon: <ForumIcon />,
      },
    ],
  },
];
