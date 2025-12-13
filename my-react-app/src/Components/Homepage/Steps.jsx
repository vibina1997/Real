import React from "react";
import stepso from "../../assets/Steps.module.css";
import { Container, Row, Col } from "react-bootstrap";
import nature from '../../assets/Imges/nature.jpg'
import { div } from "framer-motion/client";

const steps = [
  {
    icon: <i className="bi bi-search"></i>,
    title: "Find Your Dream Home",
    description:
      "Discover modern homes, luxury apartments, and plots that match your lifestyle.",
  },
  {
    icon: <i className="bi bi-people"></i>,
    title: "Expert Guidance",
    description:
      "Experienced agents helping you discover premium properties and achieve the best real estate deals.",
  },
  {
    icon: <i className="bi bi-house"></i>,
    title: "Start Your New Beginning",
    description:
      "Get personalized support for buying, selling, or renting properties with ease.",
  },
];

const Steps = () => {
  return (
    <section className="py-5">   {/* Bootstrap spacing */}
      
      <div
        className={stepso.bgSection}
        style={{ backgroundImage: `url(${nature})` }}
      >
        <div className={`container text-center ${stepso.stepsContainer}`}>
          
          <h2 className={`${stepso.heading} mb-2`}>
            Find Your Perfect Place in 3 Easy Steps
          </h2>
          
          <p className={`${stepso.subheading} mb-4`}>
            Your trusted real estate partner for buying, selling, and renting across Kerala.
          </p>

          <Row className="g-4 mt-2">
            {steps.map((step, index) => (
              <Col key={index} md={4}>
                <div className={stepso.iconWrapper}>{step.icon}</div>
                <h5 className={stepso.stepTitle}>{step.title}</h5>
                <p className={stepso.stepDesc}>{step.description}</p>
              </Col>
            ))}
          </Row>

        </div>
      </div>

    </section>
  );
};



export default Steps;




