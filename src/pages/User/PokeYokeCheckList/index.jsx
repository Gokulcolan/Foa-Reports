import React from 'react'
import { useLocation } from 'react-router';
import { UsermenuItems } from '../../../utils/constants/menuItems';
import ComponentHeadBar from '../../../components/common/componentHeadBar';
import CommonTable from '../../../components/common/commonTable';
import { PokeYokeChecklistHeaders } from '../../../utils/constants/tableData';

const PokeYokeCheckList = () => {
  
  const location = useLocation();
  const currentPath = location.pathname;

  // Find the current menu item based on the path
  const currentMenuItem = UsermenuItems[0].isNested.find(
    (item) => item.path === currentPath
  );

  // const mapResponseToRows = (apiResponse, headers) => {
  //   return apiResponse.map((item) => {
  //     const row = [];
  //     headers.forEach((headerRow) => {
  //       headerRow.forEach((header) => {
  //         if (header.id) {
  //           row.push({ value: item[header.id] || "" });
  //         }
  //       });
  //     });
  //     return row;
  //   });
  // };

  // const tableData = mapResponseToRows(apiResponse, headersState);

  return (
    <div>
      <ComponentHeadBar mainHeading={currentMenuItem?.name} />

      <div >
        <CommonTable
          headers={PokeYokeChecklistHeaders}
          // rows={tableData}
          // footer={footer}
          // footerData={footerData}
          // handleDropdownChange={handleDropdownChange}
        />
      </div>
    </div>
  )
}

export default PokeYokeCheckList