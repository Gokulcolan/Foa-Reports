import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Avatar, IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu"; // Import the Menu Icon
import { Outlet, useNavigate } from "react-router-dom";
import ProfileImg from "../../../assets/images/Ellipse 58.png";
import { Layout } from "./layout";
import { handleSesssionStorage } from "../../../utils/helperFunctions";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/slice/userSlice";

const drawerWidth = 280;

// Styled AppBar
const AppBar = styled(MuiAppBar)(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
  }),
  ...(!open && {
    width: `calc(100% - 0px)`,
    marginLeft: `0px`,
  }),
}));

export default function RootLayout() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(true); // Sidebar open state
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    handleSesssionStorage("remove", "ur");
    localStorage.clear();
    dispatch(logout());
    navigate("/");
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen); // Toggle the sidebar open state
  };

  return (
    <Box sx={{ display: "flex", position: "relative" }}>
      <AppBar
        position="fixed"
        open={drawerOpen}
        sx={{
          backgroundColor: "white",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
        }}
      >
        <Toolbar>
          {/* Menu Button for Toggling Sidebar */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ marginRight: 2, backgroundColor: "rgb(25 118 210 / 22%)" }}
          >
            <MenuIcon sx={{ color: "rgb(0 87 172)" }} />
          </IconButton>

          <Avatar
            alt="Profile Logo"
            src={ProfileImg}
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
            open={Boolean(anchorEl)}
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
      <Layout open={drawerOpen} />
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
