import { Drawer, Box, Typography, Button, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Account({ open, setOpen }) {
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
            Account Settings
          </Typography>
        </Box>

        {/* 🔹 BODY */}
        <Box sx={{ p: 3, flex: 1 }}>
          <Typography variant="h6" mb={3}>
            Add Account
          </Typography>

          <Button variant="contained" fullWidth>
            Add New Account
          </Button>
        </Box>

      </Box>
    </Drawer>
  );
}