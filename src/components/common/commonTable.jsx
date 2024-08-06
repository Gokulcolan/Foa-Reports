import React from "react";

const CommonTable = ({ columns, rows }) => {
  return (
    <table >
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.id} >{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex} >
            {columns.map((column) => (
              <td key={column.id} >{row[column.id]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CommonTable;
