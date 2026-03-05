import React, { useEffect, useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Avatar,
  Divider,
  IconButton,
  Menu,
  MenuItem
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SettingsIcon from "@mui/icons-material/Settings";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const EdgeSidebar = ({ open, setOpen, setMessages, openSettings }) => {
  const [history, setHistory] = useState([]);
  const [menuAnchor, setMenuAnchor] = useState(null); // For 3-dot menu
  const [selectedChatId, setSelectedChatId] = useState(null); // Track which chat menu is open

  // Load saved chats on mount or when sidebar opens
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("chatHistory")) || [];
    setHistory(saved);
  }, [open]);

  const handleMenuClick = (event, chatId) => {
    setMenuAnchor(event.currentTarget);
    setSelectedChatId(chatId);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
    setSelectedChatId(null);
  };

  const handleDeleteChat = (chatId) => {
    const updated = history.filter((chat) => chat.id !== chatId);
    localStorage.setItem("chatHistory", JSON.stringify(updated));
    setHistory(updated);
    handleMenuClose();
  };

  const handleRenameChat = (chatId) => {
    const newName = prompt("Enter new chat name:");
    if (!newName) return;
    const updated = history.map((chat) =>
      chat.id === chatId ? { ...chat, title: newName } : chat
    );
    localStorage.setItem("chatHistory", JSON.stringify(updated));
    setHistory(updated);
    handleMenuClose();
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => setOpen(false)}
      variant="temporary"
      sx={{
        "& .MuiDrawer-paper": {
          width: 260,
          height: "100%",
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
          background: "linear-gradient(180deg,#f5f7fa,#e4ecf7)",
          boxShadow: "-5px 0 15px rgba(0,0,0,0.2)",
          p: 2,
        },
      }}
    >
      {/* Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography variant="h6" fontWeight="bold">
          Menu
        </Typography>
        <IconButton onClick={() => setOpen(false)}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider sx={{ mb: 2 }} />

      <List>
        <Typography sx={{ mb: 1, fontWeight: "bold" }}>Chat History</Typography>

        {history.length === 0 && (
          <Typography variant="body2" sx={{ mb: 2 }}>
            No saved chats
          </Typography>
        )}

        {history.map((chat) => (
          <ListItemButton
            key={chat.id}
            onClick={() => {
              setMessages(chat.messages);
              setOpen(false);
            }}
            sx={{
              borderRadius: 2,
              mb: 1,
              backgroundColor: "#ffffff80",
              "&:hover": { backgroundColor: "#e0e0e0" },
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <ListItemText primary={chat.title} />

            {/* 3-dot menu button */}
            <IconButton onClick={(e) => handleMenuClick(e, chat.id)}>
              <MoreVertIcon />
            </IconButton>
          </ListItemButton>
        ))}

        {/* Menu for 3-dot actions */}
        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => handleRenameChat(selectedChatId)}>Rename Chat</MenuItem>
          <MenuItem onClick={() => handleDeleteChat(selectedChatId)} sx={{ color: "red" }}>Delete Chat</MenuItem>
        </Menu>

        <Divider sx={{ my: 2 }} />

        <ListItemButton
          onClick={() => {
            setOpen(false);
            if (typeof openSettings === "function") openSettings();
          }}
          sx={{ borderRadius: 2 }}
        >
          <Avatar sx={{ mr: 2, bgcolor: "#9c27b0" }}>
            <SettingsIcon />
          </Avatar>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default EdgeSidebar;