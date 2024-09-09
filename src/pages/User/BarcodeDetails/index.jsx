import React from "react";
import ComponentHeadBar from "../../../components/common/componentHeadBar";
import { useLocation } from "react-router";
import { UsermenuItems } from "../../../utils/constants/menuItems";
import CommonRegularTable from "../../../components/common/commonRegularTable";

import { AccordionActions, Button } from "@mui/material";

const BarcodeDetails = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Find the current menu item based on the path
  const currentMenuItem = UsermenuItems[0].isNested.find(
    (item) => item.path === currentPath
  );

  return (
    <div>
      <ComponentHeadBar mainHeading={currentMenuItem?.name} />
      <CommonRegularTable
       
      />
      <br />
      <div style={{ textAlign: "center" }}>
        <Button color="error" variant="outlined" style={{marginRight:"10px"}}>
          Cancel
        </Button>
        <Button variant="contained" color="success">
          SAVE
        </Button>
      </div>
    </div>
  );
};

export default BarcodeDetails;
