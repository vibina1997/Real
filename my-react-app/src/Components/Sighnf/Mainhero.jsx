import React from 'react'

import { Container, Card, Row, Col } from "react-bootstrap";
import hromain from "../../assets/Imges/buypage babber.jpg";
import mainhero from "../../assets/heromain.module.css";
import { useNavigate } from "react-router-dom";



const Mainhero = () => {
  const navigate = useNavigate();

  return (
    <Container
      fluid
      className={mainhero.loginBg}
      style={{ backgroundImage: `url(${hromain})` }}
    >
      <div className={mainhero.centerBox}>
        <Card className={mainhero.loginCard}>
          <div className="text-center mt-4 mb-4">
            <h2 className="fw-bold text-white">Welcome</h2>
            <p className="text-white-50">
              Enter personal details to your employee account
            </p>
          </div>

          <Row>
            <Col className="d-flex justify-content-start">
              <button
                className={mainhero.outlineBtn}
                onClick={() => navigate("/signin")}
              >
                Sign In
              </button>
            </Col>

            <Col className="d-flex justify-content-end">
              <button
                className={mainhero.primaryBtn}
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </button>
            </Col>
          </Row>
        </Card>
      </div>
    </Container>
  );
};

export default Mainhero;


 



