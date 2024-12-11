import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router';
import { UsermenuItems } from '../../../utils/constants/menuItems';
import ComponentHeadBar from '../../../components/common/componentHeadBar';
import CommonTable from '../../../components/common/commonTable';
import { PokeYokeChecklistHeaders, PokeYokeFooter } from '../../../utils/constants/tableData';
import { useDispatch, useSelector } from 'react-redux';
import { PyDataApi, PyPartNumberApi } from '../../../redux/action/userAction';
import { userSelector } from '../../../redux/slice/userSlice';
import { PokeYokeChecklistHeaders as initialHeaders } from "../../../utils/constants/tableData";
import DownloadIcon from "@mui/icons-material/Download";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Button } from '@mui/material';
import Loader from '../../../components/Loader/Loader';
import logo from "../../../assets/images/tvs-lucas-logo.png"


const PokeYokeCheckList = () => {
  const [tableValue, setTableValue] = useState([]);
  const [apiResponse, setApiResponse] = useState([]);
  const [selectedShift, setSelectedShift] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedPartNumber, setSelectedPartNumber] = useState("");
  const [error, setError] = useState(""); // Error state
  const [headersState, setHeadersState] = useState(initialHeaders);
  const [footerData, setFooterData] = useState([]);
  const [loadingPDF, setLoadingPDF] = useState(false); // PDF loading state

  const { PyPartNumberDetail, PyDataDetail } = useSelector(userSelector);

  const tableRef = useRef(null); // Ref to capture the table
  const location = useLocation();
  const dispatch = useDispatch();
  // Find the current menu item based on the path

  const currentPath = location.pathname;

  const currentMenuItem = UsermenuItems[0].isNested.find(
    (item) => item.path === currentPath
  );

  const ShiftOptions = [
    { value: "A", label: "A" },
    { value: "B", label: "B" },
    { value: "C", label: "C" },
  ];

  const partNumberOptions = (PyPartNumberDetail?.varieties || [])?.map((item) => ({
    value: item,
    label: item,
  }));

  useEffect(() => {
    if (selectedShift && selectedDate) {
      const payload = {
        date: selectedDate,
        shift: selectedShift,
      };
      dispatch(PyPartNumberApi(payload));
    }
  }, [selectedShift, selectedDate, dispatch]);

  useEffect(() => {
    if (
      selectedPartNumber &&
      !partNumberOptions.some((option) => option.value === selectedPartNumber)
    ) {
      setSelectedPartNumber(""); // Reset if the value is not in the new options
    }
  }, [partNumberOptions, selectedPartNumber]);

  useEffect(() => {
    if (
      PyDataDetail &&
      PyDataDetail?.Data &&
      PyDataDetail?.Data?.length > 0
    ) {

      const response = PyDataDetail?.Data;
      setApiResponse(response);
      const firstItem = response[0];
      const FormName = PyDataDetail?.Form_Name || " ";
      const date = firstItem.Date || "Date";
      const shift = firstItem.Shift || "Shift";

      // Create a copy of the headers
      const updatedHeaders = PokeYokeChecklistHeaders?.map((row, rowIndex) => {
        return row?.map((col, colIndex) => {
          if (rowIndex === 0 && colIndex === 0) {
            return { ...col, label: FormName };
          }
          else if (rowIndex === 0 && colIndex === 1) {
            return { ...col, label: `Date : ${date}` };
          }
          else if (rowIndex === 0 && colIndex === 2) {
            return { ...col, label: `Shift : ${shift}` };
          }
          return col;
        });
      });
      setHeadersState(updatedHeaders);
      const footerResponse = [
        { label: firstItem.Part_No_Variety || "" },
        { label: firstItem.Quality_Auditor || "" },
        { label: firstItem.Quality_Engineer || "" },
      ];
      setFooterData([footerResponse]);
    }
  }, [PyDataDetail]);

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
      return;
    }
    setError(""); // Clear error message
    const payload = {
      date: selectedDate,
      shift: selectedShift,
      variety: selectedPartNumber,
    };
    // Log to check if the function is called
    console.log("Fetching data with payload:", payload);
    dispatch(PyDataApi(payload))
  };

  const handleDropdownChange = (e, rowIndex, colIndex) => {
    const newValue = e.target.value;
    const updatedTable = [...tableValue];
    updatedTable[rowIndex][colIndex].value = newValue;
    setTableValue(updatedTable);
  };

  const mapResponseToRows = (apiResponse, headers) => {
    // Ensure `apiResponse` is an array. If not, use an empty array.
    const data = Array.isArray(apiResponse) ? apiResponse : [];

    return data.map((item) => {
      //  {console.log(item,"testtt")}
      const row = [];
      headers?.forEach((headerRow) => {
        headerRow?.forEach((header) => {
          if (header.id) {
            row.push({ value: item[header.id] || "" });
          }

        });
      });
      return row;
    });
  };

  const pyTableData = mapResponseToRows(apiResponse, headersState);

  const downloadPDF = async () => {
    setLoadingPDF(true);
    const input = tableRef.current;

    if (!input) {
      console.error("Table reference not found!");
      setLoadingPDF(false);
      return;
    }

    try {
      const canvas = await html2canvas(input, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#fff",
        logging: true,
      });

      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        compress: true
      });

      // A4 dimensions (mm)
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      // Set margins (mm)
      const margins = {
        top: 10,
        bottom: 15,  // Increased bottom margin
        left: 10,
        right: 10
      };

      // Calculate dimensions for the image
      const contentWidth = pageWidth - (margins.left + margins.right);
      const contentHeight = (canvas.height * contentWidth) / canvas.width;

      // Calculate how many pages we need
      const pagesNeeded = Math.ceil(contentHeight / (pageHeight - (margins.top + margins.bottom)));

      // For each page
      for (let page = 0; page < pagesNeeded; page++) {
        if (page > 0) {
          pdf.addPage();
        }

        // Calculate what portion of the image to use for this page
        const sourceY = page * canvas.height / pagesNeeded;
        const sourceHeight = canvas.height / pagesNeeded;

        // Create a temporary canvas for this portion
        const tmpCanvas = document.createElement('canvas');
        tmpCanvas.width = canvas.width;
        tmpCanvas.height = sourceHeight;

        const ctx = tmpCanvas.getContext('2d');
        ctx.drawImage(
          canvas,
          0,
          sourceY,
          canvas.width,
          sourceHeight,
          0,
          0,
          tmpCanvas.width,
          tmpCanvas.height
        );

        const pageImgData = tmpCanvas.toDataURL('image/jpeg', 1.0);

        // Add this portion to the PDF
        pdf.addImage(
          pageImgData,
          'JPEG',
          margins.left,
          margins.top,
          contentWidth,
          pageHeight - (margins.top + margins.bottom)
        );

        // Remove page number addition since it's already in the content
        // We'll only add a footer space for consistency
        pdf.setFillColor(255, 255, 255);
        pdf.rect(
          0,
          pageHeight - margins.bottom,
          pageWidth,
          margins.bottom,
          'F'
        );
      }

      // Don't add the extra blank page at the end

      // Save the PDF
      const pdfBlob = pdf.output('blob');
      const blobUrl = URL.createObjectURL(pdfBlob);

      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `${currentMenuItem?.name || 'table'}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);

    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setLoadingPDF(false);
    }
  };

  return (
    <div>

      <ComponentHeadBar mainHeading={currentMenuItem?.name}
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
      {apiResponse && apiResponse.length > 0 ? (
        <div>
          {loadingPDF && (
            <div>
              <Loader />
              <p style={{ color: "white" }}>Downloading PDF...</p>
            </div>
          )}
          {!loadingPDF && (
            <>
              <Button
                variant="contained"
                sx={{ float: "right", cursor: "pointer" }}
                onClick={downloadPDF}
              >
                <DownloadIcon sx={{ fontSize: "20px", marginRight: "4px" }} /> Download
              </Button>
              <br />
              <br />
              <div ref={tableRef}>
                <CommonTable
                  headers={headersState}
                  rows={pyTableData}
                  footer={PokeYokeFooter}
                  footerData={footerData}
                  handleDropdownChange={handleDropdownChange}
                  image={logo}
                />
              </div>
            </>
          )}
        </div>
      ) : (
        // <div style={{ textAlign: "center" }}>
        //   <p>Please select Date, Shift, and Part Number to view the table.</p>
        // </div>
        " "
      )}

    </div>
  )
}

export default PokeYokeCheckList