import React from "react";
import { useNavigate } from "react-router";
import { handleSesssionStorage } from "../../utils/helperFunctions";
import { Box, Button } from "@mui/material";

const LandingScreen = () => {
  const navigate = useNavigate();

  const handleOpen = () => {
    handleSesssionStorage("add", "ur", 1);
    navigate("/viewerLogin/login");
  };

  const handleOpenWorkersLandingPage = () => {
    window.location.href = "http://192.168.43.197:8501"; // Opens in the same tab
  };

  return (
    <div className="bgLogin">
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column", // Align items in a column
          justifyContent: "center", // Center vertically
          alignItems: "center", // Center horizontally
        }}
      >
        <h2 style={{ fontSize: "54px", color: "white" }}>
          DIGITAL LOG
        </h2>

        <div>
          <Button
            onClick={handleOpenWorkersLandingPage}
            variant="outlined"
            className="landingBtn"
          >
            DSOP DASHBOARD
          </Button>
          <Button
            variant="outlined"
            className="landingBtn"
            onClick={handleOpen}
          >
            DSOP DOCUMENT VIEWER
          </Button>
         
        </div>
      </Box>
    </div>
  );
};

export default LandingScreen;
