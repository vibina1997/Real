import React from "react";
import heroo from '../Components/Homepage/Hero.jsx'
import { Link } from "react-router-dom";
import styles from '../assets/Navbar.module.css';


import { useState } from "react";




const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${styles.navbarCustom}`}>
      <div className="container-fluid">

        {/* Brand */}
        <Link className={styles.navBrand} to="/">
          HomeRetro
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapse */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav mx-auto gap-lg-5 gap-3 text-center mt-3 mt-lg-0">
            <li className="nav-item"><Link className={styles.navLink} to="/home">Home</Link></li>
            <li className="nav-item"><Link className={styles.navLink} to="/buy">Sell</Link></li>
            <li className="nav-item"><Link className={styles.navLink} to="/sell">Buy</Link></li>
            <li className="nav-item"><Link className={styles.navLink} to="/rent">Rent</Link></li>
            <li className="nav-item"><Link className={styles.navLink} to="/agency">Agency</Link></li>
            <li className="nav-item"><Link className={styles.navLink} to="/contact">Contact</Link></li>
          </ul>

          <div className="d-grid d-lg-flex gap-3 mt-3 mt-lg-0">
            <Link to="/signin">
              <button className={styles.button}>Signin</button>
            </Link>
            <Link to="/signup">
              <button className={styles.buttonSecondary}>Signup</button>
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

  




 





   



 



