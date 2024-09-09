import React from "react";
import "../../styles/commonRegularTable.css"

const CommonTable = ({
  headers,
  rows,
  footer,
  footerData,
  handleDropdownChange,
}) => {
  return (
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
                  style={{ fontWeight: "600", backgroundColor: "#c2c1c1",fontSize:"18px" }}
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
  );
};

export default CommonTable;

// import React from "react";
// import "../../styles/commonRegularTable.css"

// const CommonTable = ({
//   headers,
//   rows,
//   footer,
//   footerData,
//   handleDropdownChange,
// }) => {
//   return (
//     <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
//       <thead>
//         {headers?.map((headerRow, rowIndex) => (
//           <tr key={rowIndex}>
//             {headerRow.map((header, colIndex) => (
//               <th
//                 key={colIndex}
//                 colSpan={header.colSpan}
//                 rowSpan={header.rowSpan}
//                 // style={{
//                 //   backgroundColor: "#f2f2f2", // For better visibility
//                 //   border: "1px solid black", // Make the borders visible
//                 //   padding: "8px",
//                 //   textAlign: "center",
//                 //   ...header.style, // Apply custom style if available
//                 // }}
//               >
//                 {header.label}
//               </th>
//             ))}
//           </tr>
//         ))}
//       </thead>
//       <tbody>
//         {rows?.map((row, rowIndex) => (
//           <tr key={rowIndex}>
//             {row.map((cell, colIndex) => (
//               <td
//                 key={colIndex}
//                 style={{
//                   border: "1px solid black", // Make the borders visible
//                   padding: "8px",
//                   textAlign: "center",
//                 }}
//               >
//                 {cell.input ? (
//                   <input
//                     type="text"
//                     value={cell.value}
//                     onChange={(e) =>
//                       handleDropdownChange(e, rowIndex, colIndex)
//                     }
//                     style={{ width: "80%" }}
//                   />
//                 ) : (
//                   cell.value
//                 )}
//               </td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//       {footer && (
//         <tfoot>
//           {footer.map((footerRow, rowIndex) => (
//             <tr key={rowIndex}>
//               {footerRow.map((footerCell, colIndex) => (
//                 <td
//                   key={colIndex}
//                   colSpan={footerCell.colSpan}
//                   style={{
//                     fontWeight: "600",
//                     backgroundColor: "#c2c1c1",
//                     fontSize: "18px",
//                     border: "1px solid black", // For visibility
//                     padding: "8px",
//                   }}
//                 >
//                   {footerData && footerData[rowIndex]?.[colIndex]?.label
//                     ? `${footerCell.label} ${footerData[rowIndex][colIndex].label}`
//                     : footerCell.label}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tfoot>
//       )}
//     </table>
//   );
// };

// export default CommonTable;

