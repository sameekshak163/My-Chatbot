import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import GetStartedButton from "../components/GetStartedButton";
export default function LandingPage() {

  useEffect(() => {
  const speak = () => {
    const message = new SpeechSynthesisUtterance(
      "Hiiiii Sameeksha! 🤖 Do you want to talk with me? Click the Get Started button!"
    );

    const voices = window.speechSynthesis.getVoices();

    // Try to select a female or child-like voice if available
    const funnyVoice = voices.find(voice =>
      voice.name.toLowerCase().includes("female") ||
      voice.name.toLowerCase().includes("zira") ||
      voice.name.toLowerCase().includes("google")
    );

    if (funnyVoice) {
      message.voice = funnyVoice;
    }

    message.pitch = 1.8;   // 🔥 higher pitch = more funny
    message.rate = 1.1;    // slightly faster
    message.volume = 1;

    window.speechSynthesis.speak(message);
  };

  // Wait a little before speaking
  setTimeout(speak, 2000);

}, []);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        backgroundImage: "url('https://img.freepik.com/premium-vector/robot-chatbot-head-icon-chatbot-assistant-application-sign-ai-technology-background-speech-bubble-message-dialogue-cloud-circuit-board-pattern-pcb-printed-circuit-texture-vector-illustration_127544-2663.jpg')",
        // background: "linear-gradient(135deg, #5f72ff, #9b23ea)"
      }}
    >
    {/* Animated Robot */}
<motion.div
  initial={{ x: -300, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 2, ease: "easeInOut" }}
  style={{
    position: "absolute",
    bottom: "50px",
    left: "30px",
    zIndex: 3
  }}
>
  <Box sx={{ position: "relative" }}>
    
    {/* Robot Image */}
    <motion.img
      src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
      alt="robot"
      animate={{ y: [10, -10, 10] }}
      transition={{
        repeat: Infinity,
        duration: 2
      }}
      style={{
        width: "160px"
      }}
    />

    {/* Speech Bubble */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
      style={{
        position: "bottom",
        top: "60px",
        left: "130px",
        background: "white",
        padding: "10px 30px",
        borderRadius: "100px",
        boxShadow: "5px 5px 15px rgba(0,0,0,0.2)",
        fontSize: "14px",
        fontWeight: "bold",
        color: "#333"
      }}
    >
      Hiiii.... What Happened..? Go Inside..! 👋 <br />
    </motion.div>

  </Box>
</motion.div>
      {/* Blur Overlay */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backdropFilter: "blur(40px)"
        }}
      />

      {/* Content Container */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "80%",
          zIndex: 2
        }}
      >
        {/* LEFT SIDE TEXT */}
        <Box sx={{ color: "white", maxWidth: "500px" }}>
          <Typography variant="h3" fontWeight="bold" mb={2}>
            Let’s Talk !!
          </Typography>

          <Typography variant="h2" fontWeight="bold">
            Chat Bot App
          </Typography>

          <Typography variant="h5" mt={1}>
            UI Design
          </Typography>

        <GetStartedButton />
        </Box>



        {/* MOBILE MOCKUP */}
        <Box
          sx={{
            width: 300,
            height: 600,
            backgroundColor: "white",
            borderRadius: "40px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
            p: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <Box>
            <Typography fontWeight="bold">Hello 👋</Typography>
            <Typography variant="body2">
              How can I help you?
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                backgroundColor: "#5f72ff",
                color: "white",
                p: 1,
                borderRadius: 2,
                mb: 1,
                textAlign: "right"
              }}
            >
              I want to know
            </Typography>

            <Typography
              sx={{
                backgroundColor: "#f1f1f1",
                p: 1,
                borderRadius: 2
              }}
            >
              Sure! Ask me anything 🤖
            </Typography>
          </Box>

          <Box
            sx={{
              borderTop: "1px solid #ddd",
              pt: 1,
              fontSize: "14px",
              color: "#704e4e"
            }}
          >
            Type a message...
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
