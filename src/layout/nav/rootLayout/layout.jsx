import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListIcon from "@mui/icons-material/List";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { UsermenuIconItems, UsermenuItems } from "../../../utils/constants/menuItems";

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
  //   const { userRoleData={} } = useSelector(authSelector);
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
            // userRoleData[id] ?"": (
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
            // )
          );
        })}
      </List>
      {/* </Collapse> */}
    </>
  );
}

export const Layout = ({ openDrawer }) => {
  const [layoutData, setLayoutData] = useState([]);
  //   const dispatch = useDispatch();
  //   let sessionValue = sessionStorage.getItem("ur");
  //   let userId = sessionStorage.getItem("UId");
  //   useEffect(() => {
  //     dispatch(RoleAuthApi(userId));
  //   }, []);

  //   useEffect(() => {
  //     if (sessionValue == 1) {
  //       setLayoutData(openDrawer ? UsermenuItems : UsermenuIconItems);
  //     } else {
  //       // setLayoutData(AdminMenuItems);
  //       setLayoutData(openDrawer ? AdminMenuItems : AdminIconMenuItems);
  //     }
  //   }, [openDrawer, sessionValue]);

  useEffect(() => {
    // if (sessionValue == 1) {
    //   setLayoutData(openDrawer ? UsermenuItems : UsermenuIconItems);
    // } else {
    // setLayoutData(AdminMenuItems);
    setLayoutData(openDrawer ? UsermenuItems : UsermenuIconItems);
  }, [openDrawer]);

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
          <img src="" alt="logo" className="logo" style={{ width: "100%" }} />
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
