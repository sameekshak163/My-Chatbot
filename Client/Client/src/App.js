import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import EdgeSidebar from "./components/EdgeSidebar";

import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import SettingsLayout from "./pages/SettingLayout";

import Profile from "./settings/Profile";
import Mode from "./settings/Mode";
import Chat from "./settings/Chat";
import Account from "./settings/Account";
import Logout from "./settings/Logout";


// Layout component (controls Header & Footer visibility)
function Layout() {
  const location = useLocation();

  // Hide header/footer only on landing & chatbot page
  const hideLayout =
    location.pathname === "/" || location.pathname === "/chatbot";

  return (
    <>
      {!hideLayout && <Header />}

      <Routes>
        {/* Landing Page - FIRST PAGE */}
        <Route path="/" element={<LandingPage />} />

        {/* Chatbot Page */}
        <Route path="/chatbot" element={<Chatbot />} />

        {/* Edge Sidebar Page */}
        <Route path="/edgesidebar" element={<EdgeSidebar />} />

        {/* Settings with Nested Routes */}
        <Route path="/settings" element={<SettingsLayout />}>
          {/* Default settings page → profile */}
          <Route index element={<Navigate to="profile" />} />

          <Route path="profile" element={<Profile />} />
          <Route path="mode" element={<Mode />} />
          <Route path="chat" element={<Chat />} />
          <Route path="account" element={<Account />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}


// Main App
function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import EdgeSidebar from "./components/EdgeSidebar";

import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import SettingsLayout from "./pages/SettingLayout";

import Profile from "./settings/Profile";
import Mode from "./settings/Mode";
import Chat from "./settings/Chat";
import Account from "./settings/Account";
import Logout from "./settings/Logout";


// Layout component (controls Header & Footer visibility)
function Layout() {
  const location = useLocation();

  // Hide header/footer only on landing & chatbot page
  const hideLayout =
    location.pathname === "/" || location.pathname === "/chatbot";

  return (
    <>
      {!hideLayout && <Header />}

      <Routes>
        {/* Landing Page - FIRST PAGE */}
        <Route path="/" element={<LandingPage />} />

        {/* Chatbot Page */}
        <Route path="/chatbot" element={<Chatbot />} />

        {/* Edge Sidebar Page */}
        <Route path="/edgesidebar" element={<EdgeSidebar />} />

        {/* Settings with Nested Routes */}
        <Route path="/settings" element={<SettingsLayout />}>
          {/* Default settings page → profile */}
          <Route index element={<Navigate to="profile" />} />

          <Route path="profile" element={<Profile />} />
          <Route path="mode" element={<Mode />} />
          <Route path="chat" element={<Chat />} />
          <Route path="account" element={<Account />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}


// Main App
function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;