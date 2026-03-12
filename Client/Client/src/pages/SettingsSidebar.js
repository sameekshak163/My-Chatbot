import React from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Divider
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SettingLayout from "./SettingLayout";

const SettingsSidebar = ({ open, setOpen, openProfile, openMode, openChat, openAccount, openLogout }) => {

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => setOpen(false)}
      sx={{
        "& .MuiDrawer-paper": {
          width: 350,
          height: 600,
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
          background: "linear-gradient(180deg,#f5f7fa,#e4ecf7)",
          boxShadow: "-5px 0 15px rgba(0,0,0,0.2)",
          overflow: "hidden"
        }
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Settings
        </Typography>

        <IconButton onClick={() => setOpen(false)}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider />

      {/* Pass openProfile to SettingLayout */}
      <Box sx={{ height: "100%", overflowY: "auto", p: 2 }}>
        <SettingLayout openProfile={openProfile} 
        openMode={openMode} 
        openChat={openChat} 
        openAccount={openAccount} 
        openLogout={openLogout}/>
      </Box>

    </Drawer>
  );
};

export default SettingsSidebar;