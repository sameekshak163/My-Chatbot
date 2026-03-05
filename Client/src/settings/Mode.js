import { useState, useEffect } from "react";
import {
  Drawer,
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  Stack,
  IconButton
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Chat({ open, setOpen }) {

  const [botName, setBotName] = useState(localStorage.getItem("botName") || "My Chatbot");
  const [fontSize, setFontSize] = useState(localStorage.getItem("fontSize") || "16");

  useEffect(() => {
    localStorage.setItem("botName", botName);
    localStorage.setItem("fontSize", fontSize);
  }, [botName, fontSize]);

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => setOpen(false)}
    >
      <Box
        sx={{
          width: 350,
          height: "100vh",
          display: "flex",
          flexDirection: "column"
        }}
      >

        {/* 🔵 HEADER */}
        <Box
          sx={{
            height: 55,
            backgroundColor: "#1976d2",
            color: "white",
            display: "flex",
            alignItems: "center",
            px: 1
          }}
        >
          <IconButton onClick={() => setOpen(false)}>
            <ArrowBackIcon sx={{ color: "white" }} />
          </IconButton>

          <Typography variant="h6" sx={{ ml: 1 }}>
            Chat Settings
          </Typography>
        </Box>

        {/* 🔹 BODY */}
        <Box sx={{ p: 3 }}>
          <Stack spacing={3}>
            <TextField
              label="Chatbot Name"
              value={botName}
              onChange={(e) => setBotName(e.target.value)}
              fullWidth
            />

            <Select
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
              fullWidth
            >
              <MenuItem value="14">Small</MenuItem>
              <MenuItem value="16">Medium</MenuItem>
              <MenuItem value="20">Large</MenuItem>
            </Select>
          </Stack>
        </Box>

      </Box>
    </Drawer>
  );
}