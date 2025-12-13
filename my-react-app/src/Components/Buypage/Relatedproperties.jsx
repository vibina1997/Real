import React from 'react'




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

const RelatedProperties = () => {
  const cards = [
    { 
      id: 1, 
      image: homecard,
      head: "Luxury Family Home",
      price: "450000",
      location: "245/12 MG Road Kochi Ernakulam Kerala 682016",
      beds: 3,
      baths: 2,
      sqft: 1500 
    },
    { 
      id: 2, 
      image: related,
      head: "Luxury Family Home",
      price: "450000",
      location: "245/12 MG Road Kochi Ernakulam Kerala 682016",
      beds: 3,
      baths: 2,
      sqft: 1500 
    },
    { 
      id: 3, 
      image: relate,
      head: "Luxury Family Home",
      price: "450000",
      location: "245/12 MG Road Kochi Ernakulam Kerala 682016",
      beds: 3,
      baths: 2,
      sqft: 1500 
    },
    { 
      id: 4,
      image: relat,
      head: "Luxury Family Home",
      price: "450000",
      location: "245/12 MG Road Kochi Ernakulam Kerala 682016",
      beds: 3,
      baths: 2,
      sqft: 1500 
    }
  ];

  return (
    <div className="container py-5">
     
<h3 className="mb-4 text-center font-32px">Related Properties</h3>

      <div className="row g-4">

        {/* LEFT SIDE - 4 CARDS */}
        <div className="col-lg-7">
          <div className="row g-4">
            {cards.map((item) => (
              <div className="col-12 col-md-6" key={item.id}>
                <div className="card shadow-sm rounded-4">

                  <img 
                    src={item.image} 
                    className="card-img-top rounded-top-4" 
                    alt={item.head}
                    style={{ height: "200px", objectFit: "cover" }}
                  />

                  <div className="card-body">
                    <h6>{item.head}</h6>
                    <h5 className="text-danger fw-bold">₹{item.price}</h5>

                    <p className="small text-muted mb-2">{item.location}</p>

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

        {/* RIGHT SIDE */}
        <div className="col-lg-5">
          <img src={homyy} className="img-fluid rounded-4 mb-3" />

          <div className="row g-3 mb-3">
            <div className="col-4">
              <img src={srelat} className="img-fluid rounded-3" />
            </div>
            <div className="col-4">
              <img src={ srela} className="img-fluid rounded-3" />
            </div>
            <div className="col-4">
              <img src={srela} className="img-fluid rounded-3" />
            </div>
          </div>

          <div>
            <h6>Apartment</h6>

            <div className="d-flex gap-3 small mb-2">
              <span>🛏 4 Beds</span>
              <span>🛁 1 Bath</span>
              <span>📐 400 sqft</span>
            </div>

            <p className="text-muted">
              This well-designed apartment offers a compact yet stylish living space,
              perfect for modern lifestyles. With efficient layouts, ample natural light,
              and essential amenities, it provides a comfortable environment for families.
            </p>
  <button className={relttoo.buyNowBtn}>Buy now</button>
          </div>
        </div>

      </div>

      {/* PAGINATION */}
      <div className="d-flex justify-content-center mt-5">
        <nav>
          <ul className="pagination">
            <li className="page-item"><a className="page-link">1</a></li>
            <li className="page-item"><a className="page-link">2</a></li>
            <li className="page-item"><a className="page-link">3</a></li>
            <li className="page-item"><a className="page-link">4</a></li>
            <li className="page-item"><a className="page-link">Next</a></li>
          </ul>
        </nav>
      </div>

    </div>
  );
};

export default RelatedProperties;



