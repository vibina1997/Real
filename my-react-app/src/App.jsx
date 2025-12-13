import React from "react";

import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import FooterComponent from "./Components/FooterComponent";

// Pages
import Home from "./Components/Homepage/Home";
import Buy from "./Components/Buypage/Buy";
import Pagethree from "./Components/Rentpage/Pagethree";
import Mainpart from "./Components/Sellpage/Mainpart";
import Cannectsigle from "./Components/Singlepage/Cannectsigle";
import Partagency from "./Components/Agent/Partagency";
import Mainfail from "./Components/Contact/Mainfail";

// Auth
import Signin from "./Components/Sighnf/Signin";
import Signup from "./Components/Sighnf/Signup";
import Dashboard from "./Components/Sighnf/Dashboard";
import ProtectedRoute from "./Components/Sighnf/ProtectedRoute";
import Mainhero from "./Components/Sighnf/Mainhero";

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const location = useLocation();

  // Hide Navbar on specific pages
  const hideNavbarPaths = ["/", "/signin", "/signup"];
  const hideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {/* Show navbar only if page is NOT inside hideNavbarPaths */}
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* First Screen */}
        <Route path="/" element={<Mainhero />} />

        {/* Auth Pages */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        {/* After Login Home */}
        <Route path="/home" element={<Home />} />

        {/* Public Pages */}
        <Route path="/buy" element={<Buy />} />
        <Route path="/rent" element={<Pagethree />} />
        <Route path="/sell" element={<Mainpart />} />
        <Route path="/singlepage" element={<Cannectsigle />} />
        <Route path="/agency" element={<Partagency />} />
        <Route path="/contact" element={<Mainfail />} />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      <FooterComponent />
    </>
  );
}

export default App;
