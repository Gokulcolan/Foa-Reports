import React, { useEffect, useRef, useState } from "react";
import ComponentHeadBar from "../../../components/common/componentHeadBar";
import { UsermenuItems } from "../../../utils/constants/menuItems";
import { useLocation } from "react-router";
import CommonTable from "../../../components/common/commonTable";
import { DockAuditReportFooter, DockAuditReportHeader, DockAuditReportHeader as initialHeaders, StripAuditReportFooter, StripAuditReportHeader } from "../../../utils/constants/tableData";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import DownloadIcon from "@mui/icons-material/Download";
import { Button } from "@mui/material";
import logo from "../../../assets/images/tvs-lucas-logo.png"
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../../redux/slice/userSlice";
import { SaDataApi, SaPartNumberApi } from "../../../redux/action/userAction";

const StripAuditReport = () => {

  const [selectedShift, setSelectedShift] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedPartNumber, setSelectedPartNumber] = useState("");
  const [error, setError] = useState(""); // Error state
  const [apiResponse, setApiResponse] = useState([]);
  const [headersState, setHeadersState] = useState(initialHeaders);
  const [tableValue, setTableValue] = useState([]);
  const [footerData, setFooterData] = useState([]);
  const [loadingPDF, setLoadingPDF] = useState(false); // PDF loading state

  const location = useLocation();
  const dispatch = useDispatch()
  const tableRef = useRef(null); // Ref to capture the table
  const currentPath = location.pathname;

  const { SaPartNumberDetail, SaDataDetail } = useSelector(userSelector);
  // Find the current menu item based on the path
  const currentMenuItem = UsermenuItems[0].isNested.find(
    (item) => item.path === currentPath
  );

  const ShiftOptions = [
    { value: "A", label: "A" },
    { value: "B", label: "B" },
    { value: "C", label: "C" },
  ];

  const partNumberOptions = (SaPartNumberDetail?.varieties || [])?.map((item) => ({
    value: item,
    label: item,
  }));

  useEffect(() => {
    if (selectedShift && selectedDate) {
      const payload = {
        date: selectedDate,
        shift: selectedShift,
      };
      dispatch(SaPartNumberApi(payload));
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
    dispatch(SaDataApi(payload))
  };


  useEffect(() => {
    if (SaDataDetail && SaDataDetail.Data && SaDataDetail.Data.length > 0) {
      const response = SaDataDetail.Data;
      setApiResponse(response);

      // Extract first item and required details
      const name = SaDataDetail?.PRODUCT || " ";
      const firstItem = response[0];
      const ltvsPartNo = firstItem?.LTVS_Part_No_Variety || "LTVS_Part_No_Variety";
      const CustomerPartNo = firstItem?.Customer_Part_No_Variety || "Customer_Part_No_Variety";
      const date = firstItem?.Date || "Date";
      const shift = firstItem?.Shift || "Shift";

      const formNumber = SaDataDetail.Form_No || " ";
      const QualityAuditor = firstItem?.Quality_Auditor || " ";
      const QualityVerifier = firstItem?.Quality_Verifier || " ";

      // Update headers with dynamic values
      const updatedHeaders = StripAuditReportHeader.map((row, rowIndex) => {
        return row.map((col, colIndex) => {
          if (rowIndex === 0 && colIndex === 0) {
            return { ...col, label: name };
          }
          else if (rowIndex === 1 && colIndex === 0) {
            return { ...col, label: `LTVS Part No: ${ltvsPartNo}` };
          }
          else if (rowIndex === 1 && colIndex === 1) {
            return { ...col, label: `Date: ${date}` };
          }
          else if (rowIndex === 2 && colIndex === 0) {
            return { ...col, label: `Customer Part No: ${CustomerPartNo}` };
          }
          else if (rowIndex === 2 && colIndex === 1) {
            return { ...col, label: `Shift: ${shift}` };
          }
          return col;
        });
      });


      // Update headers state
      setHeadersState(updatedHeaders);

      // // Prepare footer data
      const footerResponse = [
        { label: formNumber },
        { label: QualityAuditor },
        { label: QualityVerifier },
      ];
      setFooterData([footerResponse]);
    }
  }, [SaDataDetail]);


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

  const daTableData = mapResponseToRows(apiResponse, headersState);

  const downloadPDF = async () => {
    setLoadingPDF(true);
    const input = tableRef.current;

    if (!input) {
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
        Error={error} />
      {apiResponse && apiResponse.length > 0 ? (
        <div>
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
                  rows={daTableData}
                  footer={StripAuditReportFooter}
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
        ""
      )}
    </div>
  );
};

export default StripAuditReport;
