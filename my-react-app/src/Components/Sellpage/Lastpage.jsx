
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import sstatoo from "../../assets/Lastpage.module.css";

import homecard from "../../assets/Imges/homeimagecard.jpg";
import sideimage from "../../assets/Imges/home.jpg";
import sideimag from "../../assets/Imges/apartment.jpg";

const allPagesData = [
  {
    cards: [
      { id: 1,
         image: homecard,
          head: "Luxury Family Home",
           price: "450000",
            location: "245/12 MG Road Kochi Ernakulam Kerala 682016",
             beds: 3,
              baths: 2, 
              sqft: 1500 },
      { id: 2,
         image: homecard,
          head: "Luxury Family Home",
           price: "450000",
            location: "245/12 MG Road Kochi Ernakulam Kerala 682016",
             beds: 3,
              baths: 2,
               sqft: 1500 },
      { id: 3,
         image: homecard,
          head: "Luxury Family Home",
           price: "450000",
            location: "245/12 MG Road Kochi Ernakulam Kerala 682016",
             beds: 3,
              baths: 2,
               sqft: 1500 },
      { id: 4,
         image: homecard,
          head: "Luxury Family Home",
           price: "450000",
            location: "245/12 MG Road Kochi Ernakulam Kerala 682016",
             beds: 3, 
             baths: 2,
              sqft: 1500 },
    ],
    side: { big: sideimage, 
      small: [sideimag, sideimag, sideimag],
       title: "Apartment",
        beds: 4, 
        baths: 1,
        sqft: 400,
         desc: "Compact yet stylish living space for modern lifestyles." }
  },
  {
    cards: [
      { id: 5, 
        image: homecard,
         head: "Modern Villa",
          price: "850000",
           location: "12/45 Lake View, Kochi, Kerala 682016",
            beds: 5,
             baths: 3, 
             sqft: 3000 },
      { id: 6,
         image: homecard,
          head: "Modern Villa",
           price: "850000",
            location: "12/45 Lake View, Kochi, Kerala 682016",
             beds: 5, 
             baths: 3, 
             sqft: 3000 },
      { id: 7, 
        image: homecard,
         head: "Modern Villa",
          price: "850000",
           location: "12/45 Lake View, Kochi, Kerala 682016",
            beds: 5,
             baths: 3,
              sqft: 3000 },
      { id: 8, 
        image: homecard,
         head: "Modern Villa",
          price: "850000",
           location: "12/45 Lake View, Kochi, Kerala 682016",
            beds: 5,
             baths: 3,
              sqft: 3000 },
    ],
    side: { big: sideimage, small: [sideimag, sideimag, sideimag],
       title: "Villa",
        beds: 5,
         baths: 3,
          sqft: 800,
           desc: "Spacious villa with modern amenities." }
  },
];

const Lastpage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (index) => setCurrentPage(index);
  const handlePrev = () => setCurrentPage(prev => (prev - 1 + allPagesData.length) % allPagesData.length);
  const handleNext = () => setCurrentPage(prev => (prev + 1) % allPagesData.length);

  const pageData = allPagesData[currentPage];

  return (
    <div className="container py-5">
      <h3 className={`mb-4 text-center ${sstatoo.heading}`}>Related Properties</h3>
            <p className={`text-center mb-4 ${sstatoo.subheading}`}>
  Explore similar homes that match your style and budget
</p>
      <div className="row g-4">
        {/* Left Grid */}
        <div className="col-lg-7">
          <div className="row g-4">
            {pageData.cards.map(item => (
              <div className="col-12 col-md-6" key={item.id}>
                <div className={`card shadow-sm rounded-4 ${sstatoo.card}`}>
                  <div className={sstatoo.imageWrapper}>
                    <img src={item.image} className="card-img-top rounded-top-4" alt={item.head} />
                  </div>
                  <div className="card-body">
                    <h6 className={sstatoo.title}>{item.head}</h6>
                    <h5 className={sstatoo.price}>₹{item.price}</h5>
                    <p className="small text-muted">{item.location}</p>
                    <div className="d-flex justify-content-between small">
                      <span>🛏 {item.beds} Beds</span>
                      <span>🛁 {item.baths} Baths</span>
                      <span>📐 {item.sqft} sqft</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="col-lg-5">
          <div className={`${sstatoo.sideBigImgWrapper} ${sstatoo.rotateAnimation}`} key={currentPage}>
            <img src={pageData.side.big} className={`img-fluid rounded-4 mb-3 ${sstatoo.bigImg}`} />
          </div>

          <div className="row g-3 mb-3">
            {pageData.side.small.map((img, idx) => (
              <div className="col-4" key={idx}>
                <img src={img} className={`img-fluid rounded-3 ${sstatoo.smallImg}`} />
              </div>
            ))}
          </div>

          <div>
            <h6 className={sstatoo.titleRight}>{pageData.side.title}</h6>
            <div className="d-flex gap-3 small mb-2">
              <span>🛏 {pageData.side.beds} Beds</span>
              <span>🛁 {pageData.side.baths} Bath</span>
              <span>📐 {pageData.side.sqft} sqft</span>
            </div>
            <p className="text-muted">{pageData.side.desc}</p>
            <button className={sstatoo.buttonsss} onClick={() => navigate("/contact")}>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Pagination with arrows */}
      <div className="d-flex justify-content-center align-items-center gap-3 mt-5">
        <button className={sstatoo.page} onClick={handlePrev}>←</button>
        {allPagesData.map((_, idx) => (
          <button
            key={idx}
            className={`${sstatoo.page} ${currentPage === idx ? sstatoo.active : ""}`}
            onClick={() => handlePageClick(idx)}
          >
            {idx + 1}
          </button>
        ))}
        <button className={sstatoo.page} onClick={handleNext}>→</button>
      </div>
    </div>
  );
};

export default Lastpage;




   

