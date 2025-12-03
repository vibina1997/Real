import React from "react";
import { Link } from "react-router-dom";
import styles from '../assets/Navbar.module.css';



import { useState } from "react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark sticky-top ${styles.navbarCustom}`}>
      <div className="container">

        {/* Logo */}
        <Link className={`navbar-brand ${styles.navBrand}`} to="/">
          HomeRetro
        </Link>

        {/* Mobile Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>

          {/* Center Links */}
          <ul className="navbar-nav mx-auto gap-5">
            <li className="nav-item"><Link className={styles.navLink} to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li className="nav-item"><Link className={styles.navLink} to="/buy" onClick={() => setIsOpen(false)}>Buy</Link></li>
            <li className="nav-item"><Link className={styles.navLink} to="/sell" onClick={() => setIsOpen(false)}>Sell</Link></li>
            <li className="nav-item"><Link className={styles.navLink} to="/rent" onClick={() => setIsOpen(false)}>Rent</Link></li>
            <li className="nav-item"><Link className={styles.navLink} to="/agency" onClick={() => setIsOpen(false)}>Agency</Link></li>
            <li className="nav-item"><Link className={styles.navLink} to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>

          {/* Right Buttons */}
          <div className="d-grid gap-3 d-md-flex">
            <Link to="/signin" onClick={() => setIsOpen(false)}>
              <button className={styles.button}>Signin</button>
            </Link>
            <Link to="/signup" onClick={() => setIsOpen(false)}>
              <button className={styles.buttons}>SignUp</button>
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;



   



 



