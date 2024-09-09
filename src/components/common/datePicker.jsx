import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function CommonDatePicker({ onChange }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={["DatePicker"]}
        sx={{ paddingTop: "0px", marginRight: "20px" , overflow: "unset !important" }}
      >
        <div>
          <DatePicker
            label="Date"
            sx={{ width: "300px"}}
            onChange={onChange} // Pass the selected date to the parent
          />
        </div>
      </DemoContainer>
    </LocalizationProvider>
  );
}
