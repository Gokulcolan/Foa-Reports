import React from "react";
import "../../styles/commonRegularTable.css"
// import logo from "../../assets/images/tvs-lucas-logo.png"

const CommonTable = ({
  headers,
  rows,
  footer,
  footerData,
  handleDropdownChange,
  image
}) => {
  return (
    <div className="table-container">
        {image ? <img src={image} alt="Logo" className="print-logo" /> : ""}
      {/* <img src={image}  className="print-logo" /> */}
      <table border="1">
        <thead>
          {headers?.map((headerRow, rowIndex) => (
            <tr key={rowIndex}>
              {headerRow.map((header, colIndex) => (
                <th
                  key={colIndex}
                  colSpan={header.colSpan}
                  rowSpan={header.rowSpan}
                  style={header.style} // Apply custom style if available
                >
                  {header.label} {/* Ensure label is displayed */}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {rows?.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>
                  {cell.input ? (
                    <input
                      type="text"
                      value={cell.value}
                      onChange={(e) =>
                        handleDropdownChange(e, rowIndex, colIndex)
                      }
                      style={{ width: "80%" }}
                    />
                  ) : (
                    cell.value
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {footer && (
          <tfoot>
            {footer.map((footerRow, rowIndex) => (
              <tr key={rowIndex}>
                {footerRow.map((footerCell, colIndex) => (
                  <td
                    key={colIndex}
                    colSpan={footerCell.colSpan}
                    style={{ fontWeight: "600", backgroundColor: "#97cbff", fontSize: "16px" }}
                  >
                    {footerData && footerData[rowIndex]?.[colIndex]?.label
                      ? `${footerCell.label} ${footerData[rowIndex][colIndex].label}`
                      : footerCell.label}
                  </td>
                ))}
              </tr>
            ))}
          </tfoot>
        )}
      </table>
    </div>
  );
};

export default CommonTable;

