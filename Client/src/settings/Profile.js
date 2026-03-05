import { useState, useEffect } from "react";
import {
  Drawer,
  Box,
  Typography,
  Stack,
  TextField,
  Avatar,
  Button,
  IconButton
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Profile({ open, setOpen }) {

  const [name, setName] = useState(localStorage.getItem("profileName") || "Sameeksha");
  const [status, setStatus] = useState(localStorage.getItem("status") || "");
  const [image, setImage] = useState(localStorage.getItem("profileImage") || "");

  useEffect(() => {
    localStorage.setItem("profileName", name);
    localStorage.setItem("status", status);
    localStorage.setItem("profileImage", image);
  }, [name, status, image]);

  const uploadImage = (e) => {
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result);
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => setOpen(false)}
    >
      <Box sx={{ width: 350, height: "100vh", display: "flex", flexDirection: "column" }}>

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
            Profile
          </Typography>
        </Box>

        <Box sx={{ p: 3, flexGrow: 1 }}>
          <Stack spacing={3} alignItems="center">
            <Avatar src={image} sx={{ width: 100, height: 100 }} />

            <Button variant="outlined" component="label">
              Upload Photo
              <input hidden type="file" onChange={uploadImage} />
            </Button>

            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
            />

            <TextField
              label="Status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              fullWidth
            />
          </Stack>
        </Box>
      </Box>
    </Drawer>
  );
}