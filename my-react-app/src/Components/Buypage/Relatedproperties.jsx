


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import homecard from '../../assets/Imges/homeimagecard.jpg'
import related from '../../assets/Imges/relatedfive.jpg'
import relate from '../../assets/Imges/relatedfor.jpg'
import relat from '../../assets/Imges/relatedone.jpg'
import srelated from '../../assets/Imges/relatedtree.jpg'
import srelat from '../../assets/Imges/relatedtwo.jpg'
import srela from '../../assets/Imges/relatedsix.jpg'
import sreela from '../../assets/Imges/relatedseven.jpg'
import homyy from '../../assets/Imges/home.jpg'
import sideimag from '../../assets/Imges/apartment.jpg'



import relttoo from "../../assets/Fist relatedpro.module.css"






const allPagesData = [
  {
    cards: [
      { id: 1, image: homecard, head: "Luxury Family Home", price: "450000", location: "MG Road, Kochi", beds: 3, baths: 2, sqft: 1500 },
      { id: 2, image: related, head: "Luxury Family Home", price: "450000", location: "MG Road, Kochi", beds: 3, baths: 2, sqft: 1500 },
      { id: 3, image: relate, head: "Luxury Family Home", price: "450000", location: "MG Road, Kochi", beds: 3, baths: 2, sqft: 1500 },
      { id: 4, image: relat, head: "Luxury Family Home", price: "450000", location: "MG Road, Kochi", beds: 3, baths: 2, sqft: 1500 },
    ],
    side: {
      big: sideimag,
      small: [sideimag, sideimag, sideimag],
      title: "Apartment",
      beds: 4,
      baths: 1,
      sqft: 400,
      desc: "Compact yet stylish living space for modern lifestyles.",
    },
  },
  {
    cards: [
      { id: 5, image: homecard, head: "Modern Villa", price: "850000", location: "Lake View, Kochi", beds: 5, baths: 3, sqft: 3000 },
      { id: 6, image: srelated, head: "Modern Villa", price: "850000", location: "Lake View, Kochi", beds: 5, baths: 3, sqft: 3000 },
      { id: 7, image: related, head: "Modern Villa", price: "850000", location: "Lake View, Kochi", beds: 5, baths: 3, sqft: 3000 },
      { id: 8, image: srela, head: "Modern Villa", price: "850000", location: "Lake View, Kochi", beds: 5, baths: 3, sqft: 3000 },
    ],
    side: {
      big: sideimag,
      small: [sideimag, sideimag, sideimag],
      title: "Villa",
      beds: 5,
      baths: 3,
      sqft: 800,
      desc: "Spacious villa with modern amenities.",
    },
  },
];

const RelatedProperties = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);

  const handlePrev = () =>
    setCurrentPage((prev) => (prev === 0 ? allPagesData.length - 1 : prev - 1));

  const handleNext = () =>
    setCurrentPage((prev) => (prev + 1) % allPagesData.length);

  const pageData = allPagesData[currentPage];

  return (
    <div className="container py-5">
      <h3 className={`${relttoo.heading} text-center`}>Related Properties</h3>
      <p className={`${relttoo.subheading} text-center`}>
        Explore similar homes that match your style and budget
      </p>

      <div className="row g-4">
        {/* LEFT */}
        <div className="col-lg-7">
          <div className="row g-4">
            {pageData.cards.map((item) => (
              <div className="col-md-6" key={item.id}>
                <div className={`${relttoo.card} card shadow-sm rounded-4`}>
                  <div className={relttoo.imageWrapper}>
                    <img src={item.image} alt={item.head} />
                  </div>
                  <div className="card-body">
                    <h6 className={relttoo.title}>{item.head}</h6>
                    <h5 className={relttoo.price}>₹{item.price}</h5>
                    <p className="small text-muted">{item.location}</p>
                    <div className="d-flex justify-content-between small">
                      <span>🛏 {item.beds}</span>
                      <span>🛁 {item.baths}</span>
                      <span>📐 {item.sqft} sqft</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-lg-5">
          <div key={currentPage} className={`${relttoo.sideBigImgWrapper} ${relttoo.rotateAnimation}`}>
            <img src={pageData.side.big} className={relttoo.bigImg} alt="side" />
          </div>

          <div className="row g-3 my-3">
            {pageData.side.small.map((img, i) => (
              <div className="col-4" key={i}>
                <img src={img} className={relttoo.smallImg} alt="thumb" />
              </div>
            ))}
          </div>

          <h6 className={relttoo.titleRight}>{pageData.side.title}</h6>
          <div className="d-flex gap-3 small mb-2">
            <span>🛏 {pageData.side.beds}</span>
            <span>🛁 {pageData.side.baths}</span>
            <span>📐 {pageData.side.sqft}</span>
          </div>
          <p className="text-muted">{pageData.side.desc}</p>

          <button className={relttoo.buttonsss} onClick={() => navigate("/contact")}>
            Buy Now
          </button>
        </div>
      </div>

      {/* PAGINATION */}
      <div className="d-flex justify-content-center gap-3 mt-5">
        <button className={relttoo.page} onClick={handlePrev}>←</button>
        {allPagesData.map((_, i) => (
          <button
            key={i}
            className={`${relttoo.page} ${currentPage === i ? relttoo.active : ""}`}
            onClick={() => setCurrentPage(i)}
          >
            {i + 1}
          </button>
        ))}
        <button className={relttoo.page} onClick={handleNext}>→</button>
      </div>
    </div>
  );
};

export default RelatedProperties;




