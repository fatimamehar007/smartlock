import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Link,
  Divider,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const predefinedUsername = "admin";
      const predefinedPassword = "admin123";
  
      if (email === predefinedUsername && password === predefinedPassword) {
        localStorage.setItem("authToken", "sampleToken123");
        localStorage.setItem("username", email);
        localStorage.setItem("password", password);
  
        navigate("/main");
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#000",
        px: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 340,
          p: 2.5,
          textAlign: "center",
          borderRadius: "12px",
          backgroundColor: "#fff",
          color: "#000",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Grand Hotel', cursive",
            fontWeight: 600,
            color: "#000",
            mb: 2,
          }}
        >
          NexusLock
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Box component="form" sx={{ mt: 1 }}>
          <TextField
            label={<span style={{ color: "#000" }}>Username or email</span>}
            variant="outlined"
            fullWidth
            margin="dense"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ fontSize: "0.875rem" }}
          />
          <TextField
            label={<span style={{ color: "#000" }}>Password</span>}
            type="password"
            variant="outlined"
            fullWidth
            margin="dense"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ fontSize: "0.875rem" }}
          />
          <Button
            variant="contained"
            fullWidth
            onClick={handleLogin}
            sx={{
              mt: 2,
              backgroundColor: "#000",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#000",
              },
              borderRadius: "8px",
            }}
          >
            Log In
          </Button>
        </Box>

        <Divider sx={{ my: 2, color: "#000" }}>OR</Divider>

        <Link
          href="#"
          underline="none"
          sx={{ display: "block", mt: 1.5, fontSize: 14, color: "#000" }}
        >
          Forgot password?
        </Link>
      </Paper>

      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 340,
          p: 1.5,
          textAlign: "center",
          borderRadius: "12px",
          mt: 1.5,
          backgroundColor: "#fff",
          color: "#000",
        }}
      >
        <Typography variant="body1">
          Don't have an account? {" "}
          <Link
            href="/signup"
            underline="none"
            sx={{ color: "#000", fontWeight: "bold" }}
          >
            Sign up
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
