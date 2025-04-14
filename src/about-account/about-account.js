import React, { useState } from "react";
import {
  AppBar,
  Box,
  Avatar,
  Typography,
  Button,
  Grid,
  Paper,
  Toolbar,
  IconButton,
} from "@mui/material";
import { Edit, AddAPhoto } from "@mui/icons-material";
import { offers as initialOffers } from "./redemption-offers"; // Assuming offers is exported
import { AddBox, FavoriteBorder, AccountCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const AboutAccount = () => {
  const navigate = useNavigate();
  const [offers, setOffers] = useState(initialOffers); // State to manage offers

  // Function to handle claiming an offer
  const handleClaim = (offerId) => {
    setOffers((prevOffers) => prevOffers.filter((offer) => offer.id !== offerId));
  };

  return (
    <Box sx={{ backgroundColor: "#fafafa", minHeight: "100vh" }}>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "#fff", borderBottom: "1px solid #dbdbdb" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ color: "#262626", fontWeight: "bold" }}>

          </Typography>
       
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          backgroundColor: "#fafafa",
          minHeight: "100vh",
          px: 2,
          py: 4,
        }}
      >
        {/* Profile Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "left",
            mb: 4,
          }}
        >
          <Box
            sx={{
              position: "relative",
              mr: { sm: 4 },
              mb: { xs: 2, sm: 0 },
            }}
          >
            <Avatar
              src="/path-to-profile-pic.jpg"
              sx={{
                width: 150,
                height: 150,
                border: "3px solid #dbdbdb",
              }}
            />
            <IconButton
              sx={{
                position: "absolute",
                bottom: 0,
                right: 0,
                backgroundColor: "#fff",
                border: "1px solid #dbdbdb",
              }}
            >
              <AddAPhoto />
            </IconButton>
          </Box>

          <Box sx={{ textAlign: { xs: "left", sm: "left" } }}>
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
              username_123
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", sm: "flex-start" },
                gap: 2,
                mb: 2,
              }}
            >
        

            </Box>
          </Box>
        </Box>


    
    

      </Box>
    </Box>
  );
};

export default AboutAccount;
