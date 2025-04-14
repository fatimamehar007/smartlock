import React from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const generateHistoryData = () => {
  const events = [
    "Unauthorized entry attempt",
    "Door unlocked successfully",
    "Door locked manually",
    "Failed fingerprint authentication",
    "PIN entered incorrectly",
    "Remote unlock command received",
    "Battery low warning",
    "System rebooted",
    "Access denied due to timeout",
    "Multiple incorrect attempts detected",
  ];

  const getRandomDate = () => {
    const start = new Date(2024, 0, 1);
    const end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  };

  return Array.from({ length: 100 }, (_, index) => {
    const date = getRandomDate();
    return {
      id: index + 1,
      event: events[Math.floor(Math.random() * events.length)],
      timestamp: date.toLocaleString(),
    };
  });
};

const historyData = generateHistoryData();

const SmartLockHistory = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f7f7f7",
        p: 3,
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontWeight: 700,
          fontSize: "2rem",
          textAlign: "center",
          color: "#333",
          fontFamily: "'Lora', serif",
        }}
      >
        Smart Lock Access History
      </Typography>
      <TableContainer component={Paper} sx={{ maxWidth: "80%", borderRadius: 4, overflow: "hidden" }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#000" }}>
              <TableCell sx={{ color: "#fff", fontWeight: 600 }}>ID</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: 600 }}>Event</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: 600 }}>Timestamp</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {historyData.map((entry) => (
              <TableRow key={entry.id}>
                <TableCell>{entry.id}</TableCell>
                <TableCell>{entry.event}</TableCell>
                <TableCell>{entry.timestamp}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SmartLockHistory;
