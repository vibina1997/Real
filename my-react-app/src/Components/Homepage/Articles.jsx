import React, { useState } from "react";
import styles from "../../assets/Articles.module.css";
import { div, section } from "framer-motion/client";


import homeimage from "../../assets/Imges/cityone.jpg"
import homeswwet from "../../assets/Imges/citythree.jpg"
import homelate from "../../assets/Imges/citytwo.jpg"





const articles = [
  {
    id: 1,
    title: "Real Estate Markets on the Move",
    type: "Apartment",
    date: "March 19, 2024",
    image: homeimage,
    content: `Discover your dream home with our expert real estate 
    services. Whether you’re looking for modern apartments, cozy houses,
     or prime plots, we help you find properties that match your lifestyle and budget.
      Explore the best locations, invest smartly, and make your move with confidence.`,
  },
  {
    id: 2,
    title: "Best Place to Live & Work",
    type: "Apartment",
    date: "March 19, 2024",
    image: homeswwet,
    content: `Discover your dream home with our expert
     real estate services. Whether you’re looking for modern 
     apartments, cozy houses, or prime plots, we help you find 
     properties that match your lifestyle and budget. Explore the best
      locations, invest smartly, and make your move with confidence.`,
  },
  {
    id: 3,
    title: "Top 10 Budget-Friendly Cities",
    type: "Single Family",
    date: "March 19, 2024",
    image: homelate,
    content: `Discover your dream home with our expert real estate services.
     Whether you’re looking for modern apartments, cozy houses, or prime plots,
      we help you find properties that match your lifestyle and budget.
       Explore the best locations, invest smartly, and make your move with confidence.`,
  },
 
];

const Articles = () => {
 
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="container">
     <div className="mt-3 py-4">
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Recent Articles & News</h2>
      <div className={styles.cardContainer}>
        {articles.map((item) => (
          <div className={styles.card} key={item.id}>
            <div className={styles.imageWrapper}>
              <img src={item.image} alt={item.title} className={styles.image} />
              <button
                className={styles.readButton}
                onClick={() => toggleExpand(item.id)}
              >
                {expandedCard === item.id ? "Show Less ↑" : "Read More →"}
              </button>
            </div>
            <div className={styles.cardBody}>
              <p className={styles.typeDate}>
                {item.type} • {item.date}
              </p>
              <h4 className={styles.cardTitle}>{item.title}</h4>
              {expandedCard === item.id && (
                <div className={styles.extraContent}>
                  <p>{item.content}</p>
                  
                </div>
              )}
            </div>
          </div>
         
        ))}
         
      </div>
    </div>
  </div>
  </div>
  );
};

export default Articles;
