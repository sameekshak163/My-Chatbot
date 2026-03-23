// import express from "express";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import dotenv from "dotenv";
// import cors from "cors";

// dotenv.config();

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors()); // Allows your React app to talk to this server
// app.use(express.json());

// // Initialize Gemini
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// // We use Gemini 2.5 Flash for speed and dynamic capability
// const model = genAI.getGenerativeModel({  
//     model: "gemini-2.5-flash",
//     systemInstruction: "You are a helpful and witty AI assistant named Nexus. Keep responses concise."
// });

// app.post("/chat", async (req, res) => {
//   try {
//     const { message, history } = req.body;

//     if (!message) {
//       return res.status(400).json({ error: "Message is required" });
//     }

//     // Start a chat session with the history sent from the frontend
//     const chat = model.startChat({
//       history: history || [],
//     });

//     const result = await chat.sendMessage(message);
//     const response = await result.response;
    
//     res.json({ reply: response.text() });
//   } catch (error) {
//     console.error("Gemini Error:", error);
//     res.status(500).json({ error: "AI failed to process the request" });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });


import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Check if API key exists
if (!process.env.GEMINI_API_KEY) {
  console.error("❌ GEMINI_API_KEY is missing in .env file");
  process.exit(1);
}

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
  systemInstruction:
    "You are a helpful, friendly and slightly funny AI assistant named Nexus. Keep answers short and clear."
});

// Chat API
app.post("/chat", async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // Start chat session with previous history
    const chat = model.startChat({
      history: history || [],
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;

    res.json({
      reply: response.text(),
    });

  } catch (error) {
    console.error("Gemini Error:", error.message);
    res.status(500).json({
      error: "AI failed to process the request",
    });
  }
});

// Server start
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});