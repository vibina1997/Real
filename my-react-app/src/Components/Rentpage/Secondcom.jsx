import React from 'react'
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
  return (
    <section className="mt-4">
      <div className="container py-5">

        <div className={secondcom.headoo}>
          <h2 style={{ fontWeight: 700 }}>
            Trusted Expertise for a Smooth Rental Journey
          </h2>
        </div>

        <div className="row g-4 mt-3">
          {secondcard.map((item) => (
            <div className="col-md-4" key={item.id}>
              <div className="card shadow-sm p-3" style={{ borderRadius: "12px" }}>

                {/* Image */}
                <div style={{ position: "relative" }}>
                  <img
                    src={item.image}
                    alt={item.head}
                    className="img-fluid rounded mb-3"
                    style={{ height: "200px", width: "100%", objectFit: "cover" }}
                  />

                  {/* Tag buttons */}
                  <div
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      display: "flex",
                      gap: "6px",
                    }}
                  >
                    <div className={secondcom. buttonr}>
                    <button className="btn btn-sm text-white ">For Rent</button>
                    </div>
                      <div className={secondcom.buttonf}>
                    <button className="btn btn-sm text-dark">Featured</button>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <h5 className="fw-bold">{item.head}</h5>
                <h4 className="text-primary fw-bold">₹{item.price}</h4>

                <p className="text-muted">{item.location}</p>

                <div className="d-flex justify-content-between text-center mt-3">
                  <div>
                    <i className="bi bi-house-door-fill"></i>
                    <p className="m-0">{item.beds} Beds</p>
                  </div>

                  <div>
                    <i className="bi bi-droplet-half"></i>
                    <p className="m-0">{item.baths} Baths</p>
                  </div>

                  <div>
                    <i className="bi bi-bounding-box-circles"></i>
                    <p className="m-0">{item.sqft} Sqft</p>
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

 
