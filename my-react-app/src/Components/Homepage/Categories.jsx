import React from 'react'
import catego from '../../assets/Categories.module.css';
import { div } from 'framer-motion/client';
import { Container, Row, Col, Card } from "react-bootstrap";






const categories = [
  { title: "Town House", count: "2 Properties", icon: "bi-house-door" },
  { title: "Modern Villa", count: "10 Properties", icon: "bi-house" },
  { title: "Apartment", count: "3 Properties", icon: "bi-building" },
  { title: "Office", count: "3 Properties", icon: "bi-building-check" },
  { title: "Single Family", count: "5 Properties", icon: "bi-people" },
];

const Categories = () => {
  return (
    <div className='mt-3 py-4'>
    <section className={catego.wrapper}>
      <Container>
        
        {/* Header */}
        <Row className="align-items-center mb-4">
          <Col>
            <h3 className={catego.title}>Featured Categories</h3>
            <p className={catego.subtitle}>
              Buy, sell, or rent properties effortlessly with expert guidance
              and verified listings you can trust.
            </p>
          </Col>
          <Col xs="auto">
            <span className={catego.viewAll}>View All Categories →</span>
          </Col>
        </Row>

        {/* Cards */}
        <Row className={catego.cardRow}>
          {categories.map((item, index) => (
            <Col key={index} lg={2} md={4} sm={6} xs={6}>
              <div className={catego.cityCard}>
                <div className={catego.cityIcon}>
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <p className={catego.cardTitle}>{item.title}</p>
                <small className={catego.cardCount}>{item.count}</small>
              </div>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
    </div>
  );
};

;

 


export default Categories;
