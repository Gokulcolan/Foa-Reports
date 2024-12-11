import React, { useState } from "react";
import {
  Container,
  Box,
  Button,
  Link,
  Checkbox,
  FormControlLabel,
  Paper,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Logo from "../../../assets/images/tvs-lucas-logo.png";
import { handleSesssionStorage } from "../../../utils/helperFunctions";
import { useNavigate } from "react-router";
import FormikTextField from "../../../components/common/commonTextField";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const formik = useFormik({
    initialValues: {
      Username: "",
      password: "",
      remember: false,
    },
    validationSchema: Yup.object({
      Username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      // Clear previous errors
      formik.setErrors({});
      if (values.Username === "MGRS" && values.password === "mgrs123") {
        handleSesssionStorage("add", "ur", 2);
        navigate("/userDashboard/foa");
      } else {
        // Set errors individually based on the issue
        const errors = {};
        if (values.Username !== "MGRS") {
          errors.Username = "Invalid username";
        }
        if (values.password !== "mgrs123") {
          errors.password = "Invalid password";
        }
        formik.setErrors(errors);
      }
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
              <FormikTextField
                formik={formik}
                name="Username"
                label="Username"
                type="text"
                required
                error={formik.touched.Username && Boolean(formik.errors.Username)}
                helperText={formik.touched.Username && formik.errors.Username}
              />

              <TextField
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                fullWidth
                required
                variant="outlined"
                margin="normal"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
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
