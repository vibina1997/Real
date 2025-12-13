import React from 'react'
import sell from '../../assets/Sellfaster.module.css'

import sellimage from "../../assets/Imges/homeimagecard.jpg";
import happyhome from "../../assets/Imges/happyhome.png";
import chillhome from "../../assets/Imges/chillhome.png";

import vite from '../../assets/Imges/white.jpg'
import whatsapp from '../../assets/Imges/whatsapp.jpg'
import instoo from '../../assets/Imges/instoo.jpg'
import mnday from '../../assets/Imges/mondayfor.jpg'
import mango from '../../assets/Imges/mondayone.jpg'
import orange from '../../assets/Imges/mondaythree.jpg'




const propertyData = [
  { id: 1, image: mnday, head: "Luxury Family Home", price: "450000", location: "245/12 MG Road Kochi Ernakulam Kerala 682016", beds: 3, baths: 2, sqft: 1500 },
  { id: 2, image: mango, head: "Modern Smart Home", price: "520000", location: "MG Road Kochi 682016", beds: 4, baths: 3, sqft: 1800 },
  { id: 3, image: mango, head: "Cozy Family House", price: "380000", location: "Palarivattom Kochi 682025", beds: 2, baths: 2, sqft: 1200 },
  { id: 4, image: orange, head: "Premium Villa", price: "750000", location: "Kaloor Kochi 682017", beds: 4, baths: 3, sqft: 2000 },
  { id: 5, image: orange, head: "Comfort Living Home", price: "420000", location: "Edappally Kochi 682024", beds: 3, baths: 2, sqft: 1450 },
  { id: 6, image: instoo, head: "Urban Apartment", price: "350000", location: "Kakkanad Kochi 682030", beds: 2, baths: 1, sqft: 1050 },
];

const Sellfaster = () => {
  return (
    <section className="py-5">
      <div className="container ">
        <h2 className=" mb-2 fw-bold">Sell Faster with Trusted Expertise</h2>
        <p>Discover Homes That Make a Statement</p>

        <div className="row g-4">
          {propertyData.map((item) => (
            <div className="col-12 col-sm-6 col-md-4" key={item.id}>
              <div className={sell.card}>
                {/* Image */}
                <div className={sell.cardImage}>
                  <img src={item.image} alt={item.head} />
                  <div className={sell.tagButtons}>
                    <span className={sell.buyBtn}>For Buy</span>
                    <span className={sell.featureBtn}>Featured</span>
                  </div>
                </div>

                {/* Content */}
                <div className={sell.cardContent}>
                  <h5>{item.head}</h5>
                  <h4>₹{item.price}</h4>
                  <p>{item.location}</p>  

                  <div className={sell.features}>
                    <div>
                      <i className="bi bi-house-door"></i>
                      <span>{item.beds} Beds</span>
                    </div>
                    <div>
                      <i className="bi bi-droplet"></i>
                      <span>{item.baths} Baths</span>
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

export default Sellfaster;


