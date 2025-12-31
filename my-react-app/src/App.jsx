import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

/* Customer Pages */
import Navbar from "./Components/Navbar";
import FooterComponent from "./Components/FooterComponent";
import Home from "./Components/Homepage/Home";
import Buy from "./Components/Buypage/Buy";
import Pagethree from "./Components/Rentpage/Pagethree";
import Mainpart from "./Components/Sellpage/Mainpart";
import Cannectsigle from "./Components/Singlepage/Cannectsigle";
import Partagency from "./Components/Agent/Partagency";
import Mainfail from "./Components/Contact/Mainfail";

/* Auth Pages */
import Signin from "./Components/Sighnf/Signin";
import Signup from "./Components/Sighnf/Signup";
import Mainhero from "./Components/Sighnf/Mainhero";

/* Admin Dashboard */
import AdminLayout from "./Components/Admin/AdminLayout";
import AdminDashboard from "./Components/Admin/AdminDashboard";

/* Protected Route */
import ProtectedRoute from "./Components/Sighnf/ProtectedRoute";
function App() {
  const location = useLocation();

  // Hide Navbar/Footer for login/signup and admin pages
  const hideLayout =
    location.pathname === "/signin" ||
    location.pathname === "/signup" ||
    location.pathname.startsWith("/admin");

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        {/* Customer Pages */}
        <Route
          path="/"
          element={
            <ProtectedRoute role="customer">
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/buy"
          element={
            <ProtectedRoute role="customer">
              <Buy />
            </ProtectedRoute>
          }
        />
        <Route
          path="/rent"
          element={
            <ProtectedRoute role="customer">
              <Pagethree />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sell"
          element={
            <ProtectedRoute role="customer">
              <Mainpart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/singlepage"
          element={
            <ProtectedRoute role="customer">
              <Cannectsigle />
            </ProtectedRoute>
          }
        />
        <Route
          path="/agency"
          element={
            <ProtectedRoute role="customer">
              <Partagency />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute role="customer">
              <Mainfail />
            </ProtectedRoute>
          }
        />

        {/* Auth Pages */}
        <Route path="/welcome" element={<Mainhero />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>

      {!hideLayout && <FooterComponent />}
    </>
  );
}

export default App;



