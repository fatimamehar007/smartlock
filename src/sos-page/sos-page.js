import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Phone, Warning, Lock } from "@mui/icons-material";

const EmergencyHelp = () => {
  const navigate = useNavigate();

  const handleCallSecurity = () => {
    window.location.href = "tel:911"; // Replace with actual security number
  };

  const handleLockDown = () => {
    alert("Lockdown Protocol Activated! Security has been alerted.");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#ffcccc"
    >
      <Paper
        sx={{
          padding: 4,
          textAlign: "center",
          borderRadius: "10px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          maxWidth: 400,
        }}
      >
        <Warning sx={{ fontSize: 80, color: "#d32f2f" }} />
        <Typography variant="h5" fontWeight="bold" color="#d32f2f" mt={2}>
          Security Breach Detected!
        </Typography>
        <Typography variant="body1" mt={2}>
          Immediate action is required. Contact security or initiate lockdown.
        </Typography>
        <Box mt={3} display="flex" flexDirection="column" gap={2}>
          <Button
            variant="contained"
            color="error"
            startIcon={<Phone />}
            onClick={handleCallSecurity}
          >
            Call Security
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Lock />}
            onClick={handleLockDown}
          >
            Initiate Lockdown
          </Button>
          <Button variant="text" color="secondary" onClick={() => navigate("/home")}>
            Cancel
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default EmergencyHelp;
