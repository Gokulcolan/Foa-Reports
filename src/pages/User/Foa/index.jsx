import React, { useState } from "react";
import CommonDropdown from "../../../components/common/commonDropDown";
import CommonTable from "../../../components/common/commonTable";
import { exampleRows, foaTableHead } from "../../../utils/constants/tableData";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Foa = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const options = [
    { value: 10, label: "Ten" },
    { value: 20, label: "Twenty" },
    { value: 30, label: "Thirty" },
  ];
  return (
    <div>
      <CommonDropdown
        id="age-dropdown"
        label="Select your Assembly Line"
        options={options}
        value={selectedValue}
        sx={{ width: "300px" }}
        // onOpen={handleOpen}
        customChange={setSelectedValue}
      />
      {/* <button style={{ float: "right" ,border:"none",padding:"10px",cursor:"pointer" }}>
        <CalendarMonthIcon />
        Show Previous Report
      </button> */}
      <br />
      <br />
      <CommonTable columns={foaTableHead} rows={exampleRows} />
    </div>
  );
};

export default Foa;
