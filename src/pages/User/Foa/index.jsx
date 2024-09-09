import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router";
import { UsermenuItems } from "../../../utils/constants/menuItems";
import ComponentHeadBar from "../../../components/common/componentHeadBar";
import {
  footer,
  headers,
  headers as initialHeaders,
} from "../../../utils/constants/tableData";
import CommonTable from "../../../components/common/commonTable";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../../redux/slice/userSlice";
import { Button} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { foaDataApi, partNumberApi } from "../../../redux/action/userAction";
import Loader from "../../../components/Loader/Loader";

const Foa = () => {
  const [tableValue, setTableValue] = useState([]);
  const [apiResponse, setApiResponse] = useState([]);
  const [headersState, setHeadersState] = useState(initialHeaders);
  const [footerData, setFooterData] = useState([]);
  const [selectedShift, setSelectedShift] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedPartNumber, setSelectedPartNumber] = useState("");
  const [error, setError] = useState(""); // Error state
  const [loadingPDF, setLoadingPDF] = useState(false); // PDF loading state

  const tableRef = useRef(null); // Ref to capture the table
  const location = useLocation();
  const dispatch = useDispatch();

  const currentPath = location.pathname;

  const { foaDataDetail, partNumberDetail } = useSelector(userSelector);

  const currentMenuItem = UsermenuItems[0].isNested.find(
    (item) => item.path === currentPath
  );

  const ShiftOptions = [
    { value: "A", label: "A" },
    { value: "B", label: "B" },
    { value: "C", label: "C" },
  ];

  const partNumberOptions = (partNumberDetail?.varieties || [])?.map((item) => ({
    value: item,
    label: item,
  }));

  useEffect(() => {
    if (selectedShift && selectedDate) {
      const payload = {
        // type: "varieties",
        date: selectedDate,
        shift: selectedShift,
      };
      dispatch(partNumberApi(payload));
    }
  }, [selectedShift, selectedDate, dispatch]);

  useEffect(() => {
    if (
      selectedPartNumber &&
      !partNumberOptions.some((option) => option.value === selectedPartNumber)
    ) {
      setSelectedPartNumber(""); // Reset if the value is not in the new options
    } else {
      // console.log("Keeping Selected Part Number:", selectedPartNumber);
    }
  }, [partNumberOptions, selectedPartNumber]);

  const handleDateChange = (date) => {
    setSelectedDate(date?.format("YYYY-MM-DD"));
  };

  const handlePartNumberChange = (value) => {
    setSelectedPartNumber(value);
  };

  const handleShiftChange = (value) => {
    setSelectedShift(value);
  };

  const handleViewTable = () => {
    if (!selectedDate || !selectedShift || !selectedPartNumber) {
      setError("Please select all the fields before viewing the table.");
    } else {
      setError(""); // Clear error message
    }
    const payload = {
      // type: "data",
      date: selectedDate,
      shift: selectedShift,
      variety: selectedPartNumber,
    };
    dispatch(foaDataApi(payload));
  };


  useEffect(() => {
    if (
      foaDataDetail &&
      foaDataDetail?.Data &&
      foaDataDetail?.Data?.length > 0
    ) {
      const response = foaDataDetail?.Data;
      setApiResponse(response);

      const firstItem = response[0];
      console.log(firstItem, "test1")
      const partNo = foaDataDetail?.Form_Name || " ";
      const date = firstItem.Date || "Date";
      const shift = firstItem.Shift || "Shift";
      const customer = firstItem.Customer || "Customer";
      const checked = firstItem.Total_Checked || "";
      const success = firstItem.Ok || "";
      const failure = firstItem.Not_Ok || "";
      const note = firstItem.Note || "";
      const time = firstItem.Time || "";

      // Create a copy of the headers
      const updatedHeaders = headers?.map((row, rowIndex) => {
        return row?.map((col, colIndex) => {
          console.log(col, "test2")
          if (rowIndex === 0 && colIndex === 1) {
            // Update Date label
            return { ...col, label: `DATE: ${date}` };
          } else if (rowIndex === 0 && colIndex === 0) {
            // Update part
            return {
              ...col,
              label: partNo,
            };
          } else if (rowIndex === 1 && colIndex === 1) {
            // Update Shift label
            return { ...col, label: `SHIFT: ${shift}` };
          } else if (rowIndex === 2 && colIndex === 1) {
            // Update Shift label
            return { ...col, label: `CUSTOMER: ${customer}` };
          }
          else if (rowIndex === 2 && colIndex === 2) {
            // Update Shift label
            return { ...col, label: checked };
          }

          else if (rowIndex === 2 && colIndex === 3) {
            // Update Shift label
            return { ...col, label: success };
          }
          else if (rowIndex === 2 && colIndex === 4) {
            // Update Shift label
            return { ...col, label: failure };
          }

          else if (rowIndex === 3 && col.label === note) {
            return {
              ...col,
              style: { backgroundColor: "yellow", fontWeight: "bold" }, // Apply highlight style
            };
          }
          else if (rowIndex === 6 && col.label === time) {
            return {
              ...col,
              style: { backgroundColor: "yellow", fontWeight: "bold" }, // Apply highlight style
            };
          }
          else if (rowIndex === 7 && col.label === time) {
            return {
              ...col,
              style: { backgroundColor: "yellow", fontWeight: "bold" }, // Apply highlight style
            };
          }
          else if (rowIndex === 8 && col.label === time) {
            return {
              ...col,
              style: { backgroundColor: "yellow", fontWeight: "bold" }, // Apply highlight style
            };
          }

          return col;
        });
      });
      setHeadersState(updatedHeaders);

      const footerResponse = [
        { label: firstItem.Remarks || "" },
        { label: firstItem.Quality_Auditor || "" },
        { label: firstItem.Quality_verifier || "" },
        { label: firstItem.Time || "" },
      ];

      setFooterData([footerResponse]); // Ensure it's an array of arrays
    }
  }, [foaDataDetail]);

  const handleDropdownChange = (e, rowIndex, colIndex) => {
    const newValue = e.target.value;
    const updatedTable = [...tableValue];
    updatedTable[rowIndex][colIndex].value = newValue;
    setTableValue(updatedTable);
  };

  const mapResponseToRows = (apiResponse, headers) => {
    return apiResponse.map((item) => {
      const row = [];
      headers.forEach((headerRow) => {
        headerRow.forEach((header) => {
          if (header.id) {
            row.push({ value: item[header.id] || "" });
          }
        });
      });
      return row;
    });
  };

  const tableData = mapResponseToRows(apiResponse, headersState);

  const downloadPDF = () => {
    setLoadingPDF(true); // Start loader

    const input = tableRef.current;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      // Add the first page
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Add remaining pages if content height exceeds one page
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // Save the PDF with the specified name
      pdf.save(`${currentMenuItem?.name}.pdf`);

      setLoadingPDF(false); // Stop loader after PDF is saved
    });
  }

  return (
    <div>
      <ComponentHeadBar
        mainHeading={currentMenuItem?.name}
        shiftOptions={ShiftOptions}
        partNumberOptions={partNumberOptions}
        selectedDate={selectedDate}
        selectedShift={selectedShift}
        selectedPartNumber={selectedPartNumber}
        handleDateChange={handleDateChange}
        handleShiftChange={handleShiftChange}
        handlePartNumberChange={handlePartNumberChange}
        handleViewTable={handleViewTable}
        Error={error}
      />
      <br />
      {apiResponse && apiResponse?.length > 0 ? (
        <div>
          {loadingPDF ? (
            <div>
              <Loader />
              <p style={{ color: "white" }}>Downloading PDF...</p>
            </div>
          ) : (
            <>
              <Button
                variant="contained"
                sx={{ float: "right", cursor: "pointer" }}
                onClick={downloadPDF}
              >
                <DownloadIcon sx={{ fontSize: "20px", marginRight: "4px" }} />{" "}
                Download
              </Button>
              <br />
              <br />
              <div ref={tableRef}>
                <CommonTable
                  headers={headersState}
                  rows={tableData}
                  footer={footer}
                  footerData={footerData}
                  handleDropdownChange={handleDropdownChange}
                />
              </div>
            </>
          )}
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          {/* Message to guide user to select Date, Shift, and Part Number */}
          <p>Please select Date, Shift, and Part Number to view the table.</p>
        </div>
      )}
    </div>
  );
};

export default Foa;
