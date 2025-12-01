import React from 'react'
import { Link } from "react-router-dom";

import buying from '../../assets/buyinggg .module.css'

import tooimg from '../../assets/Imges/tooimage.jpg'
import wilton from '../../assets/Imges/witton.jpg'
import kannur from '../../assets/Imges/kannur.jpg'
import wayannad from '../../assets/Imges/wayanad.jpg'
import whatsapp from '../../assets/Imges/whatsapp.jpg'
import gitup from '../../assets/Imges/gitup.jpg'
import bathery from '../../assets/Imges/bathery.jpg'



const prodata = [
    {
      id: 1,
      image: whatsapp,
      head: "Luxury Family Home",
      price: "450000",
      location: "245/12 MG Road Kochi Ernakulam Kerala 682016",
      beds: 3,
      baths: 2,
      sqft: 1500,  
    },
    {
      id: 2,
      image: gitup,
      head: "Modern Apartment",
      price: "350000",
      location: "123/45 Park Street Mumbai Maharashtra 400001",
      beds: 2,
      baths: 1,
      sqft: 900,
    },
    {
      id: 3,
      image: wayannad,
      head: "Cozy Cottage",
      price: "250000",
      location: "789/10 Lakeview Drive Bangalore Karnataka 560001",
      beds: 2,
      baths: 2,
      sqft: 1100,
    },
    {
      id: 4,
      image: kannur,
      head: "Spacious Villa",
      price: "750000",
      location: "456/78 Ocean Avenue Chennai Tamil Nadu 600001",
      beds: 4,
      baths: 3,
      sqft: 2000,
    },
    {
         id: 5,
      image:wilton ,
      head: "Spacious Villa",
      price: "750000",
      location: "456/78 Ocean Avenue Chennai Tamil Nadu 600001",
      beds: 4,
      baths: 3,
      sqft: 2000,
    },
    {
         id: 6,
      image: tooimg,
      head: "Spacious Villa",
      price: "750000",
      location: "456/78 Ocean Avenue Chennai Tamil Nadu 600001",
      beds: 4,
      baths: 3,
      sqft: 2000,
    },
{
      id: 7,
      image: bathery,
      head: "Spacious Villa",
      price: "750000",
      location: "456/78 Ocean Avenue Chennai Tamil Nadu 600001",
      beds: 4,
      baths: 3,
      sqft: 2000
},
{
 id: 8,
      image: whatsapp,
      head: "Spacious Villa",
      price: "750000",
      location: "456/78 Ocean Avenue Chennai Tamil Nadu 600001",
      beds: 4,
      baths: 3,
      sqft: 2000,},
      {id: 9,
      image: whatsapp,
      head: "Spacious Villa",
      price: "750000",
      location: "456/78 Ocean Avenue Chennai Tamil Nadu 600001",
      beds: 4,
      baths: 3,
      sqft: 2000,},
];

const Propertyarea = () => {
  return (
    
    <section className="mt-4">
      <div className="container">

        {/* Title */}
        <h2 className="mb-3 fw-bold mt-3 py-5 text-center">
          Premium Communities for Confident Home Buying
        </h2>

        {/* Cards */}
        <div className="row g-4">
          {prodata.map(item => (
            <div className="col-12 col-sm-6 col-md-4" key={item.id}>

              <div className="card shadow-sm p-3" style={{ borderRadius: "12px" }}>

              
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
                   
                      <div className={buying.sebut}>
  <Link to="/singlepage">
    <button className="btn btn-sm text-white">For Buy</button>
  </Link>
</div>
                  <div className={buying.febut}>
                    <button className="btn btn-sm text-dark">Featured</button>
                    </div>
                  </div>
                </div>

               
                <h5 className="fw-bold">{item.head}</h5>

                
                <p className="text-succsuss fw-bold">₹{item.price}</p>

                <p className="text-muted">{item.location}</p>

               
                <div className="d-flex justify-content-between text-center mt-3">

                  <div>
                    <i className="bi bi-house-door"></i>
                    <p className="m-0">{item.beds} Beds</p>
                  </div>

                  <div>
                    <i className="bi bi-droplet"></i>
                    <p className="m-0">{item.baths} Baths</p>
                  </div>

                  <div>
                    <i className="bi bi-aspect-ratio"></i>
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


export default Propertyarea;
