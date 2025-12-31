import React from 'react'
 
import { Container, Row, Col, Button, Card, Carousel } from "react-bootstrap";
import cardimg from "../../assets/Imges/cityone.jpg";
import  homecard from"../../assets/Imges/relatedten.jpg"
import styloo from "../../assets/WhyWork.module.css";






const WhyWork = () => {
  return (
    <section className={`${styloo.whyWorkSection} py-5 overflow-hidden`}>

      <div className="container">
        <div className={styloo.whyWorkWrapper}>

          {/* LEFT CONTENT */}
          <div className={styloo.leftContent}>
            <h2 className={styloo.whyTitle}>
              Why You Should Work <br /> With Us
            </h2>

            <p className={styloo.whyText}>
              Finding your perfect property has never been easier. Explore a wide range of
              homes, apartments, and plots designed to fit your lifestyle and budget.
            </p>

            <div className={styloo.featuresWrapper}>
              <div className={styloo.featureBox}>
                <h6>Buy or Rent Your Dream Home</h6>
                <p>Get the best price for your property in less time.</p>
              </div>

              <div className={styloo.featureBox}>
                <h6>Your Trusted Real Estate Partner</h6>
                <p>We guide you through every step — from search to loan approval.</p>
              </div>
            </div>

            <div className={styloo.buttonsss}>
              <button>
                Learn More <i className="bi bi-arrow-right-short"></i>
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className={styloo.rightContent}>
            <div className={styloo.imageCard}>
              <div className={styloo.carouselWrapper}>
                <img src={cardimg} alt="house" className={`${styloo.cardImage} ${styloo.cardImageActive}`} />
                <img src={homecard} alt="house" className={styloo.cardImage} />
              </div>

              <div className={styloo.statBadge}>
                <i className="bi bi-people-fill"></i>
                <div>
                  <div className="small">Total Clients</div>
                  <div className="fw-bold">25,000</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyWork;



