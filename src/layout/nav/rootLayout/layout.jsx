import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  AdminmenuItems,
  UsermenuItems,
} from "../../../utils/constants/menuItems";
import MuiDrawer from "@mui/material/Drawer";
import logo from "../../../assets/images/tvs-lucas-logo.png";
import { Typography } from "@mui/material";
import { handleSesssionStorage } from "../../../utils/helperFunctions";

const drawerWidth = 280;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  backgroundColor: "white",
});

const Drawer = styled(MuiDrawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...openedMixin(theme),
  "& .MuiDrawer-paper": openedMixin(theme),
}));

function MultipleList({ menuItems }) {
  const { name, path, id } = menuItems;
  const [open, setOpen] = useState(true);

  const navigate = useNavigate();
  let location = useLocation();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(path);
    setOpen((prev) => !prev);
  };

  return (
    <>
      {name && (
        <ListItemButton
          component={Link}
          to={path}
          className="multi-list"
          onClick={handleClick}
        >
          {/* <ListIcon sx={{ marginRight: "8px" }} /> */}
          <ListItemText primary={name} onClick={() => navigate(path)} />
        </ListItemButton>
      )}
      <List component="div">
        {menuItems.isNested.map((nestedItem, index) => {
          const { name, path, icon, child, id } = nestedItem;
          let isActive =
            location.pathname === path || location.pathname === child;
          return (
            <div key={index}>
              <ListItemButton
                component={Link}
                to={path}
                style={{
                  backgroundColor: isActive ? "#0057ac" : "",
                  color: isActive ? "white" : "",
                  margin: isActive ? "0px 10px 0px 10px" : "",
                  // width: "100%",
                  borderRadius: isActive ? "10px" : "",
                  display: "flex",
                  justifyContent: "center",
                }}
                key={`${index}-item`}
                className="nested-list"
                sx={{
                  "&:hover": {
                    color: "#00963f",
                  },
                }}
              >
                <span style={{ margin: "5px 10px" }}>{icon}</span>
                <ListItemText
                  primary={
                    <Typography
                      variant="body1"
                      // sx={{ fontWeight: isActive ? "bold" : "" }}
                      sx={{ fontWeight: "600" }}
                    >
                      {name}
                    </Typography>
                  }
                  className={isActive ? "menuname" : "menunameIsActive"}
                />
              </ListItemButton>
            </div>
          );
        })}
      </List>
    </>
  );
}

export const Layout = () => {
  const [layoutData, setLayoutData] = useState([]);
  console.log(layoutData, "layoutData");

  React.useEffect(() => {
    const UserRole = parseInt(handleSesssionStorage("get", "ur"), 10);
    console.log(UserRole, "UserRole");
    if (UserRole === 2) {
      setLayoutData(UsermenuItems);
    } 
    else if (UserRole === 3) {
      setLayoutData(AdminmenuItems);
    } 
    else {
      setLayoutData([]); // Default empty state or handle as needed
    }
  }, []);

  return (
    <div
      className="layoutcontainer"
      style={{ backgroundColor: "blue !important" }}
    >
      <Drawer variant="permanent" className="layoutlist">
        <img
          src={logo}
          className="logo"
          style={{ width: "100%", margin: "20px 0px" }}
        />
        <List>
          {layoutData.map((items, index) => {
            return items.isNested ? (
              <MultipleList menuItems={items} key={index} />
            ) : (
              <></>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
};
