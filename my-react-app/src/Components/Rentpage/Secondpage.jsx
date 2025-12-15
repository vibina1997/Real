import React from 'react'

import { Container, Row, Col, Button } from 'react-bootstrap'
import secondp from '../../assets/secondpage.module.css'
import imagecc from '../../assets/Imges/Rentpage.jpg'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Secondpage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
   <section className={`${secondp.section} py-5`}>

      <Container>
        <Row className="align-items-center gy-4">

          {/* Left Image */}
          <Col md={6}>
            <div className={secondp.slideLeft}>
              <img
                src={imagecc}
                alt="Home"
                className={secondp.imageStyle}
              />
            </div>
          </Col>

          {/* Right Content */}
          <Col md={6}>
            <div className={secondp.slideRight}>
              <h2 className={secondp.title}>
                Start Your Home-Buying Journey Today
              </h2>

              <p className={secondp.description}>
                Find your perfect home with our premium property listings.
                From modern apartments to luxury villas, we offer trusted
                options that suit your lifestyle and budget.
              </p>

             <Button className={secondp.readBtn} onClick={handleClick}>
      Read More →
    </Button>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  )
}

export default Secondpage


