


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import sell from '../../assets/Sellfaster.module.css';
import sellimage from "../../assets/Imges/homeimagecard.jpg";
import happyhome from "../../assets/Imges/happyhome.png";
import chillhome from "../../assets/Imges/chillhome.png";

import vite from '../../assets/Imges/white.jpg'
import whatsapp from '../../assets/Imges/whatsapp.jpg'
import instoo from '../../assets/Imges/instoo.jpg'
import mnday from '../../assets/Imges/mondayfor.jpg'
import mango from '../../assets/Imges/mondayone.jpg'
import orange from '../../assets/Imges/mondaythree.jpg'






const propertiesData = [
  { id: 1, image: whatsapp, head: "Luxury Family Home", price: 3976000, location: "Kochi", beds: 3, baths: 2, sqft: 1500, type: "House" },
  { id: 2, image: instoo, head: "Modern Apartment", price: 3976000, location: "Bangalore", beds: 2, baths: 1, sqft: 1000, type: "Apartment" },
  { id: 3, image: orange, head: "Budget Home", price: 3976000, location: "Trivandrum", beds: 2, baths: 2, sqft: 1200, type: "House" },
  { id: 4, image: whatsapp, head: "Family Villa", price: 3500000, location: "Kochi", beds: 4, baths: 3, sqft: 2000, type: "House" },
  { id: 5, image: instoo, head: "City Apartment", price: 3000000, location: "Bangalore", beds: 2, baths: 2, sqft: 1100, type: "Apartment" },
  { id: 6, image: orange, head: "Cozy Home", price: 2500000, location: "Trivandrum", beds: 1, baths: 1, sqft: 900, type: "House" },
  { id: 7, image: whatsapp, head: "Luxury Apartment", price: 4500000, location: "Kochi", beds: 3, baths: 2, sqft: 1600, type: "Apartment" },
  { id: 8, image: instoo, head: "Modern Villa", price: 4000000, location: "Bangalore", beds: 4, baths: 3, sqft: 2100, type: "House" },
  { id: 9, image: orange, head: "Budget Apartment", price: 2200000, location: "Trivandrum", beds: 1, baths: 1, sqft: 800, type: "Apartment" },
];

function Sellfaster() {
  const [price, setPrice] = useState(6000000);
  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");
  const [type, setType] = useState("");
  const [sqft, setSqft] = useState(3000);
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [showSignIn, setShowSignIn] = useState(false);

  const filtered = propertiesData.filter(
    (p) =>
      p.price <= price &&
      p.sqft <= sqft &&
      (!beds || p.beds >= Number(beds)) &&
      (!baths || p.baths >= Number(baths)) &&
      (!type || p.type === type) &&
      (!city || p.location.toLowerCase().includes(city.toLowerCase())) &&
      (!area || p.location.toLowerCase().includes(area.toLowerCase()))
  );

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="mb-4 fm-bold text-center">
        <div className={sell.heading}>
          <h2>Find Your Perfect Property – Explore and Purchase Nearby</h2>
        </div>
        <br />
        <p>Your Next Home Awaits – Homes, Apartments, and Affordable Properties Available</p>
      </div>

      <div className="row">
        {/* Sidebar / Filters */}
        <div className="col-lg-3 mb-4">
          <div className={sell.filterBox}>
            <h5>Filter Properties</h5>

            <label>City</label>
            <select onChange={(e) => setCity(e.target.value)}>
              <option value="">All Cities</option>
              <option value="Kochi">Kochi</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Trivandrum">Trivandrum</option>
            </select>

            <label>Area / Place</label>
            <input
              type="text"
              placeholder="Eg: MG Road, Kakkanad"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />

            <label>Property Type</label>
            <select onChange={(e) => setType(e.target.value)}>
              <option value="">All</option>
              <option value="Apartment">Apartment</option>
              <option value="House">House</option>
            </select>

            <label>Bedrooms</label>
            <select onChange={(e) => setBeds(e.target.value)}>
              <option value="">Any</option>
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedrooms</option>
              <option value="3">3 Bedrooms</option>
              <option value="4">4+ Bedrooms</option>
            </select>

            <label>Bathrooms</label>
            <select onChange={(e) => setBaths(e.target.value)}>
              <option value="">Any</option>
              <option value="1">1 Bathroom</option>
              <option value="2">2 Bathrooms</option>
              <option value="3">3 Bathrooms</option>
              <option value="4">4+ Bathrooms</option>
            </select>

            <label>
              Max Price: <strong>₹ {price.toLocaleString()}</strong>
            </label>
            <input
              type="range"
              min="1000000"
              max="6000000"
              step="50000"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />

            <label>
              Max Sqft: <strong>{sqft} sq.ft</strong>
            </label>
            <input
              type="range"
              min="500"
              max="3000"
              step="50"
              value={sqft}
              onChange={(e) => setSqft(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Property Cards */}
        <div className="col-lg-9">
          <div className="row g-4">
            {filtered.length === 0 && (
              <div className="col-12 text-center text-muted">
                No properties found matching your filters.
              </div>
            )}
            {filtered.map((item) => (
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12" key={item.id}>
                <div className={sell.card}>
                  <div className={sell.cardImage}>
                    <img src={item.image} alt={item.head} />
                  </div>
                  <div className={sell.cardContent}>
                    <h6>{item.head}</h6>
                    <p style={{ color: "#628141", fontWeight: "bold" }}>₹ {item.price.toLocaleString()}</p>
                    <p className="text-muted small">{item.location}</p>
                    <div className="d-flex justify-content-between small mb-2">
                      <span>{item.beds} Bed</span>
                      <span>{item.baths} Bath</span>
                      <span>{item.sqft} sqft</span>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                      <button className={sell.buyBtn} onClick={() => setShowSignIn(true)}>
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sign In Modal */}
      {showSignIn && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Sign In / Sign Up</h5>
                <button type="button" className="btn-close" onClick={() => setShowSignIn(false)}></button>
              </div>
              <div className="modal-body">
                <p>Please sign in or create an account to buy this property.</p>
                <button className="btn btn-primary me-2">Sign In</button>
                <button className="btn btn-secondary">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



export default Sellfaster;











