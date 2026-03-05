import React, { useState } from "react";
import {Box} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import ArchiveIcon from "@mui/icons-material/Archive";  
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Avatar
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function Header() {

  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const handleShare = () => {
    alert("Share clicked");
    closeMenu();
  };
  const handleDelete = () => {
    localStorage.removeItem("chatHistory");
    alert("Chat Deleted");
    closeMenu();
  };

  return (
    <Box
          sx={{
            height: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
            backgroundImage: "url('https://img.freepik.com/premium-vector/robot-chatbot-head-icon-chatbot-assistant-application-sign-ai-technology-background-speech-bubble-message-dialogue-cloud-circuit-board-pattern-pcb-printed-circuit-texture-vector-illustration_127544-2663.jpg')",
            // background: "linear-gradient(135deg,#5f6fff,#9b30ff)"
          }}
        >
          {/* Mobile Chat Box */}
          <Box
            sx={{
              width: 350,
              height: 600,
              background: "white",
              borderRadius: 4,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              boxShadow: 5,
            }}
          >
    <AppBar position="static">
      <Toolbar>

        <IconButton color="inherit" onClick={openMenu}>
          <MoreVertIcon />
        </IconButton>
        

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={closeMenu}
        >
          <MenuItem onClick={handleShare} sx={{ display: "flex"}}>
           <Avatar sx={{ ml: 1 }}>
                <ShareIcon />
              </Avatar>
          Share</MenuItem>
          <MenuItem onClick={handleDelete} sx={{ display: "flex"}}>
          <Avatar sx={{ ml: 1 }}>
                <DeleteIcon />
              </Avatar>Delete</MenuItem>
          <MenuItem onClick={handleDelete} sx={{ display: "flex"}}>
          <Avatar sx={{ ml: 1 }}>
                <ArchiveIcon />
              </Avatar>Archive</MenuItem>

        </Menu>
      </Toolbar>
    </AppBar>
    </Box>
    </Box>
  );
}
