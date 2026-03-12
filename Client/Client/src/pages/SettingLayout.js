import { Box, Button, Stack, Typography, Divider, IconButton } from "@mui/material";
import { Outlet, useNavigate} from "react-router-dom";
import { useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function SettingsLayout({ openProfile, openMode, openChat, openAccount, openLogout }) {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();


  const linkStyle = ({ isActive }) => ({
    background: isActive ? "#1976d2" : "transparent",
    color: isActive ? "white" : "black",
    borderRadius: 8,
    padding: "8px 12px",
    textAlign: "right",
    textDecoration: "none"
  });

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <IconButton onClick={() => navigate("/")}>
              <ArrowBackIcon sx={{ color: "white" }} />
           </IconButton>

      {/* LEFT SIDEBAR */}
      <Box sx={{
        width: 260,
        background: "#fff",
        borderRight: "1px solid #ddd",
        p: 3
      }}>
        <Typography variant="h5" mb={3}>Settings</Typography>

        <Stack spacing={2}>
          <Typography
          sx={{ cursor: "pointer" }}
          onClick={() => {
            setOpen(false);       // close settings
            openProfile();        // open profile drawer
          }}
        >
          Profile
        </Typography>
        <Typography
          sx={{ cursor: "pointer" }}
          onClick={() => {
            setOpen(false);       // close settings
            openMode();     // open profile drawer
          }}
        >
          Mode
        </Typography>
        <Typography
          sx={{ cursor: "pointer" }}
          onClick={() => {
            setOpen(false);       // close settings
            openChat();     // open profile drawer
          }}
        >
          Chat
        </Typography>
         <Typography
          sx={{ cursor: "pointer" }}
          onClick={() => {
            setOpen(false);       // close settings
            openAccount();     // open profile drawer
          }}
        >
          Account
        </Typography>

          <Divider />

          <Typography
          sx={{ cursor: "pointer" }}
          onClick={() => {
            setOpen(false);       // close settings
            openLogout();     // open profile drawer
          }}
        >
          Logout
        </Typography>
        </Stack>
      </Box>

      {/* RIGHT CONTENT */}
      <Box sx={{ flex: 1, p: 5, overflowY: "auto" }}>
      </Box>

    </Box>
  );
}