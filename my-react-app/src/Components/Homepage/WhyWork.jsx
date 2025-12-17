import React from 'react'
 
import { Container, Row, Col, Button, Card, Carousel } from "react-bootstrap";
import cardimg from "../../assets/Imges/cityone.jpg";
import  homecard from"../../assets/Imges/relatedten.jpg"
import styles from "../../assets/WhyWork.module.css";






const WhyWork = () => {
  return (
    <section className={`${styles.whyWorkSection} py-5 overflow-hidden`}>

      <div className="container">
        <div className={styles.whyWorkWrapper}>

          {/* LEFT CONTENT */}
          <div className={styles.leftContent}>
            <h2 className={styles.whyTitle}>
              Why You Should Work <br /> With Us
            </h2>

            <p className={styles.whyText}>
              Finding your perfect property has never been easier. Explore a wide range of
              homes, apartments, and plots designed to fit your lifestyle and budget.
            </p>

            <div className={styles.featuresWrapper}>
              <div className={styles.featureBox}>
                <h6>Buy or Rent Your Dream Home</h6>
                <p>Get the best price for your property in less time.</p>
              </div>

              <div className={styles.featureBox}>
                <h6>Your Trusted Real Estate Partner</h6>
                <p>We guide you through every step — from search to loan approval.</p>
              </div>
            </div>

            <div className={styles.buttonsss}>
              <button>
                Learn More <i className="bi bi-arrow-right-short"></i>
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className={styles.rightContent}>
            <div className={styles.imageCard}>
              <div className={styles.carouselWrapper}>
                <img src={cardimg} alt="house" className={`${styles.cardImage} ${styles.cardImageActive}`} />
                <img src={homecard} alt="house" className={styles.cardImage} />
              </div>

              <div className={styles.statBadge}>
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



