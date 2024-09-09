import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import CommonTable from "./commonTable";
import {
  AssemblyOfBGAssy,
  AssemblyOfEngagingLever,
  AssemblyOfYokeAssy,
  CEBracketassy,
  DEGrommetAssy,
  FixingBracketGreasing,
  GreasingOPShaftbush,
  headers,
  PinionPokaYokeValue,
  PlanetaryGearGreasing,
  ThurstCollarJumpRing,
} from "../../utils/constants/tableData";

export default function AccordionSlide() {
  const [expanded, setExpanded] = React.useState(false);
  const [tableValue, setTableValue] = React.useState([]);

  // Object to store all table data
  const tables = {
    panel1: {
      title: "Pinion Poka Yoke, Drive Greasing, Output Shaft PY",
      data: PinionPokaYokeValue,
    },
    panel2: {
      title: "Thrust Collar & Jump ring Assy & closing &proof load checking",
      data: ThurstCollarJumpRing,
    },
    panel3: {
      title: "Fixing bracket greasing,output shaft,annulus & drive assy",
      data: FixingBracketGreasing,
    },
    panel4: {
      title:
        "Assembly of engaging lever,output shaft annulus & drive offset assy",
      data: AssemblyOfEngagingLever,
    },
    panel5: {
      title: "D.E.Grommet assy & solenoid switch assy",
      data: DEGrommetAssy,
    },
    panel6: {
      title: "Greasing of OP shaft bush and annulus teeth",
      data: GreasingOPShaftbush,
    },
    panel7: {
      title: "Planetery gear greasing & Assembly of packing ",
      data: PlanetaryGearGreasing,
    },
    panel8: {
      title: "Assembly of Yoke assembly & Armature assy",
      data: AssemblyOfYokeAssy,
    },
    panel9: {
      title: "Assembly of Yoke & BG Assy",
      data: AssemblyOfBGAssy,
    },
    panel10: {
      title: "CE bracket assy & greasing & STA nut assy",
      data: CEBracketassy,
    },
  };

 

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    setTableValue(tables[panel]?.data || []); // Set table data properly
  };

  return (
    <div>
      {/* {Object.keys(tables).map((panel) => (
        <Accordion
          key={panel}
          expanded={expanded === panel}
          onChange={handleAccordionChange(panel)}
          sx={{
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
          }}
        >
          <AccordionSummary
            expandIcon={
              <div
                style={{
                  backgroundColor: "rgb(0, 87, 172)", // Set your desired background color
                  borderRadius: "50%", // Make the background circular
                  padding: "0px 3px", // Add some padding around the icon
                }}
              >
                <ExpandMoreIcon
                  style={{
                    color: "white",
                    margin: "3px 0px 0px 0px",
                    fontWeight: "bold",
                  }}
                />
              </div>
            }
            aria-controls={`${panel}-content`}
            id={`${panel}-header`}
          >
            <p className="foaList"> {tables[panel].title}</p>
          </AccordionSummary>
          <AccordionDetails>
           
          </AccordionDetails>
          <AccordionActions>
            <Button color="error" variant="outlined">
              Cancel
            </Button>
            <Button variant="contained" color="success">
              SAVE
            </Button>
          </AccordionActions>
        </Accordion>
      ))} */}



    </div>
  );
}
