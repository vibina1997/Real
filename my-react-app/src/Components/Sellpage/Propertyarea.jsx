
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import buying from '../../assets/buyinggg.module.css'

import buycardo from '../../assets/Imges/buycardtwo.jpg'
import buycardt from '../../assets/Imges/buycardthee.jpg'
import buycardth from '../../assets/Imges/buycardten.jpg'
import buycardl from '../../assets/Imges/buycardnain.jpg'
import buycardone from '../../assets/Imges/buycardleven.jpg'
import buycardoo from '../../assets/Imges/buycardsix.jpg'
import buyyyy from '../../assets/Imges/buycardfor.jpg'
import buycr from '../../assets/Imges/buycardone.jpg'
import buinggg from '../../assets/Imges/buycardfive.jpg'





const initialProperties = [
  { id: 1, image: buycardo, head: "Luxury Family Home", price: 450000, location: "Kochi", beds: 3, baths: 2, sqft: 9500 },
  { id: 2, image: buycardt, head: "Modern Apartment", price: 350000, location: "Mumbai", beds: 2, baths: 1, sqft: 1000 },
  { id: 3, image: buycardth, head: "Cozy Cottage", price: 250000, location: "Bangalore", beds: 2, baths: 2, sqft: 1100 },
  { id: 4, image: buycardl, head: "Spacious Villa", price: 750000, location: "Chennai", beds: 4, baths: 3, sqft: 2000 },
  { id: 5, image: buycardth, head: "Cozy Cottage", price: 250000, location: "Bangalore", beds: 2, baths: 2, sqft: 1100 },
  { id: 6, image: buycardo, head: "Luxury Family Home", price: 450000, location: "Kochi", beds: 3, baths: 2, sqft: 1500 },
   {id: 7, image: buycardo, head: "Luxury Family Home", price: 450000, location: "Kochi", beds: 3, baths: 2, sqft: 1500 },
{ id:8,image:buycardo, head:"apartment", price :6788000, location:"wayanad", bed:3,bath:1, sqft:6500}
];






const Propertyarea = () => {
  const navigate = useNavigate();
  const [properties, setProperties] = useState(initialProperties);
  const [showForm, setShowForm] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const [form, setForm] = useState({
    title: "", price: "", location: "", beds: "", baths: "", sqft: "",
    image: null, sellerName: "", email: "", phone: ""
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProperty = {
      id: Date.now(),
      head: form.title,
      price: Number(form.price),
      location: form.location,
      beds: Number(form.beds),
      baths: Number(form.baths),
      sqft: Number(form.sqft),
      image: form.image ? URL.createObjectURL(form.image) : buycardo,
      seller: {
        name: form.sellerName,
        email: form.email,
        phone: form.phone,
      },
    };

    setProperties([newProperty, ...properties]);
    setShowForm(false);
  };

  return (
    <section className="py-5">
      <div className="container">

        <h2 className="fw-bold mb-2">Premium Communities for Confident Home Selling</h2>
        <p className="mb-4">Unlock confident home selling with thoughtfully designed premium communities.</p>

        {/* Sticky Add Property Button */}
        <div className={buying.stickyButtonContainer}>
          <button className={buying.addButton} onClick={() => setShowForm(!showForm)}>
            {showForm ? "Close Form" : "+ Add Property"}
          </button>
        </div>

        {/* Add Property Form */}
        {showForm && (
          <div className="p-4 my-4 rounded shadow">
            <form onSubmit={handleSubmit} className="row g-3">
              <div className="col-md-6">
                <input className="form-control" name="title" placeholder="Property Title" onChange={handleChange} required />
              </div>
              <div className="col-md-6">
                <input className="form-control" name="price" placeholder="Price ₹" onChange={handleChange} />
              </div>
              <div className="col-md-12">
                <input className="form-control" name="location" placeholder="Location" onChange={handleChange} />
              </div>
              <div className="col-md-4">
                <input className="form-control" name="beds" placeholder="Beds" onChange={handleChange} />
              </div>
              <div className="col-md-4">
                <input className="form-control" name="baths" placeholder="Baths" onChange={handleChange} />
              </div>
              <div className="col-md-4">
                <input className="form-control" name="sqft" placeholder="Sqft" onChange={handleChange} />
              </div>
              <div className="col-md-12">
                <input type="file" className="form-control" name="image" onChange={handleChange} />
              </div>

              <h6 className="mt-3">Seller Details</h6>
              <div className="col-md-4">
                <input className="form-control" name="sellerName" placeholder="Seller Name" onChange={handleChange} />
              </div>
              <div className="col-md-4">
                <input className="form-control" name="email" placeholder="Email" onChange={handleChange} />
              </div>
              <div className="col-md-4">
                <input className="form-control" name="phone" placeholder="Phone" onChange={handleChange} />
              </div>

              <div className="col-12">
                <button className="btn w-100 text-white" style={{ background: "#628141" }}>
                  Submit Property
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Property Cards */}
        <div className="row g-4">
          {properties.map((item) => (
            <div className="col-xl-3 col-lg-4 col-md-6" key={item.id}>
              <div className={buying.card}>
                <div className={buying.cardImage}>
                  <img src={item.image} alt={item.head} />
                  <button className={buying.readButton} onClick={() => setSelectedProperty(item)}>
                    Read More
                  </button>
                </div>

                <div className={buying.cardContent}>
                  <h5>{item.head}</h5>
                  <h4>₹ {item.price}</h4>
                  <p>{item.location}</p>

                  <div className={buying.features}>
                    <span>{item.beds} Bed</span>
                    <span>{item.baths} Bath</span>
                    <span>{item.sqft} sqft</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProperty && (
          <div className="modal show d-block" onClick={() => setSelectedProperty(null)}>
            <div className="modal-dialog modal-lg" onClick={(e) => e.stopPropagation()}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5>{selectedProperty.head}</h5>
                  <button className="btn-close" onClick={() => setSelectedProperty(null)} />
                </div>
                <div className="modal-body">
                  <img src={selectedProperty.image} className="img-fluid rounded mb-3" />
                  <p><b>Price:</b> ₹ {selectedProperty.price}</p>
                  <p><b>Location:</b> {selectedProperty.location}</p>
                  <p><b>Seller:</b> {selectedProperty.seller?.name}</p>
                  <p><b>Email:</b> {selectedProperty.seller?.email}</p>
                  <p><b>Phone:</b> {selectedProperty.seller?.phone}</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Propertyarea;









