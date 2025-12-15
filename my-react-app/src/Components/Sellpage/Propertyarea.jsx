import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import buying from '../../assets/buyinggg .module.css'

import buycardo from '../../assets/Imges/buycardtwo.jpg'
import buycardt from '../../assets/Imges/buycardthee.jpg'
import buycardth from '../../assets/Imges/buycardten.jpg'
import buycardl from '../../assets/Imges/buycardnain.jpg'
import buycardone from '../../assets/Imges/buycardleven.jpg'
import buycardoo from '../../assets/Imges/buycardsix.jpg'
import buyyyy from '../../assets/Imges/buycardfor.jpg'
import buycr from '../../assets/Imges/buycardone.jpg'
import buinggg from '../../assets/Imges/buycardfive.jpg'

const prodata = [
    {
      id: 1,
      image: buycardo,
      head: "Luxury Family Home",
      price: "450000",
      location: "245/12 MG Road Kochi Ernakulam Kerala 682016",
      beds: 3,
      baths: 2,
      sqft: 1500,  
    },
    {
      id: 2,
      image: buycardt,
      head: "Modern Apartment",
      price: "350000",
      location: "123/45 Park Street Mumbai Maharashtra 400001",
      beds: 2,
      baths: 1,
      sqft: 900,
    },
    {
      id: 3,
      image: buycardth,
      head: "Cozy Cottage",
      price: "250000",
      location: "789/10 Lakeview Drive Bangalore Karnataka 560001",
      beds: 2,
      baths: 2,
      sqft: 1100,
    },
    {
      id: 4,
      image: buycardl,
      head: "Spacious Villa",
      price: "750000",
      location: "456/78 Ocean Avenue Chennai Tamil Nadu 600001",
      beds: 4,
      baths: 3,
      sqft: 2000,
    },
    {
         id: 5,
      image:buycardone ,
      head: "Spacious Villa",
      price: "750000",
      location: "456/78 Ocean Avenue Chennai Tamil Nadu 600001",
      beds: 4,
      baths: 3,
      sqft: 2000,
    },
    {
         id: 6,
      image: buycardoo,
      head: "Spacious Villa",
      price: "750000",
      location: "456/78 Ocean Avenue Chennai Tamil Nadu 600001",
      beds: 4,
      baths: 3,
      sqft: 2000,
    },
{
      id: 7,
      image: buyyyy,
      head: "Spacious Villa",
      price: "750000",
      location: "456/78 Ocean Avenue Chennai Tamil Nadu 600001",
      beds: 4,
      baths: 3,
      sqft: 2000
},
{
 id: 8,
      image: buycr,
      head: "Spacious Villa",
      price: "750000",
      location: "456/78 Ocean Avenue Chennai Tamil Nadu 600001",
      beds: 4,
      baths: 3,
      sqft: 2000,},
      {id: 9,
      image: buinggg,
      head: "Spacious Villa",
      price: "750000",
      location: "456/78 Ocean Avenue Chennai Tamil Nadu 600001",
      beds: 4,
      baths: 3,
      sqft: 2000,},
];

const Propertyarea = () => {
  const navigate = useNavigate();


  return (
    <section className="py-5">
      <div className="container ">

        <h2 className="mb-3 fw-bold">
          Premium Communities for Confident Home Buying
        </h2>
        <p>Unlock confident home buying with thoughtfully designed premium communities.</p>

        <div className="row g-4">
          {prodata.map((item) => (
            <div className="col-12 col-sm-6 col-md-4" key={item.id}>

              <div className={buying.card}>
                
                <div className={buying.cardImage}>
                  <img src={item.image} alt={item.head} />

                  <div className={buying.tagButtons}>
                   <span
      className={buying.buyBtn}
      style={{ cursor: "pointer" }}
      onClick={() => navigate("/singlepage")}
    >
      For Buy
    </span>
                    <span className={buying.featureBtn}>Featured</span>
                  </div>
                </div>

                <div className={buying.cardContent}>
                  <h5>{item.head}</h5>
                  <h4>₹ {item.price}</h4>
                  <p>{item.location}</p>

                  <div className={buying.features}>
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


export default Propertyarea;



