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
    { label: "Note", rowSpan: 2 },
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
    { label: "8.00 Am", id: "8Am/4Pm/12Am", rowSpan: 1, colSpan: 1 }, // First row timings
    { label: "10.00 Am", id: "10Am/6Pm/2Am", rowSpan: 1, colSpan: 1 },
    { label: "12.00 Pm", id: "12Pm/8Pm/4Am", rowSpan: 1, colSpan: 1 },
    { label: "2.00 Pm", id: "2Pm/10Pm/6Am", rowSpan: 1, colSpan: 1 },
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
      label: "QualityAuditor -",
      colSpan: 2,
    },
    {
      label: "QualitySupervisor -",
      colSpan: 2,
    },
    {
      label: "QualityEngineer -",
      colSpan: 4,
    },
    {
      label: "",
      colSpan: 3,
    },
    {
      label: "TeamLead - ",
      colSpan: 3,
    },
  ],
];

export const barcodeHeader = [
  [{ label: "Barcode Details", colSpan: 4, rowSpan: 1 }],
  [
    { label: "", id: "BarcodeName", colSpan: 1, rowSpan: 1 },
    { label: "Apply your barcode sticker here.", colSpan: 1, rowSpan: 7 },
    { label: "Scanning    ", colSpan: 1, rowSpan: 7 },
    { label: "Barcode", id: "Barcode", rowSpan: 6 },
  ],
  [
    { label: "Vendor Code", id: "Vendor_Code", colSpan: 1, rowSpan: 1 },
  ],
  [
    { label: "Line", id: "Line", colSpan: 1, rowSpan: 1 },
  ],
  [
    { label: "Customer Part No", id: "Customer_Part_No", colSpan: 1, rowSpan: 1 },
    // { label: "Barcode", id: "Barcode", colSpan: 1, rowSpan: 3 },

  ],
  [
    { label: "Date", id: "Date", colSpan: 1, rowSpan: 1 },
  ],
  [
    { label: "Shift", id: "Shift", colSpan: 1, rowSpan: 1 },
  ],
]

export const scrapingHeader = [
  [{ label: "Scraping Check & Operator Details", colSpan: 8, rowSpan: 1 }],
  [
    { label: "Process Stage", id: "Process_Stage", rowSpan: 3 },
    { label: "Operator CC No", id: "Operator_CC_No", rowSpan: 3 },
    { label: "Name (Skilled Operator)", id: "Operator_Name", rowSpan: 3 },
    { label: "Compliance", id: "Compliance", rowSpan: 3 },
    { label: "8.00 Am", id: "time", colSpan: 1 }, // First row timings
    { label: "10.00 Am", id: "time", colSpan: 1 },
    { label: "12.00 Pm", id: "time", colSpan: 1 },
    { label: "2.00 Pm", id: "time", colSpan: 1 },
  ],
  [
    { label: "4.00 Pm", colSpan: 1 }, // Second row timings
    { label: "6.00 Pm", colSpan: 1 },
    { label: "8.00 Pm", colSpan: 1 },
    { label: "10.00 Pm", colSpan: 1 },
  ],
  [
    { label: "12.00 Am", colSpan: 1 }, // Third row timings
    { label: "2.00 Am", colSpan: 1 },
    { label: "4.00 Am", colSpan: 1 },
    { label: "6.00 Am", colSpan: 1 },
  ],

]

export const scrapingFooter = [
  [
    {
      label: "QualityAuditor -",
      colSpan: 1,
    },
    {
      label: "QualitySupervisor -",
      colSpan: 2,
    },
    {
      label: "QualityEngineer-",
      colSpan: 2,
    },
    {
      label: "",
      colSpan: 2,
    },
    {
      label: "TeamLead - ",
      colSpan: 2,
    },
  ],
];

// export const PokeYokeChecklistHeaders = [
//   [
//     {
//       label: "",
//       colSpan: 4, // This spans across the entire table

//     },
//     {
//       label: "DATE:",
//       colSpan: 2,
//     },
//     {
//       label: "SHIFT:",
//       colSpan: 1,
//     },
//   ],
//   [
//     {
//       label: "Process No.",
//       rowSpan: 2,
//       colSpan: 1,
//       id: "Process_Number"

//     },
//     {
//       label: "Program No.",
//       rowSpan: 2,
//       colSpan: 1,
//       id: "Program_Number"
//     },
//     {
//       label: "Process",
//       rowSpan: 2,
//       colSpan: 1,
//       id: "Process"

//     },
//     {
//       label: "Product Characteristics",
//       rowSpan: 2,
//       colSpan: 1,
//       id: "Product_Characteristics"

//     },
//     {
//       label: "Status",
//       colSpan: 2,  // "OK" and "NOT OK" will be under this header
//     },
//     {
//       label: "Remarks",
//       id: "Remarks",
//       colSpan: 1,
//       rowSpan: 2,
//     },
//   ],
//   [
//     {
//       label: "OK",
//       id: "Ok",
//       colSpan: 1,
//       rowSpan: 1,
//     },
//     {
//       label: "NOT OK",
//       id: "Not_Ok",
//       colSpan: 1,
//       rowSpan: 1,
//     }
//   ]
// ];

export const PokeYokeChecklistHeaders = [
  [
    {
      label: "",
      colSpan: 4, // This spans across the entire table
    },
    {
      label: "DATE:",
      colSpan: 2,
    },
    {
      label: "SHIFT:",
      colSpan: 1,
    },
  ],
  [
    {
      label: "Process No.",
      id: "Process_Number"
    },
    {
      label: "Program No.",
      id: "Program_Number"
    },
    {
      label: "Process",
      id: "Process"
    },
    {
      label: "Product Characteristics",
      id: "Product_Characteristics"
    },
    {
      label: "Ok",
      id: "Ok",
    },
    {
      label: "Not Ok",
      id: "Not_Ok",
    },
    {
      label: "Remarks",
      id: "Remarks",

    },
  ],
];

export const PokeYokeFooter = [
  [
    {
      label: "Part No Variety -",
      colSpan: 3,
    },
    {
      label: "Quality Auditor -",
      colSpan: 1,
    },

    {
      label: "Quality Engineer -",
      colSpan: 3,
    },

  ],
];

export const ProcessApprovalReportHeader = [
  [
    { label: "\u00A0", colSpan: 8 },
    { label: "Date:", colSpan: 3 },
  ],
  [
    { label: "\u00A0", colSpan: 8 },
    { label: "Shift:", colSpan: 3 },
  ],
  [
    { label: "S.No", colSpan: 1, rowSpan: 2, id: "SL_No" },
    { label: "Program No/Product Name", colSpan: 1, rowSpan: 2, id: "Program_no_Product_name" },
    { label: "Process Name/Opn Description", colSpan: 1, rowSpan: 2, id: "Process_Name_Opn_Description" },
    { label: "Product characteristics", colSpan: 1, rowSpan: 2, id: "Product_Characteristic" },
    { label: "Specification/Tolerance", colSpan: 1, rowSpan: 2, id: "Specification_Tolerance" },
    { label: "Evaluation Measurement Method", colSpan: 1, rowSpan: 2, id: "Evaluation_Measurement_method" },
    { label: "Machine Spec Set Value", colSpan: 2, rowSpan: 1 },
    { label: "Ok Part Actual", colSpan: 2, rowSpan: 1 },
    { label: "Master Bad Sample Actual", colSpan: 1, rowSpan: 2, id: "Master_bad_sample_Actual" },
  ],
  [
    { label: "Min", colSpan: 1, id: "Machine_spec_set_value_Max" },
    { label: "Max", colSpan: 1, id: "Machine_spec_set_value_Min" },
    { label: "1", colSpan: 1, id: "Ok_Part_Actual_1" },
    { label: "2", colSpan: 1, id: "Ok_Part_Actual_2" }
  ]
]

export const ProcessApprovalFooter = [
  [
    {
      label: "Form No -",
      colSpan: 2,
    },
    {
      label: "Part No Variety -",
      colSpan: 2,

    },

    {
      label: "Quality Auditor -",
      colSpan: 3,

    },

    {
      label: "Quality Engineer -",
      colSpan: 4,

    },

  ],
];

export const DockAuditReportHeader = [
  [
    { label: "\u00A0", colSpan: 7 },
  ],
  [
    { label: "\u00A0", colSpan: 5 },
    { label: "Date:", colSpan: 2 },
  ],
  [
    { label: "\u00A0", colSpan: 5 },
    { label: "Shift:", colSpan: 2 },
  ],
  [
    { label: "Description Performance", colSpan: 1, id: "DESCRIPTION_PERFORMANCE" },
    { label: "Specification", colSpan: 1, id: "SPECIFICATION" },
    { label: "1", colSpan: 1, id: "A_1" },
    { label: "2", colSpan: 1, id: "A_2" },
    { label: "3", colSpan: 1, id: "A_3" },
    { label: "4", colSpan: 1, id: "A_4" },
    { label: "5", colSpan: 1, id: "A_5" },
  ],
]

export const DockAuditReportFooter = [
  [
    {
      label: "Form No -",
      colSpan: 1,
    },
    {
      label: "Quality Auditor -",
      colSpan: 3,
    },
    {
      label: "Quality Verifier -",
      colSpan: 3,
    },
  ],
];

export const StripAuditReportHeader = [
  [
    { label: "\u00A0", colSpan: 3 },
  ],
  [
    { label: "\u00A0", colSpan: 2 },
    { label: "Date:", colSpan: 1 },
  ],
  [
    { label: "\u00A0", colSpan: 2 },
    { label: "Shift:", colSpan: 1 },
  ],
  [
    { label: "Description Performance", colSpan: 1, id: "DESCRIPTION" },
    { label: "Specification", colSpan: 1, id: "SPECIFICATION" },
    { label: "Actual", colSpan: 1, id: "ACTUAL" },
  ],
]

export const StripAuditReportFooter = [
  [
    
    {
      label: "Form No -",
      colSpan: 1,
    },

    {
      label: "Quality Auditor -",
      colSpan: 1,
    },

    {
      label: "Quality Verifier -",
      colSpan: 1,
    },

  ],
];