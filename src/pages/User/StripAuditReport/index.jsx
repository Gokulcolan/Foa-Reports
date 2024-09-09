import React from "react";
import ComponentHeadBar from "../../../components/common/componentHeadBar";
import { UsermenuItems } from "../../../utils/constants/menuItems";
import { useLocation } from "react-router";

const StripAuditReport = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Find the current menu item based on the path
  const currentMenuItem = UsermenuItems[0].isNested.find(
    (item) => item.path === currentPath
  );

  return (
    <div>
      <ComponentHeadBar mainHeading={currentMenuItem?.name} />
    </div>
  );
};

export default StripAuditReport;
