import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import secondcom from '../../assets/Pagethreecss/Second.module.css'

import proprt from '../../assets/Imges/aproprty.jpg'
import cartoo from '../../assets/Imges/cartoon.jpg'
import imooo from '../../assets/Imges/imooo.jpg'
import bridde from '../../assets/Imges/bridvilla.jpg'
import light from '../../assets/Imges/lighthouse.jpg'
import soom from '../../assets/Imges/soom.jpg'
import greenvilla from '../../assets/Imges/greenvilla.jpg'
import retroo from '../../assets/Imges/restooo.jpg'
import calture from '../../assets/Imges/calture.jpg'
const secondcard = [
  {
    id: 1,
    image:proprt,
    head: "Luxury Family Home",
    price: "450000",
    location: "245/12 MG Road Kochi Ernakulam Kerala 682016",
    beds: 3,
    baths: 2,
    sqft: 1500,
  },
  {
    id: 2,
    image: cartoo,
    head: "Luxury Family Home",
    price: "450000",
    location: "245/12 MG Road Kochi Ernakulam Kerala 682016",
    beds: 3,
    baths: 2,
    sqft: 1500,
  },
  {
    id: 3,
    image: imooo,
    head: "Luxury Family Home",
    price: "450000",
    location: "245/12 MG Road Kochi Ernakulam Kerala 682016",
    beds: 3,
    baths: 2,
    sqft: 1500,
  },
  {
    id: 4,
    image: bridde,
    head: "Luxury Family Home",
    price: "450000",
    location: "245/12 MG Road Kochi Ernakulam Kerala 682016",
    beds: 3,
    baths: 2,
    sqft: 1500,
  },
  {
    id: 5,
    image: light,
    head: "Luxury Family Home",
    price: "450000",
    location: "245/12 MG Road Kochi Ernakulam Kerala 682016",
    beds: 3,
    baths: 2,
    sqft: 1500,
  },
  {
    id: 6,
    image: soom,
    head: "Luxury Family Home",
    price: "450000",
    location: "245/12 MG Road Kochi Ernakulam Kerala 682016",
    beds: 3,
    baths: 2,
    sqft: 1500,
  },
  {
    id: 7,
    image: greenvilla,
    head: "Luxury Family Home",
    price: "450000",
    location: "245/12 MG Road Kochi Ernakulam Kerala 682016",
    beds: 3,
    baths: 2,
    sqft: 1500,
  },
  {
    id: 8,
    image: retroo,
    head: "Luxury Family Home",
    price: "450000",
    location: "245/12 MG Road Kochi Ernakulam Kerala 682016",
    beds: 3,
    baths: 2,
    sqft: 1500,
  },
  {
    id: 9,
    image: calture,
    head: "Luxury Family Home",
    price: "450000",
    location: "245/12 MG Road Kochi Ernakulam Kerala 682016",
    beds: 3,
    baths: 2,
    sqft: 1500,
  },
];


const Secondcom = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/singlepage");
  };

  return (
    
        <section className="py-5">
          <div className="container ">
    
            <h2 className="mb-3 fw-bold">
              Experience Premium Communities Designed for Renters
            </h2>
            <p>Unlock a confident rental experience in thoughtfully designed premium communities..</p>
    
            <div className="row g-4">
              {secondcard.map((item) => (
                <div className="col-12 col-sm-6 col-md-4" key={item.id}>
    
                  <div className={secondcom.card}>
                    
                    <div className={secondcom.cardImage}>
                      <img src={item.image} alt={item.head} />
    
                      <div className={secondcom.tagButtons}>
                       <span className={secondcom.buyBtn} onClick={handleClick} style={{ cursor: "pointer" }}>
      For Rent
    </span>
                        <span className={secondcom.featureBtn}>Featured</span>
                      </div>
                    </div>
    
                    <div className={secondcom.cardContent}>
                      <h5>{item.head}</h5>
                      <h4>₹ {item.price}</h4>
                      <p>{item.location}</p>
    
                      <div className={secondcom.features}>
                        <div>
                          <i className="bi bi-house-door"></i>
                          <span>{item.beds} Bed</span>
                        </div>
                        <div>
                          <i className="bi bi-droplet"></i>
                          <span>{item.baths} Bath</span>
                        </div>
                        <div>
                          <i className="bi bi-aspect-ratio"></i>
                          <span>{item.sqft} sqft</span>
                        </div>
                      </div>
    
                    </div>
    
                  </div>
    
                </div>
              ))}
            </div>
    
          </div>
        </section>
  );
};

export default Secondcom;

 
