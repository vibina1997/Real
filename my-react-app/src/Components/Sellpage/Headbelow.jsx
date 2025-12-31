import React from 'react'
 
import headbelow from '../../assets/headbelow.module.css'

import { Container, Row, Col, Button } from "react-bootstrap";

import imagoo from '../../assets/Imges/homepeople.jpg'

import { useNavigate } from "react-router-dom";






const Headbelow = () => {
  const navigate = useNavigate();

  return (
    <section className={headbelow.sectionWrap}>
      <Container>
        <Row className="align-items-center">

          {/* Image */}
          <Col md={6} className="mb-4 mb-md-0">
            <div className={headbelow.slideLeft}>
              <img
                src={imagoo}
                alt="Home preview"
                className={headbelow.imageStyle}
              />
            </div>
          </Col>

          {/* Content */}
          <Col md={6}>
            <div className={headbelow.slideRight}>
              <h2 className={headbelow.title}>
                Start Your Home-Selling Journey Today
              </h2>

              <p className={headbelow.description}>
                Sell your property faster with trusted listings, verified
                buyers, and a smooth selling experience designed for you.
              </p>

              <Button
                className={headbelow.readBtn}
                onClick={() => navigate("/home")}
              >
                Read More →
              </Button>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Headbelow;





