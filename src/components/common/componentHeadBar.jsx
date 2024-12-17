import React from "react";
import CommonDatePicker from "./datePicker";
import CommonDropdown from "./commonDropDown";
import { Button, Alert } from "@mui/material";


const ComponentHeadBar = ({ mainHeading,
  shiftOptions,
  partNumberOptions,
  // selectedDate,
  selectedShift,
  selectedPartNumber,
  handleDateChange,
  handleShiftChange,
  handlePartNumberChange,
  handleViewTable,
  Error, }) => {

  return (
    <div>
      <div>
        <h2
          style={{
            textAlign: "center",
            textTransform: "uppercase",
            color: "rgb(0, 87, 172)",
            fontSize: "30px",
            margin:"0px"
          }}
        >
          {mainHeading}
        </h2>
      </div>
      <br />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CommonDatePicker onChange={handleDateChange} />
        <CommonDropdown
          label="Shift"
          options={shiftOptions}
          value={selectedShift}
          sx={{ width: "300px", margin: "0px 20px" }}
          customChange={handleShiftChange}
        />
        <CommonDropdown
          label="Part Number"
          options={partNumberOptions?.length === 0 ? [{ value: "", label: "No Data Found" }] : partNumberOptions}
          value={selectedPartNumber}
          sx={{ width: "300px", margin: "0px 20px" }}
          customChange={handlePartNumberChange}
        />
        <div style={{ margin: "10px 20px" }}>
          <Button variant="contained" onClick={handleViewTable}>
            View
          </Button>
        </div>
      </div>
      <br />
      {Error && <Alert severity="error">{Error}</Alert>} {/* Error message */}
    </div>
  );
};

export default ComponentHeadBar;
