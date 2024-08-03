import React, {  useState } from "react";
import { styled,  } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UsermenuItems } from "../../../utils/constants/menuItems";
import ListIcon from "@mui/icons-material/List";
import MuiDrawer from "@mui/material/Drawer";

const drawerWidth = 280;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
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

function MultipleList({ menuItems, openDrawer }) {
  const { name, path, id } = menuItems;
  const [open, setOpen] = React.useState(true);

  const navigate = useNavigate();
  let location = useLocation();
  const handleClick = (e) => {
    e.preventDefault();
    navigate(path);
    setOpen((prev) => !prev);
  };
  return (
    <>
      {/* && userRoleData[id]  */}
      {name && (
        <ListItemButton
          component={Link}
          to={path}
          className="multi-list"
          onClick={handleClick}
        >
          <ListIcon sx={{ marginRight: "8px" }} />
          <ListItemText primary={name} onClick={() => navigate(path)} />
        </ListItemButton>
      )}
      {/* <Collapse in={open} timeout="auto" unmountOnExit> */}
      <List component="div" disablePadding>
        {menuItems.isNested.map((nestedItem, index) => {
          const { name, path, icon, child, id } = nestedItem;
          let isActive =
            location.pathname === path || location.pathname === child;
          return (
            <>
              <div key={index}>
                <ListItemButton
                  component={Link}
                  to={path}
                  style={{
                    backgroundColor: isActive ? "#00E785" : "",
                    color: isActive ? "black" : "",
                    margin: isActive && openDrawer ? "0px 18px 0px 0px" : "",
                    // width:openDrawer?"" :"10px",
                    borderRadius: isActive ? "10px" : "",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  key={`${index}-item`}
                  className="nested-list"
                  sx={{
                    "&:hover": {
                      color: "#00E785",
                    },
                  }}
                >
                  <span style={{ margin: "9px" }}>{icon}</span>
                  <ListItemText
                    primary={name}
                    className={isActive ? "menuname" : "menunameIsActive"}
                  />
                </ListItemButton>
              </div>
            </>
          );
        })}
      </List>
      {/* </Collapse> */}
    </>
  );
}

export const Layout = ({ openDrawer }) => {
  const [layoutData, setLayoutData] = useState([]);

  React.useEffect(() => {
    setLayoutData(UsermenuItems);
  }, []);

  return (
    <>
      <div className="layoutcontainer">
        {/* replace true with openDrawer props later */}
        <Drawer
          variant="permanent"
          className="layoutlist"
          open={openDrawer}
          style={{ width: openDrawer ? "" : "20px" }}
        >
          <img src={""} className="logo" style={{ width: "100%" }} />
          <List>
            {layoutData.map((items, index) => {
              return items.isNested ? (
                <MultipleList
                  menuItems={items}
                  key={index}
                  openDrawer={openDrawer}
                />
              ) : (
                <></>
              );
            })}
          </List>
        </Drawer>
      </div>
    </>
  );
};
