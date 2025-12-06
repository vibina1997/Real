import React from "react";

import { Container, Row, Col, Button, Card } from "react-bootstrap";
import cardimg from "../../assets/Imges/cityone.jpg";
import cityt from "../../assets/Imges/citythree.jpg";

import styles from "../../assets/WhyWork.module.css";




const Turning = () => {
  return (
    <div className="mt-3 py-4 ">
    <section className={styles.heroSection}>
      <Container>
        <Row className="align-items-center">
          {/* Left text column */}
          <Col xs={12} md={7} lg={6}>
            <h2 className={styles.title}>Why You Should Work<br/>With Us</h2>
            <p className={styles.lead}>
              Finding your perfect property has never been easier. Explore a wide range of homes,
              apartments, and plots designed to fit your lifestyle and budget.
            </p>

            <Row className="mt-4">
              <Col xs={12} sm={6}>
                <h6 className={styles.smallTitle}>Buy or Rent Your Dream Home</h6>
                <p className={styles.smallText}>Get the best price for your property in less time with our trusted real estate experts.</p>
              </Col>
              <Col xs={12} sm={6}>
                <h6 className={styles.smallTitle}>Your Trusted Real Estate Partner</h6>
                <p className={styles.smallText}>We guide you through every step — from search to loan approval.</p>
              </Col>
            </Row>

            <Button variant="dark" className={styles.ctaBtn}>
              Learn More <i className="bi bi-arrow-right-short" />
            </Button>
          </Col>

          {/* Right image card */}
          <Col xs={12} md={5} lg={6} className="mt-4 mt-md-0 d-flex justify-content-center">
            <Card className={styles.imageCard}>
              <div className={styles.cardImageWrap}>
                <Card.Img src={cardimg} alt="house" className={styles.cardImage} />
              </div>

              {/* small stat badge bottom-left */}
              <div className={styles.statBadge}>
                <i className="bi bi-people-fill"></i>
                <div className={styles.statText}>
                  <div className={styles.statLabel}>Total Client</div>
                  <div className={styles.statNumber}>25,000</div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  );
};

export default Turning;
