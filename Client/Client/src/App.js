import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import EdgeSidebar from "./components/EdgeSidebar";
import { Box } from "@mui/material";
import { BrowserRouter, Navigate, Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SettingsLayout from "./pages/SettingLayout";
import Profile from "./settings/Profile";
import Mode from "./settings/Mode";
import Chat from "./settings/Chat";
import Account from "./settings/Account";
import Logout from "./settings/Logout";

function Layout() {
  const location = useLocation();

  const isLanding = location.pathname === "/";
  const hideLayout =
    location.pathname === "/" ||
    location.pathname === "/chatbot";

  return (
    <>
      {!hideLayout && <Header />}

      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Chatbot */}
        <Route path="/chatbot" element={<Chatbot />} />

        {/* Edge Sidebar */}
        <Route path="/EdgeSidebar" element={<EdgeSidebar />} />

        {/* Settings with Nested Routes */}
        <Route path="/settings" element={<SettingsLayout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="mode" element={<Mode />} />
          <Route path="chat" element={<Chat />} />
          <Route path="account" element={<Account />} />
          <Route path="logout" element={<Logout />} />
        </Route>

        {/* Optional Redirect */}
        <Route path="/settings" element={<Navigate to="/settings/profile" />} />
      </Routes>

      {!isLanding && <Footer />}
    </>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Layout />
   
    </BrowserRouter>
  );
}

export default App;
