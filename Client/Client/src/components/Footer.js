import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1976d2",
        color: "white",
        textAlign: "center",
        p: 2
      }}
    >
      <Typography>
        © 2026 My Chatbot. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
