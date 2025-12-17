import React from 'react'

import { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import secondp from "../../assets/secondpage.module.css";
import imagecc from "../../assets/Imges/Rentpage.jpg";

const Secondpage = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    navigate("/home");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${secondp.section} py-5`}
    >
      <Container>
        <Row className="align-items-center gy-4">

          {/* LEFT IMAGE */}
          <Col md={6}>
            <div
              className={`${secondp.slideLeft} ${
                visible ? secondp.active : ""
              }`}
            >
              <img
                src={imagecc}
                alt="Home"
                className={secondp.imageStyle}
              />
            </div>
          </Col>

          {/* RIGHT CONTENT */}
          <Col md={6}>
            <div
              className={`${secondp.slideRight} ${
                visible ? secondp.active : ""
              }`}
            >
              <h2 className={secondp.title}>
                Start Your Home-Buying Journey Today
              </h2>

              <p className={secondp.description}>
                Find your perfect home with our premium property listings.
                From modern apartments to luxury villas, we offer trusted
                options that suit your lifestyle and budget.
              </p>

              <Button
                className={secondp.readBtn}
                onClick={handleClick}
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

export default Secondpage;
