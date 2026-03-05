import { useState, useEffect, useRef } from "react";
import {
  Box,
  TextField,
  IconButton,
  Paper,
  Typography,
  Avatar,
} from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import PersonIcon from "@mui/icons-material/Person";
import SaveIcon from "@mui/icons-material/Save";
import SendIcon from "@mui/icons-material/Send";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Sidebar imports
import EdgeSidebar from "./EdgeSidebar";
import SettingsSidebar from "../pages/SettingsSidebar";
import Profile from "../settings/Profile";
import Mode from "../settings/Mode";
import Chat from "../settings/Chat";
import Account from "../settings/Account";
import Logout from "../settings/Logout";

const Chatbot = () => {
  const [openRight, setOpenRight] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openMode, setOpenMode] = useState(false);
  const [openAccount, setOpenAccount] = useState(false);
  const [openChat, setOpenChat] = useState(false);
  const [openLogout, setOpenLogout] = useState(false);

  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hello! I'm Nexus. How can I help you today?", sender: "bot" },
  ]);

  // Refresh chat
  const refreshChat = () => {
    setMessages([{ text: "Hello! I'm Nexus. How can I help you today?", sender: "bot" }]);
    setInput("");
  };

  // Load saved chat if any
  useEffect(() => {
    const selected = JSON.parse(localStorage.getItem("selectedChat"));
    if (selected && selected.messages) {
      setMessages(selected.messages);
      localStorage.removeItem("selectedChat");
    }
  }, []);

  // Save chat
  const saveChat = () => {
    if (messages.length <= 1) {
      alert("No conversation to save!");
      return;
    }
    const fileName = prompt("Enter chat name:");
    if (!fileName) return;
    const savedChats = JSON.parse(localStorage.getItem("chatHistory")) || [];
    const newChat = { id: Date.now(), title: fileName, messages };
    localStorage.setItem("chatHistory", JSON.stringify([newChat, ...savedChats]));
    alert("Chat Saved Successfully!");
  };

  // Send message
  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { text: input, sender: "user" };
    setMessages([...messages, userMsg]);
    const currentInput = input;
    setInput("");

    try {
      const historyForAI = messages
        .filter((msg, index) => !(index === 0 && msg.sender === "bot"))
        .map((msg) => ({
          role: msg.sender === "user" ? "user" : "model",
          parts: [{ text: msg.text }],
        }));

      const response = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: currentInput, history: historyForAI }),
      });
      const data = await response.json();
      if (data.reply) {
        setMessages((prev) => [...prev, { text: data.reply, sender: "bot" }]);
      }
    } catch (error) {
      console.error("Chat Error:", error);
    }
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
      }}
    >
      {/* Background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "url('https://img.freepik.com/premium-vector/robot-chatbot-head-icon-chatbot-assistant-application-sign-ai-technology-background-speech-bubble-message-dialogue-cloud-circuit-board-pattern-pcb-printed-circuit-texture-vector-illustration_127544-2663.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(15px)",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.4)",
          zIndex: 1,
        }}
      />

      {/* Chat Box Motion Wrapper */}
      <motion.div
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100vw", opacity: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
      >
        <Box
          sx={{
            width: 750,
            height: 600,
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            boxShadow: 10,
            borderRadius: 4,
            backgroundColor: "rgba(0,0,0,0.3)",
            zIndex: 10,
          }}
        >
          {/* Header */}
          <Box
            sx={{
              height: 50,
              backgroundColor: "#263748",
              color: "white",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton onClick={() => navigate("/")}>
                <ArrowBackIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton onClick={refreshChat}>
                <RefreshIcon sx={{ color: "white" }} />
              </IconButton>
            </Box>

            <Typography variant="h6" fontWeight="bold">
              Friendly AI
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton onClick={saveChat}>
                <SaveIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton onClick={() => setOpenRight(true)}>
                <MoreVertIcon sx={{ color: "white" }} />
              </IconButton>
            </Box>
          </Box>

          {/* Sidebars */}
          <EdgeSidebar
            open={openRight}
            setOpen={setOpenRight}
            setMessages={setMessages}
            openSettings={() => setOpenSettings(true)}
          />
          <SettingsSidebar
            open={openSettings}
            setOpen={setOpenSettings}
            openProfile={() => setOpenProfile(true)}
            openMode={() => setOpenMode(true)}
            openChat={() => setOpenChat(true)}
            openAccount={() => setOpenAccount(true)}
            openLogout={() => setOpenLogout(true)}
          />
          <Profile open={openProfile} setOpen={setOpenProfile} />
          <Mode open={openMode} setOpen={setOpenMode} />
          <Chat open={openChat} setOpen={setOpenChat} />
          <Account open={openAccount} setOpen={setOpenAccount} />
          <Logout open={openLogout} setOpen={setOpenLogout} />

          {/* Chat Window */}
          <Paper
            ref={scrollRef}
            sx={{
              flexGrow: 1,
              p: 2,
              overflowY: "auto",
              backgroundColor: "transparent",
              color: "white",
            }}
          >
            {messages.map((msg, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent:
                    msg.sender === "user" ? "flex-end" : "flex-start",
                  mb: 2,
                }}
              >
                {msg.sender === "bot" && (
                  <Avatar sx={{ mr: 1, bgcolor: "#1976d2" }}>
                    <SmartToyIcon />
                  </Avatar>
                )}
                <Paper
                  sx={{
                    p: 1.5,
                    maxWidth: "70%",
                    borderRadius: 2,
                    backgroundColor:
                      msg.sender === "user"
                        ? "rgba(55,56,58,0.6)"
                        : "rgba(255,255,255,0.2)",
                    color: "white",
                    boxShadow: 1,
                  }}
                >
                  <Typography variant="body2">{msg.text}</Typography>
                </Paper>
                {msg.sender === "user" && (
                  <Avatar sx={{ ml: 1, bgcolor: "#9c27b0" }}>
                    <PersonIcon />
                  </Avatar>
                )}
              </Box>
            ))}
          </Paper>

          {/* Input Area */}
          <Box
            sx={{
              display: "flex",
              p: 2,
              backgroundColor: "rgba(62,57,57,0.6)",
              borderTop: "1px solid #ddd",
            }}
          >
            <TextField
              fullWidth
              size="small"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask me anything..."
              InputProps={{
                style: { color: "white" },
              }}
            />
            <IconButton
              onClick={sendMessage}
              color="primary"
              sx={{ ml: 1 }}
            >
              <SendIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Chatbot;