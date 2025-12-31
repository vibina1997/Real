
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
              Helping you find the <span className={styles.highlight}>best properties</span> with trusted agents.
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
          <h6 className={styles.contactTitle}>Need Help?</h6>

         <div className={styles.contactItem}>
  <i className="bi bi-instagram"></i>
  <span>@xenproperties</span>
</div>

          <div className={styles.contactItem}>
  <i className="bi bi-whatsapp"></i>
  <span>Chat with us on WhatsApp</span>
</div>


          <div className={styles.contactItem}>
            <i className="bi bi-envelope-fill"></i>
            <span>support@Xenproperties.in</span>
          </div>
        </div>
      </div>

      {/* ---------- COPYRIGHT ---------- */}
      <p className="text-center mt-4 mb-0 small">
        © 2025 Xenproperties. All Rights Reserved.
      </p>

      {/* ---------- Floating Shapes ---------- */}
      <div className={styles.floatingShape}></div>
      <div className={styles.floatingShape2}></div>
    </footer>
  );
};

export default FooterComponent;






   
