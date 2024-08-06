import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Avatar } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Outlet, useNavigate } from "react-router-dom";
import ProfileImg from "../../../assets/images/Ellipse 58.png";
import { Layout } from "./layout";
import { handleSesssionStorage } from "../../../utils/helperFunctions";
const drawerWidth = 280;

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: drawerWidth,
  width: `calc(100% - ${drawerWidth}px)`,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
}));

export default function RootLayout() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    handleSesssionStorage("add", "ur", 0);
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex", position: "relative" }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#eef3f6",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
        }}
      >
        <Toolbar>
          <Avatar
            alt="Profile Logo"
            src={ProfileImg} // Replace with the path to your profile logo image
            sx={{
              width: "60px",
              height: "60px",
              marginLeft: "auto",
              cursor: "pointer",
            }}
            onClick={handleProfileClick}
          />
          <Menu
            anchorEl={anchorEl}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            sx={{ borderRadius: "10px" }}
            open={anchorEl}
          >
            <MenuItem
              onClick={handleLogOut}
              sx={{
                "&:hover": {
                  backgroundColor: "#c4cdd5",
                  fontSize: "16px !important",
                },
              }}
            >
              Sign Out
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Layout />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
