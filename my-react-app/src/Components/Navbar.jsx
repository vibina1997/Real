import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../assets/Navbar.module.css";
import logo from "../assets/Imges/wlogo.png";
import ProfileDropdown from "../Components/ProfileDropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Always sync user from localStorage
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));

    if (loggedIn && storedUser) {
      setUser(storedUser);
    } else {
      setUser(null);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    setUser(null);
    navigate("/signin");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Sell", path: "/sell" },
    { name: "Buy", path: "/buy" },
    { name: "Rent", path: "/rent" },
    { name: "Agency", path: "/agency" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`container navbar navbar-expand-lg fixed-top ${styles.navbarCustom}`}>
      <div className="container">
        {/* LOGO */}
        <Link className={styles.navBrand} to="/">
          <img src={logo} alt="logo" className={styles.logo} />
          <span>XenProperties</span>
        </Link>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAV LINKS */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav mx-auto gap-lg-4 gap-3 text-center">
            {navLinks.map((item) => (
              <li key={item.name} className="nav-item">
                <Link
                  className={styles.navLink}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* ✅ ADMIN DASHBOARD BUTTON */}
            {user?.role === "admin" && (
              <li className="nav-item">
                <Link
                  to="/dashboard"
                  className={`${styles.dashboardBtn}`}
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
              </li>
            )}
          </ul>

          {/* RIGHT SIDE */}
          {!user ? (
            <ProfileDropdown />
          ) : (
            <div className="d-flex align-items-center gap-3">
              <span className={styles.userName}>
                {user.name} ({user.role})
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









