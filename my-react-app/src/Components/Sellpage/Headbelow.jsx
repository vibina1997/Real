import React from 'react'
 
import headbelow from '../../assets/headbelow.module.css'

import { Container, Row, Col, Button } from "react-bootstrap";

import imagoo from '../../assets/Imges/homepeople.jpg'









const Headbelow = () => {
  return (
    <section>
      <Container className="py-5">
        <Row className="align-items-center">

          {/* Left Image */}
          <Col md={6}>
            <div className={headbelow.slideLeft}>
              <img
                src={imagoo}
                alt="Room 1"
                className={headbelow.imageStyle}
              />
            </div>
          </Col>

          {/* Right Content */}
          <Col md={6}>
            <div className={headbelow.slideRight}>
              <h2 className={headbelow.title}>
                Start Your Home-Buying Journey Today
              </h2>
              <p className={headbelow.description}>
                Find your perfect home with our premium property listings.
                From modern apartments to luxury villas, we offer trusted
                options that suit your lifestyle and budget.
              </p>
              <Button className={headbelow.readBtn}>Read More →</Button>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};




export default Headbelow
