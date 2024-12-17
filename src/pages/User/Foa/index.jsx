import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router";
import { UsermenuItems } from "../../../utils/constants/menuItems";
import ComponentHeadBar from "../../../components/common/componentHeadBar";
import { barcodeHeader, footer, headers, headers as initialHeaders, scrapingFooter, scrapingHeader } from "../../../utils/constants/tableData";
import CommonTable from "../../../components/common/commonTable";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../../redux/slice/userSlice";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { barCodeDataApi, foaDataApi, FoapartNumberApi } from "../../../redux/action/userAction";
import logo from "../../../assets/images/tvs-lucas-logo.png"
import Loader from "../../../components/Loader/Loader";

const Foa = () => {

  const [tableValue, setTableValue] = useState([]);
  const [apiResponse, setApiResponse] = useState([]);
  const [barcodeApiResponse, setBarcodeApiResponse] = useState([]);
  const [scrapingApiResponse, setScrapingApiResponse] = useState([])
  const [headersState, setHeadersState] = useState(initialHeaders);
  const [barcodeHeadersState, setBarcodeHeaderState] = useState(initialHeaders);
  const [scrapingHeaderState, setScrapingHeaderState] = useState(initialHeaders)
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
  const { foaDataDetail, FoaPartNumberDetail, barCodeDataDetail } = useSelector(userSelector);


  const currentMenuItem = UsermenuItems[0].isNested.find(
    (item) => item.path === currentPath
  );

  const ShiftOptions = [
    { value: "A", label: "A" },
    { value: "B", label: "B" },
    { value: "C", label: "C" },
  ];

  const partNumberOptions = (FoaPartNumberDetail?.varieties || [])?.map((item) => ({
    value: item,
    label: item,
  }));

  useEffect(() => {
    if (selectedShift && selectedDate) {
      const payload = {
        date: selectedDate,
        shift: selectedShift,
      };
      dispatch(FoapartNumberApi(payload));
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
    dispatch(foaDataApi(payload))
    dispatch(barCodeDataApi(payload))
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
      const partNo = foaDataDetail?.Form_Name || " ";
      const formNo = foaDataDetail.Form || "";
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
          if (rowIndex === 0 && colIndex === 1) {
            return { ...col, label: `Date : ${date}` };
          } else if (rowIndex === 0 && colIndex === 0) {
            return { ...col, label: partNo };
          } else if (rowIndex === 1 && colIndex === 1) {
            return { ...col, label: `Shift : ${shift}` };
          } else if (rowIndex === 2 && colIndex === 1) {
            return { ...col, label: `Customer / Line : ${customer}` };
          } else if (rowIndex === 2 && colIndex === 2) {
            return { ...col, label: checked };
          } else if (rowIndex === 2 && colIndex === 3) {
            return { ...col, label: success };
          } else if (rowIndex === 2 && colIndex === 4) {
            return { ...col, label: failure };
          } else if (rowIndex === 3 && col.label === note) {
            return {
              ...col,
              style: { backgroundColor: "yellow", fontWeight: "bold" },
            };
          } else if (rowIndex === 6 && col.label === time) {
            return {
              ...col,
              style: { backgroundColor: "yellow", fontWeight: "bold" },
            };
          } else if (rowIndex === 7 && col.label === time) {
            return {
              ...col,
              style: { backgroundColor: "yellow", fontWeight: "bold" },
            };
          } else if (rowIndex === 8 && col.label === time) {
            return {
              ...col,
              style: { backgroundColor: "yellow", fontWeight: "bold" },
            };
          }
          return col;
        });
      });
      setHeadersState(updatedHeaders);

      const footerResponse = [
        { label: firstItem.Quality_Supervisor || "" },
        { label: firstItem.Quality_Auditor || "" },
        { label: firstItem.Quality_Engineer || "" },
        { label: formNo || "" },
        { label: firstItem.Team_Lead || "" },
      ];

      setFooterData([footerResponse]);
    }
  }, [foaDataDetail]);

  useEffect(() => {
    if (barCodeDataDetail) {
      const response = barCodeDataDetail;
      setBarcodeApiResponse(response);
      setScrapingApiResponse(response?.Operator_Data);

      const BarcodeName = response?.Barcode || " ";
      const VendorCode = response?.Vendor_Code || " ";
      const Line = response?.Line || " ";
      const CustomerPartNo = response?.Customer_Part_No || " ";
      const Date = response?.Date || " ";
      const Shift = response?.Shift || " ";
      // Join the Barcode array with commas
      const Barcode = Array.isArray(response?.Barcodes)
        ? response.Barcodes.join(", ")
        : " ";

      const barcodeUpdatedHeaders = barcodeHeader.map((row, rowIndex) => {
        return row.map((col, colIndex) => {
          // Updating labels based on row and column index
          if (rowIndex === 1 && colIndex === 0) {
            return { ...col, label: BarcodeName };
          }
          if (rowIndex === 2 && colIndex === 0) {
            return { ...col, label: `Vendor Code: ${VendorCode}` };
          }
          if (rowIndex === 3 && colIndex === 0) {
            return { ...col, label: `Line: ${Line}` };
          }
          if (rowIndex === 4 && colIndex === 0) {
            return { ...col, label: `Customer Part No: ${CustomerPartNo}` };
          }
          if (rowIndex === 5 && colIndex === 0) {
            return { ...col, label: `Date: ${Date}` };
          }
          if (rowIndex === 6 && colIndex === 0) {
            return { ...col, label: `Shift: ${Shift}` };
          }
          if (rowIndex === 1 && colIndex === 3) {
            return { ...col, label: Barcode || " " };
          }
          return col;
        });
      });

      const scrapingUpdatedHeaders = scrapingHeader.map((row, rowIndex) => {
        return row.map((col, colIndex) => {

          // Updating labels based on row and column index

          return col;
        });
      });

      setBarcodeHeaderState(barcodeUpdatedHeaders);
      setScrapingHeaderState(scrapingUpdatedHeaders)
    }
  }, [barCodeDataDetail]);


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

  const foatableData = mapResponseToRows(apiResponse, headersState);
  const barcodeTableData = mapResponseToRows(barcodeApiResponse, barcodeHeadersState);
  const scrapingTableData = mapResponseToRows(scrapingApiResponse, scrapingHeaderState);

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

  // const downloadPDF = async () => {
  //   setLoadingPDF(true);
  //   const input = tableRef.current;

  //   if (!input) {
  //     console.error("Table reference not found!");
  //     setLoadingPDF(false);
  //     return;
  //   }

  //   try {
  //     const canvas = await html2canvas(input, {
  //       scale: 1.5,
  //       useCORS: true,
  //       allowTaint: true,
  //       backgroundColor: "#fff",
  //     });

  //     const imgData = canvas.toDataURL("image/jpeg", 0.7);
  //     const pdf = new jsPDF("p", "mm", "a4");

  //     const pageWidth = 210; // A4 page width in mm
  //     const pageHeight = 297; // A4 page height in mm
  //     const margin = 10; // Margin for both top and bottom
  //     const imgWidth = pageWidth - 2 * margin; // Adjusted width for margins
  //     const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio
  //     console.log(imgHeight, "imgHeight")
  //     let heightLeft = imgHeight;
  //     let position = margin;

  //     pdf.addImage(imgData, "JPEG", margin, position, imgWidth, imgHeight);
  //     heightLeft -= pageHeight - 2 * margin; // Account for margins in the remaining height
  //     position -= pageHeight - 2 * margin;

  //     while (heightLeft > 0) {
  //       pdf.addPage();
  //       pdf.addImage(imgData, "JPEG", margin, position, imgWidth, imgHeight);
  //       heightLeft -= pageHeight - 2 * margin;
  //       position -= pageHeight - 2 * margin;
  //     }

  //     // Convert to Blob for compatibility and download
  //     const pdfBlob = pdf.output("blob");
  //     const blobURL = URL.createObjectURL(pdfBlob);

  //     const link = document.createElement("a");
  //     link.href = blobURL;
  //     link.download = `${currentMenuItem?.name || "table"}.pdf`;
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);

  //   } catch (error) {
  //     console.error("Error generating PDF:", error);
  //   } finally {
  //     setLoadingPDF(false);
  //   }
  // };


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
                  rows={foatableData}
                  footer={footer}
                  footerData={footerData}
                  handleDropdownChange={handleDropdownChange}
                  image={logo}
                />
                <br />
                <CommonTable
                  headers={barcodeHeadersState}
                  rows={barcodeTableData}
                  // footer={footer}
                  // footerData={footerData}
                  handleDropdownChange={handleDropdownChange}
                />
                <br />
                <CommonTable
                  headers={scrapingHeaderState}
                  rows={scrapingTableData}
                  footer={scrapingFooter}
                  footerData={footerData}
                  handleDropdownChange={handleDropdownChange}
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

export default Foa;
