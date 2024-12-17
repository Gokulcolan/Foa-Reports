import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UsermenuItems } from "../../../utils/constants/menuItems";
import MuiDrawer from "@mui/material/Drawer";
import logo from "../../../assets/images/tvs-lucas-logo.png";
import { handleSesssionStorage } from "../../../utils/helperFunctions";
import { Typography, Box } from "@mui/material";

const drawerWidth = 280;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  backgroundColor: "rgb(0, 87, 172)",
  
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `0px`, // Set width to 0px for fully closed state
  [theme.breakpoints.up("sm")]: {
    width: `0px`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function MultipleList({ menuItems }) {
  const { name, path, isNested } = menuItems;
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <>
      {name && (
        <ListItemButton component={Link} to={path} onClick={handleClick}>
          <ListItemText primary={name} />
        </ListItemButton>
      )}
      {isNested && (
        <List component="div">
          {isNested.map((nestedItem, index) => {
            const { name, path, icon } = nestedItem;
            const isActive = location.pathname === path;

            return (
              <ListItemButton
                key={index}
                component={Link}
                to={path}
                style={{
                  backgroundColor: isActive ? "white" : "",
                  color: isActive ? "black" : "white",
                  margin: isActive ? "10px 10px" : "5px 5px",
                  borderRadius: isActive ? "10px" : "",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <span style={{ margin: "5px 10px" }}>{icon}</span>
                <ListItemText
                  primary={
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "600" }}
                    >
                      {name}
                    </Typography>
                  }
                />
              </ListItemButton>
            );
          })}
        </List>
      )}
    </>
  );
}

export const Layout = ({ open }) => {
  const [layoutData, setLayoutData] = useState([]);

  useEffect(() => {
    const UserRole = parseInt(handleSesssionStorage("get", "ur"), 10);
    if (UserRole === 2) {
      setLayoutData(UsermenuItems);
    } else {
      setLayoutData([]);
    }
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar Drawer */}
      <Drawer variant="permanent" open={open}>
        <img
          src={logo}
          className="logo"
          // style={{ width: "100%", margin: "20px 0px" }}
          style={{ width: "100%", padding: "10px 0px", backgroundColor: "white" }}
          alt="Company Logo"
        />
        <List>
          {layoutData.map((items, index) => (
            <MultipleList menuItems={items} key={index} />
          ))}
        </List>
        {/* Copyright Message at the Bottom */}
        <Box sx={{ position: "absolute", bottom: 0, width: "100%", padding: "10px 0px", color: "orange", textAlign: "center", fontSize: "10px", }}>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            &copy; {new Date().getFullYear()} PED-AI Team. All Rights Reserved.
          </Typography>
        </Box>
      </Drawer>

      {/* Content Section */}
      {/* <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h6">Main Content Here</Typography>
      </Box> */}
    </Box>
  );
};
