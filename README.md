# 🤖 AI Chatbot Web Application (React + Node.js + Gemini API)

This project is a **full-stack AI Chatbot Web Application** developed using **React (Frontend)** and **Node.js + Express (Backend)** with **Google Gemini API** for intelligent responses.

The chatbot can understand user messages and reply instantly using AI. The application also includes a modern animated landing page, settings section, and a clean chat interface.

---

## 🚀 Features

* AI chatbot using **Google Gemini 2.5 Flash**
* Animated **Landing Page with voice greeting**
* Modern chatbot UI using **Material UI**
* Chat history support
* Settings section (Profile, Mode, Chat, Account, Logout)
* Secure API key using `.env`
* Fully responsive design
* Separate **frontend and backend architecture**

---

## 🧠 How This Project Works

The project works in **3 steps**:

### Step 1: User sends a message

The user types a message in the React chatbot interface.

### Step 2: Message goes to backend

React sends the message to the backend using:

```
POST http://localhost:5000/chat
```

### Step 3: Gemini API generates response

The Node.js server sends the message to the Gemini AI model and receives a reply.
That reply is then sent back to React and displayed in the chat screen.

---

## 🗂️ Project Structure

```
chatbot/
│
├── Client/  (React Frontend)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   ├── Chatbot.js
│   │   │   ├── EdgeSidebar.js
|   |   |   ├── GetStartedButton.js
|   |   |   ├── GetStartedFlow.js
│   │   │
│   │   ├── pages/
│   │   │   ├── LandingPage.js
│   │   │   ├── SettingSidebar.js
│   │   │   └── SettingLayout.js
│   │   │
│   │   ├── settings/
│   │   │   ├── Profile.js
│   │   │   ├── Mode.js
│   │   │   ├── Chat.js
│   │   │   ├── Profile.js
│   │   │   ├── Account.js
│   │   │   └── Logout.js
│   │   │
│   │   ├── App.js
│   │   └── index.js
│   │
│   ├── package.json
│   └── README.md
│
├── Server/  (Node.js Backend)
│   ├── index.js
│   ├── package.json
│   ├── .env
│   └── .env.example
│
└── README.md

💻 Technologies Used

Frontend

* React.js
* Material UI
* Framer Motion
* React Router DOM

Backend

* Node.js
* Express.js
* Google Gemini API
* dotenv
* CORS

---

## 🔑 How to Set Up the Project

Follow these steps to run the project on your system.

---

### Step 1: Clone the repository

```
git clone https://github.com/your-username/chatbot-project.git
```

Then open the project folder:

```
cd chatbot
```

---

### Step 2: Setup the Backend (Server)

Go to the server folder:

```
cd Server
```

Install dependencies:

```
npm install
```

Create a `.env` file inside the **Server** folder and add:

```
GEMINI_API_KEY=your_api_key_here
```

Start the backend server:

```
nodemon index.js
```

You should see:

```
Server running at http://localhost:5000
```

---

### Step 3: Setup the Frontend (React)

Open a new terminal and go to the client folder:

```
cd Client
```

Install dependencies:

```
npm install
```

Start the React app:

```
npm start
```

The project will open automatically in the browser:

```
http://localhost:3000
```

---

## 📡 How the Chatbot API Works

### API Endpoint

```
POST /chat
```

### Request Body

```
{
  "message": "Hello"
}
```

### Response

```
{
  "reply": "Hi! How can I help you today?"
}
```

---

## 🔐 Important Note (API Key Security)

The `.env` file is **not uploaded to GitHub** to keep the API key safe.

Instead, a `.env.example` file is included.
To run the project, create a `.env` file and paste your own Gemini API key.

---

## 🎯 Future Improvements

* Voice input chatbot
* Dark mode toggle
* Save chat history
* Deploy to Vercel + Render
* User login system

---

## 👩‍💻 Developed By

**Sameeksha K**
Aspiring Web Developer, Data Analyst
Project: AI Chatbot Web Application

---

## ⭐ If you like this project

Give a ⭐ on GitHub and share with others!
