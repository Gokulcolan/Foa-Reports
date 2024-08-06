import React from "react";
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

const Login = () => {
  const navigate = useNavigate();
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
      console.log(values);
      if (values.Username === "Admin") {
        handleSesssionStorage("add", "ur", 2);
        navigate("/adminDashboard/foa"); // Replace with the actual admin dashboard route
      } else {
        handleSesssionStorage("add", "ur", 1);
        navigate("/userDashboard/foa");
      }
      // handle login logic here
    },
  });

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
          <Paper elevation={6} sx={{ padding: 4, borderRadius: 2 }}>
            <div style={{ textAlign: "center" }}>
              <img src={Logo} alt="#" />
            </div>
            <br />
            <Box
              component="form"
              noValidate
              sx={{ mt: 1 }}
              onSubmit={formik.handleSubmit}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="Username"
                label="Username"
                name="Username"
                autoComplete="Username"
                autoFocus
                value={formik.values.Username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.Username && Boolean(formik.errors.Username)
                }
                helperText={formik.touched.Username && formik.errors.Username}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
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
                <Link className="forgotPassword">Forgot password?</Link>
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
