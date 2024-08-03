import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Outlet, useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ArrowBack } from "@mui/icons-material";
import { Layout } from "./layout";

const drawerWidth = 280;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function RootLayout() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  //setting adming and user routes

  const [openDrawer, setOpenDrawer] = useState(true);

  const handleDrawerOpen = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
  //to show dropdown lists

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  const handleLogOut = () => {
    navigate("/");
  };
  console.log("anchourrrr", anchorEl);

  return (
    <Box sx={{ display: "flex", position: "relative" }}>
      {/* <CssBaseline /> */}
      <AppBar
        position="fixed"
        open={openDrawer}
        sx={{ backgroundColor: "white" }}
      >
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              position: "relative",
              color: "black",
            }}
            className="backarrow"
          >
            {openDrawer ? (
              <MenuIcon style={{ color: "black" }} />
            ) : (
              <ArrowBack
                className="backarrow"
                style={{
                  color: "black",
                  marginLeft: "60px",
                  textDecoration: "none",
                }}
              />
            )}
          </IconButton>
          <Avatar
            alt="Profile Logo"
            src={""} // Replace with the path to your profile logo image
            sx={{
              width: "60px",
              height: "60px",
              marginLeft: "auto",
              cursor: "pointer",
            }} // Adjust the margin as needed
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
            {/* Add more menu items as needed */}
          </Menu>
        </Toolbar>
      </AppBar>
      {/* <Layout /> */}
      {/* <div style={{position:"relative"}}> */}
      <Layout openDrawer={openDrawer} />
      <span
        className={
          openDrawer
            ? "outletcontainer opendrawer"
            : "outletcontainer closedrawer"
        }
      >
        <Outlet />
      </span>

    </Box>
  );
}
