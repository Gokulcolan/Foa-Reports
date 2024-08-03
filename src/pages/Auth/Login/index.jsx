// src/LoginPage.js
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
import Logo from "../../../assets/images/tvs-lucas-logo.png";

const Login = () => {
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

            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
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
              />
              <Box display="flex" justifyContent="space-between">
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
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
