
import React from 'react';
import footer from '../assets/FooterComponent.module.css';
import { Link } from "react-router-dom";

 



const FooterComponent = () => {
  return (
    <footer className={`${footer.footerSection} pt-5 pb-3`}>

    
      <div className="container">
        <div className="row">

          <div className="col-md-6 mb-4">
            <div className="fw-bold ">
            <h3 >HomeRtro</h3>
          </div>
            
            {/* <img
              src="/logo.png"
              alt="logo"
              width="140"
              className="mb-3"
            /> */}
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet pellentesque tempor.
            </p>
            <p className="text-muted">
              Ut quis elit eget leo condimentum pellentesque. Donec accumsan.
            </p>
          </div>


<div className="col-md-3 mb-4">
  

  <ul className="list-unstyled d-flex flex-column gap-2">
    <li>
      <Link className={footer.navLink} to="/" onClick={() => setIsOpen(false)}>
        Home
      </Link>
    </li>

    <li>
      <Link className={footer.navLink} to="/buy" onClick={() => setIsOpen(false)}>
        Buy
      </Link>
    </li>

    <li>
      <Link className={footer.navLink} to="/sell" onClick={() => setIsOpen(false)}>
        Sell
      </Link>
    </li>

    <li>
      <Link className={footer.navLink} to="/rent" onClick={() => setIsOpen(false)}>
        Rent
      </Link>
    </li>

    <li>
      <Link className={footer.navLink} to="/agency" onClick={() => setIsOpen(false)}>
        Agency
      </Link>
    </li>

    <li>
      <Link className={footer.navLink} to="/contact" onClick={() => setIsOpen(false)}>
        Contact
      </Link>
    </li>
  </ul>
</div>

          
          <div className="col-md-3 mb-4">
            <div className={`d-flex ${footer.searchBox}`}>
              <input type="text" className="form-control" placeholder="Search..." />
              <button className="btn btn-primary ms-2">Search</button>
            </div>

            <div className={`d-flex gap-3 mt-3 ${footer.socialIcons}`}>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-youtube"></i>
            </div>
          </div>
        </div>
      </div>

      
      <div className={`container my-5 ${footer.contactStrip}`}>
        <div className={footer.contactBox}>
          <span className="me-3 fw-semibold">Need Help?</span>

          <div className={footer.contactItem}>
            <i className="bi bi-telephone-fill"></i>
            <span>1-800-555-4321</span>
          </div>

          <div className={footer.contactItem}>
            <i className="bi bi-whatsapp"></i>
            <span>1-800-555-4321</span>
          </div>

          <div className={footer.contactItem}>
            <i className="bi bi-envelope-fill"></i>
            <span>hello@yoursite.com</span>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-muted small">
        © 2023. All rights reserved. Designed by Inspiry Themes
      </div>

    </footer>
  );
};

export default FooterComponent;



   
