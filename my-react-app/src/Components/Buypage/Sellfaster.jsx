import React from 'react'
import sell from '../../assets/Sellfaster.module.css'

import sellimage from "../../assets/Imges/homeimagecard.jpg";
import happyhome from "../../assets/Imges/happyhome.png";
import chillhome from "../../assets/Imges/chillhome.png";

import vite from '../../assets/Imges/white.jpg'
import whatsapp from '../../assets/Imges/whatsapp.jpg'
import instoo from '../../assets/Imges/instoo.jpg'
const propertyData = [
  {
    id: 1,
    image: sellimage,
    head: "Luxury Family Home",
    price: "450000",
    location: "245/12 MG Road Kochi Ernakulam Kerala 682016",
    beds: 3,
    baths: 2,
    sqft: 1500,
  },
  {
    id: 2,
    image: happyhome,
    head: "Modern Smart Home",
    price: "520000",
    location: "MG Road Kochi 682016",
    beds: 4,
    baths: 3,
    sqft: 1800,
  },
  {
    id: 3,
    image: chillhome,
    head: "Cozy Family House",
    price: "380000",
    location: "Palarivattom Kochi 682025",
    beds: 2,
    baths: 2,
    sqft: 1200,
  },
  {
    id: 4,
    image: vite,
    head: "Premium Villa",
    price: "750000",
    location: "Kaloor Kochi 682017",
    beds: 4,
    baths: 3,
    sqft: 2000,
  },
  {
    id: 5,
    image: whatsapp,
    head: "Comfort Living Home",
    price: "420000",
    location: "Edappally Kochi 682024",
    beds: 3,
    baths: 2,
    sqft: 1450,
  },
  {
    id: 6,
    image: instoo,
    head: "Urban Apartment",
    price: "350000",
    location: "Kakkanad Kochi 682030",
    beds: 2,
    baths: 1,
    sqft: 1050,
  },
];



const Sellfaster = () => {
  return (
    <section className="mt-4">
      <div className="container py-5">

        {/* Section Title */}
        <div className={sell.sellfaster}>
          <h2 className="mb-4 text-center fw-bold">
            Sell Faster with Trusted Expertise
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="row g-4 mt-3">
          {propertyData.map((item) => (
            <div className="col-12 col-sm-6 col-md-4" key={item.id}>
              <div className="card shadow-sm p-3 rounded-4 h-100">

              
                <div style={{ position: "relative" }}>
                  <img
                    src={item.image}
                    alt={item.head}
                    className="img-fluid rounded mb-3"
                    style={{ height: "200px", width: "100%", objectFit: "cover" }}
                  />

               
                  <div
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      display: "flex",
                      gap: "6px",
                    }}
                  >
                    <div className={sell.buttonone}>
                    <button className="btn btn-sm text-white">For sell</button>
                    </div>
                    <div className={sell.buttontwo}>
                    <button className="btn btn-sm text-dark">Featured</button>
                    </div>
                  </div>
                </div>

                <h5 className="fw-bold">{item.head}</h5>
                <h4 className="text-success fw-bold">₹{item.price}</h4>                <p className="text-muted small">{item.location}</p>
                <div className="d-flex justify-content-between text-center mt-3">

                  <div>
                    <i className="bi bi-house-door"></i>
                    <p className="m-0 small">{item.beds} Beds</p>
                  </div>

                  <div>
                    <i className="bi bi-droplet"></i>
                    <p className="m-0 small">{item.baths} Baths</p>
                  </div>

                  <div>
                    <i className="bi bi-aspect-ratio"></i>
                    <p className="m-0 small">{item.sqft} sqft</p>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
export default Sellfaster;
