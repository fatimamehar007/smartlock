import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Grid,
  Paper,
  Button,
  Snackbar,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import { Lock, LockOpen, AccountCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const locksData = [
  { id: 1, location: "Main Entrance", status: "Locked", image: "eventimgs/sl1.jpeg" },
  { id: 2, location: "Garage Door", status: "Unlocked", image: "eventimgs/sl1.jpeg" },
  { id: 3, location: "Back Door", status: "Locked", image: "eventimgs/sl1.jpeg" },
];

const SmartLock = () => {
  const navigate = useNavigate();
  const [locks, setLocks] = useState(locksData);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "info" });
  const [passwordDialog, setPasswordDialog] = useState({ open: false, lockId: null });
  const [password, setPassword] = useState("");

  const handlePasswordSubmit = () => {
    if (password === "pass123") {
      setLocks((prevLocks) =>
        prevLocks.map((lock) =>
          lock.id === passwordDialog.lockId
            ? { ...lock, status: lock.status === "Locked" ? "Unlocked" : "Locked" }
            : lock
        )
      );
      const updatedLock = locks.find((lock) => lock.id === passwordDialog.lockId);
      setSnackbar({
        open: true,
        message: `${updatedLock.location} is now ${updatedLock.status === "Locked" ? "Unlocked" : "Locked"}`,
        severity: updatedLock.status === "Locked" ? "success" : "warning",
      });
      setPasswordDialog({ open: false, lockId: null });
      setPassword("");
    } else {
      setSnackbar({ open: true, message: "Incorrect password", severity: "error" });
    }
  };

  return (
    <Box sx={{ backgroundColor: "#f4f6f9", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <AppBar position="sticky" sx={{ backgroundColor: "#fff", borderBottom: "1px solid #dbdbdb", boxShadow: "none" }}>
        <Toolbar sx={{ justifyContent: "space-between", px: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src="/logo512.png" alt="Logo" style={{ height: "40px", marginRight: "10px" }} />
            <Typography variant="h6" sx={{ color: "#262626", fontWeight: "600", letterSpacing: "0.5px" }}>
              NexusLock
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Button variant="contained" sx={{ backgroundColor: "#000", textTransform: "none", borderRadius: "8px" }} onClick={() => navigate("/sos-card")}>SOS</Button>
            <Button variant="contained" sx={{ backgroundColor: "#000", textTransform: "none", borderRadius: "8px" }} onClick={() => navigate("/accesss-page")}>Access History</Button>
            <IconButton onClick={() => navigate("/about")} sx={{ color: "#262626" }}>
              <AccountCircle fontSize="large" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Grid container spacing={3} sx={{ p: 4 }}>
        {locks.map((lock) => (
          <Grid item xs={12} sm={6} md={4} key={lock.id}>
            <Paper
              sx={{
                p: 3,
                textAlign: "center",
                borderRadius: "16px",
                boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.08)",
                backgroundColor: "#fff",
                transition: "0.3s",
                "&:hover": { transform: "translateY(-5px)", boxShadow: "0px 12px 28px rgba(0, 0, 0, 0.12)" },
              }}
            >
              <img
                src={lock.image}
                alt="Lock"
                style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "12px" }}
              />
              <Typography variant="h6" sx={{ mt: 2, fontWeight: "600", color: "#333" }}>
                {lock.location}
              </Typography>
              <Typography variant="body1" sx={{ mt: 1, fontWeight: "500", color: lock.status === "Locked" ? "#d32f2f" : "#388e3c" }}>
                Status: {lock.status}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                startIcon={lock.status === "Locked" ? <LockOpen /> : <Lock />}
                sx={{ mt: 2, textTransform: "none", fontWeight: "500", borderRadius: "8px", px: 3, py: 1, backgroundColor: "#000" }}
                onClick={() => setPasswordDialog({ open: true, lockId: lock.id })}
              >
                {lock.status === "Locked" ? "Unlock" : "Lock"}
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Dialog open={passwordDialog.open} onClose={() => setPasswordDialog({ open: false, lockId: null })}>
        <DialogTitle>Enter Password</DialogTitle>
        <DialogContent>
          <TextField type="password" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} autoFocus />
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePasswordSubmit} sx={{ backgroundColor: "#000", color: "#fff", '&:hover': { backgroundColor: "#333" } }}>Submit</Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={() => setSnackbar({ ...snackbar, open: false })}>
        <Alert severity={snackbar.severity} sx={{ width: "100%", borderRadius: "8px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)" }}>{snackbar.message}</Alert>
      </Snackbar>
    </Box>
  );
};

export default SmartLock;
