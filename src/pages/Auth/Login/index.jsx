import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Link,
  Checkbox,
  FormControlLabel,
  Paper,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Logo from "../../../assets/images/tvs-lucas-logo.png";
import { handleSesssionStorage } from "../../../utils/helperFunctions";
import { useNavigate } from "react-router";
import FormikTextField from "../../../components/common/commonTextField";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

const Login = () => {
  const navigate = useNavigate();
  // const [selectedValue, setSelectedValue] = useState("");

  // const roleOptions = [
  //   { value: 10, label: "User" },
  //   { value: 20, label: "Document Viewer" },
  //   { value: 30, label: "Admin" },
  // ];

  const formik = useFormik({
    initialValues: {
      // role: "", // Added initial value for role
      Username: "",
      password: "",
      remember: false,
    },
    validationSchema: Yup.object({
      // role: Yup.string().required("Role selection is required"), // Added validation for role
      Username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      if (values.Username === "Admin") {
        handleSesssionStorage("add", "ur", 3);
        navigate("/adminDashboard/foa"); // Replace with the actual admin dashboard route
      } else {
        handleSesssionStorage("add", "ur", 2);
        navigate("/userDashboard/foa");
      }
      // handle login logic here
    },
  });

  const handleBack = () => {
    handleSesssionStorage("add", "ur", 0);
    navigate("/");
  };

  return (
    <div className="bgLogin">
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "20px", // Adjust the distance from the top
              left: "20px", // Adjust the distance from the left
              width: "100px", // Adjust the logo size
              height: "auto", // Maintain aspect ratio
            }}
          >
            <span
              onClick={handleBack}
              style={{
                cursor: "pointer",
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ArrowCircleLeftIcon
                sx={{ fontSize: "30px", color: "white", marginRight: "8px" }}
              />
              Back
            </span>
          </div>
          <Paper elevation={6} sx={{ padding: 4, borderRadius: 2 }}>
            <div style={{ textAlign: "center" }}>
              <img src={Logo} alt="TVS Lucas Logo" />
            </div>
            <br />
            <Box
              component="form"
              noValidate
              sx={{ mt: 1 }}
              onSubmit={formik.handleSubmit}
            >
              {/* <FormikDropdown
                formik={formik}
                name="role"
                label="Select Role"
                options={roleOptions}
                required
              /> */}

              <FormikTextField
                formik={formik}
                name="Username"
                label="Username"
                type="text"
                required
              />

              <FormikTextField
                formik={formik}
                name="password"
                label="Password"
                type="password"
                required
              />

              <Box display="flex" justifyContent="space-between">
                <FormControlLabel
                  control={
                    <Checkbox
                      name="remember"
                      color="primary"
                      checked={formik.values.remember}
                      onChange={formik.handleChange}
                    />
                  }
                  label="Remember me"
                />
                <Link className="forgotPassword" href="#">
                  Forgot password?
                </Link>
              </Box>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                className="loginBtn"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
