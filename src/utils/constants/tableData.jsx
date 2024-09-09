export const headers = [
  [
    { label: "", colSpan: 5 },
    { label: "Date:", colSpan: 5 },
    { label: "Retroactive check result", colSpan: 4 },
  ],
  [
    { label: "FIRST OFF APPROVAL REPORT", colSpan: 5 },
    { label: "Shift:", colSpan: 5 },
    { label: "Total Checked", colSpan: 2 },
    { label: "Ok", colSpan: 1 },
    { label: "Not ok", colSpan: 1 },
  ],
  [
    { label: "MODULE : GRS LD MAIN ASSY", colSpan: 5 },
    { label: "Customer:", colSpan: 5 },
    { label: "", colSpan: 2 },
    { label: "", colSpan: 1 },
    { label: "", colSpan: 1 },
  ],
  [
    { label: "NOTE", rowSpan: 2 },
    { label: "Shift change over", rowSpan: 2 },
    { label: "Product change over", rowSpan: 2 },
    { label: "Tool change over", rowSpan: 2 },
    { label: "Power failure", rowSpan: 2 },
    { label: "Breakdown (P/Y or M/c or Tool)", colSpan: 2, rowSpan: 2 },
    { label: "Shut down", colSpan: 2, rowSpan: 2 },
    { label: "Last off", rowSpan: 2 },
    { label: "Patrol Inspection", colSpan: 4 },
  ],
  [
    { label: "Std Weight Verification:", colSpan: 4 },
  ],
  [
    { label: "Process No", rowSpan: 4, id: "Process_Number" },
    { label: "Process Name / Opn. description", rowSpan: 4, id: "Process_Name" },
    { label: "Product Characteristics", rowSpan: 4, id: "Product_Characteristics" },
    { label: "Specification / Tolerance", rowSpan: 4, id: "Specifications_Tolerance" },
    { label: "Evaluation / Measurement method", rowSpan: 4, id: "Evaluation_Measurement_method" },
    { label: "Actual", colSpan: 5 }, // 5 columns for the first part
    { label: "Actual", colSpan: 4 }, // For first row of timings
    // { label: "Actual", colSpan: 4 }, // For second row of timings
    // { label: "Actual", colSpan: 4 }, // For third row of timings
  ],
  [
    { label: "1", rowSpan: 3, id: "AO_1" },
    { label: "2", rowSpan: 3, id: "AO_2" },
    { label: "3", rowSpan: 3, id: "AO_3" },
    { label: "4", rowSpan: 3, id: "AO_4" },
    { label: "5", rowSpan: 3, id: "AO_5" },
    { label: "8.00 Am", id: "Actual_Time_Obs_1", rowSpan: 1, colSpan: 1 }, // First row timings
    { label: "10.00 Am", id: "Actual_Time_Obs_2", rowSpan: 1, colSpan: 1 },
    { label: "12.00 Pm", id: "Actual_Time_Obs_3", rowSpan: 1, colSpan: 1 },
    { label: "2.00 Pm", id: "Actual_Time_Obs_4", rowSpan: 1, colSpan: 1 },
  ],
  [
    { label: "4.00 Pm", rowSpan: 1, colSpan: 1 }, // Second row timings
    { label: "6.00 Pm", rowSpan: 1, colSpan: 1 },
    { label: "8.00 Pm", rowSpan: 1, colSpan: 1 },
    { label: "10.00 Pm", rowSpan: 1, colSpan: 1 },
  ],
  [
    { label: "12.00 Am", rowSpan: 1, colSpan: 1 }, // Third row timings
    { label: "2.00 Am", rowSpan: 1, colSpan: 1 },
    { label: "4.00 Am", rowSpan: 1, colSpan: 1 },
    { label: "6.00 Am", rowSpan: 1, colSpan: 1 },
  ],
];



export const footer = [
  [
    {
      label: "Remarks - ",
      colSpan: 3,
    },
    {
      label: "QualityAuditor -",
      colSpan: 5,
    },
    {
      label: "QualityVerifier -",
      colSpan: 6,
    },
    // {
    //   label: "Time -",
    //   colSpan: 2,
    // },
  ],
];

export const PokeYokeChecklistHeaders = [
  [
    {
      label: "POKA YOKE CHECK LIST - MGRS M70 -PSSF (YED) MAIN ASSEMBLY NEW LINE",
      colSpan: 4, // This spans across the entire table
    },
    {
      label: "DATE:",
      colSpan: 2
    },
    {
      label: "SHIFT:",
      colSpan: 1
    },
  ],
  [

    {
      label: "PROCESS NO.",
      rowSpan: 2,
      id: "Process_Number"
    },
    {
      label: "Program No.",
      rowSpan: 2,
      id: "Program_no",
    },
    {
      label: "PROCESS",
      rowSpan: 2,
      id: "Process_Name",
    },
    {
      label: "PRODUCT CHARACTERISTICS",
      rowSpan: 2,
      id: "Product_Characteristics",
    },
    {
      label: "STATUS",
      colSpan: 2,  // "OK" and "NOT OK" will be under this header
    },
    {
      label: "REMARKS",
      rowSpan: 2
    },
  ],
  [
    {
      label: "OK",
      id: "ok"
    },
    {
      label: "NOT OK",
      id: "Not_ok"
    }
  ]
];

