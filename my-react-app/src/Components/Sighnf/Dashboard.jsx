import React from 'react'

import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("currentUser") || "User";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    navigate("/signin");
  };

  return (
    <div style={{ maxWidth: 600, margin: "50px auto", textAlign: "center" }}>
      <h2>Welcome, {userEmail}</h2>
      <p>This is your dashboard. Protected route!</p>
      <button onClick={handleLogout} style={{ padding: "8px 16px", cursor: "pointer" }}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;

