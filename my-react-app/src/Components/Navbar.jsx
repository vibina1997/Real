import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../assets/Navbar.module.css"; // your CSS

import logo from '../assets/Imges/logouuu.png'



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (loggedIn) {
      try {
        const userData = JSON.parse(localStorage.getItem("currentUser"));
        setUser(userData);
      } catch {
        localStorage.removeItem("currentUser");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    setUser(null);
    navigate("/signin");
  };

  return (
    <nav className={` container navbar navbar-expand-lg fixed-top ${styles.navbarCustom}`}>
      <div className="container-fluid">

        {/* Brand */}
        <Link className={styles.navBrand} to="/home">
          <img src={logo} alt="logo" className={styles.logo} />
          <span>HomeRetro</span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav mx-auto gap-lg-5 gap-3 text-center mt-3 mt-lg-0">
            {["Home", "Sell", "Buy", "Rent", "Agency", "Contact"].map((item) => (
              <li className="nav-item" key={item}>
                <Link
                  className={styles.navLink}
                  to={`/${item.toLowerCase()}`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          {!user ? (
            <div className="d-grid d-lg-flex gap-3 mt-3 mt-lg-0">
              <Link to="/signin">
                <button className={styles.button}>Signin</button>
              </Link>
              <Link to="/signup">
                <button className={styles.buttonSecondary}>Signup</button>
              </Link>
            </div>
          ) : (
            <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
              <img
                src={user.avatar || "https://i.pravatar.cc/40"}
                alt="profile"
                className={styles.avatar}
              />
              <span className={styles.userName}>
                {user.name || user.email}
              </span>
              <button
                className={styles.buttonSecondary}
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
