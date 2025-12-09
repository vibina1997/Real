
import React from 'react';
import styles from '../assets/FooterComponent.module.css';
import { Link } from "react-router-dom";

 



const FooterComponent = () => {
  return (




    <footer className={styles.footerSection}>
      <div className="container">

     
        <div className="row g-4">

          {/* Logo + About */}
          <div className="col-md-4">
            <h4 className={styles.brand}>HomeRetro</h4>
            <p className="text-light mt-2">
              We help you find the best properties in your area with trusted agents.
            </p>

            {/* Social Icons */}
            <div className={`d-flex gap-3 mt-3 ${styles.socialIcons}`}>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-youtube"></i>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h6 className={styles.footerTitle}>Quick Links</h6>

            <ul className={styles.linkList}>
              <li><Link className={styles.navLink} to="/">Home</Link></li>
              <li><Link className={styles.navLink} to="/buy">Buy</Link></li>
              <li><Link className={styles.navLink} to="/sell">Sell</Link></li>
              <li><Link className={styles.navLink} to="/rent">Rent</Link></li>
              <li><Link className={styles.navLink} to="/agency">Agency</Link></li>
              <li><Link className={styles.navLink} to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-5">
            <h6 className={styles.footerTitle}>Stay Updated</h6>

            <div className={`d-flex ${styles.searchBox}`}>
              <input type="text" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>

        </div>
      </div>

      {/* ---------- CONTACT STRIP ---------- */}
      <div className={`container ${styles.contactStrip}`}>
        <div className={styles.contactBox}>
          <h6 className="fw-semibold">Need Help?</h6>

          <div className={styles.contactItem}>
            <i className="bi bi-telephone-fill"></i>
            <span>+91 98765 43210</span>
          </div>

          <div className={styles.contactItem}>
            <i className="bi bi-whatsapp"></i>
            <span>+91 98765 43210</span>
          </div>

          <div className={styles.contactItem}>
            <i className="bi bi-envelope-fill"></i>
            <span>support@yourbrand.com</span>
          </div>
        </div>
      </div>

      {/* ---------- COPYRIGHT ---------- */}
      <p className="text-center text-light mt-4 mb-0 small">
        © 2025 YourBrand. All Rights Reserved.
      </p>

    </footer>
  );
};




export default FooterComponent;



   
