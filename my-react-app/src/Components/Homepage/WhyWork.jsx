import React from 'react'
 
import { Container, Row, Col, Button, Card, Carousel } from "react-bootstrap";
import cardimg from "../../assets/Imges/cityone.jpg";
import  homecard from"../../assets/Imges/relatedten.jpg"
import styles from "../../assets/WhyWork.module.css";




const WhyWork = () => {
  return (
    <section className="py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Text Column */}
          <Col xs={12} md={7} lg={6}>
            <h2 className="mb-3">
              Why You Should Work
              <br />
              With Us
            </h2>
            <p className="mb-4">
              Finding your perfect property has never been easier. Explore a wide range of
              homes, apartments, and plots designed to fit your lifestyle and budget.
            </p>

            <Row className="mt-4">
              <Col xs={12} sm={6} className="mb-3 mb-sm-0">
                <h6 className="fw-semibold">Buy or Rent Your Dream Home</h6>
                <p className="small text-muted mb-0">
                  Get the best price for your property in less time with our trusted real estate
                  experts.
                </p>
              </Col>
              <Col xs={12} sm={6}>
                <h6 className="fw-semibold">Your Trusted Real Estate Partner</h6>
                <p className="small text-muted mb-0">
                  We guide you through every step — from search to loan approval.
                </p>
              </Col>
            </Row>

            <Button variant="dark" className="mt-3">
              Learn More <i className="bi bi-arrow-right-short"></i>
            </Button>
          </Col>

          {/* Right Image Carousel Column */}
          <Col xs={12} md={5} lg={6} className="mt-4 mt-md-0 d-flex justify-content-center">
            <Card className="border-0 shadow-sm rounded" style={{ maxWidth: "400px", width: "100%" }}>
              <Carousel indicators={true}>
                <Carousel.Item>
                  <img
                    className="d-block w-100 rounded"
                    src={cardimg}
                    alt="house 1"
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 rounded"
                    src={homecard}
                    alt="house 2"
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                </Carousel.Item>
              </Carousel>

              {/* Badge */}
              <div className="position-absolute bottom-0 start-0 bg-dark text-white px-3 py-2 m-3 rounded d-flex align-items-center gap-2">
                <i className="bi bi-people-fill"></i>
                <div>
                  <div className="small">Total Clients</div>
                  <div className="fw-bold">25,000</div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyWork;

