import { Drawer, Box, Typography, Button, IconButton, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Logout({ open, setOpen }) {

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

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
            Logout
          </Typography>
        </Box>

        {/* 🔹 BODY */}
        <Box sx={{ p: 3, flex: 1 }}>
          <Stack spacing={2}>
            <Button 
              variant="contained" 
              color="error" 
              fullWidth 
              onClick={handleLogout}
            >
              Confirm Logout
            </Button>
          </Stack>
        </Box>

      </Box>
    </Drawer>
  );
}