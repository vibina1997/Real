

import { useState } from "react";
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
  { id: 1, image: proprt, head: "Luxury Family Home", price: "450000", location: "245/12 MG Road Kochi Ernakulam Kerala 682016", beds: 3, baths: 2, sqft: 1500 },
  { id: 2, image: cartoo, head: "Luxury Family Home", price: "450000", location: "245/12 MG Road Kochi Ernakulam Kerala 682016", beds: 3, baths: 2, sqft: 1500 },
  { id: 3, image: imooo, head: "Luxury Family Home", price: "450000", location: "245/12 MG Road Kochi Ernakulam Kerala 682016", beds: 3, baths: 2, sqft: 1500 },
  { id: 4, image: bridde, head: "Luxury Family Home", price: "450000", location: "245/12 MG Road Kochi Ernakulam Kerala 682016", beds: 3, baths: 2, sqft: 1500 },
  { id: 5, image: light, head: "Luxury Family Home", price: "450000", location: "245/12 MG Road Kochi Ernakulam Kerala 682016", beds: 3, baths: 2, sqft: 1500 },
  { id: 6, image: soom, head: "Luxury Family Home", price: "450000", location: "245/12 MG Road Kochi Ernakulam Kerala 682016", beds: 3, baths: 2, sqft: 1500 },
  { id: 7, image: greenvilla, head: "Luxury Family Home", price: "450000", location: "245/12 MG Road Kochi Ernakulam Kerala 682016", beds: 3, baths: 2, sqft: 1500 },
  { id: 8, image: retroo, head: "Luxury Family Home", price: "450000", location: "245/12 MG Road Kochi Ernakulam Kerala 682016", beds: 3, baths: 2, sqft: 1500 },
  { id: 9, image: calture, head: "Luxury Family Home", price: "450000", location: "245/12 MG Road Kochi Ernakulam Kerala 682016", beds: 3, baths: 2, sqft: 1500 },
];

const initialRentProperties = secondcard.map((item) => ({
  id: item.id,
  title: item.head,
  rent: Number(item.price),
  deposit: Number(item.price) * 2,
  maintenance: 0,
  location: item.location,
  beds: item.beds,
  baths: item.baths,
  sqft: item.sqft,
  furnishing: "Semi-Furnished",
  availableFrom: "Immediate",
  leaseDuration: "11 Months",
  parking: "Yes",
  description: "Well maintained rental property in prime location.",
  image: item.image,
  ownerName: "Property Owner",
  email: "owner@property.com",
  phone: "9999999999",
}));

const Secondcom = () => {
  const navigate = useNavigate();
  const [properties, setProperties] = useState(initialRentProperties);
  const [showForm, setShowForm] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const [form, setForm] = useState({
    title: "",
    propertyType: "",
    rent: "",
    deposit: "",
    maintenance: "",
    location: "",
    beds: "",
    baths: "",
    sqft: "",
    furnishing: "",
    availableFrom: "",
    leaseDuration: "",
    parking: "No",
    description: "",
    image: null,
    ownerName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProperty = {
      id: Date.now(),
      ...form,
      rent: Number(form.rent),
      deposit: Number(form.deposit),
      image: form.image ? URL.createObjectURL(form.image) : proprt,
    };
    setProperties([newProperty, ...properties]);
    setShowForm(false);
    setForm({
      title: "",
      propertyType: "",
      rent: "",
      deposit: "",
      maintenance: "",
      location: "",
      beds: "",
      baths: "",
      sqft: "",
      furnishing: "",
      availableFrom: "",
      leaseDuration: "",
      parking: "No",
      description: "",
      image: null,
      ownerName: "",
      email: "",
      phone: "",
    });
  };

  return (
    <section className="py-5">
      <div className="container">

        <h2 className="fw-bold mb-2 text-center">Rent Out Your Property</h2>
        <p className="mb-4 text-center">List your property for rent and connect with verified tenants.</p>

        {/* Centered Button */}
        <div className="d-flex justify-content-center mb-4">
          <button className="btn text-white px-4 py-2" style={{ background: "#628141", borderRadius: "10px" }} onClick={() => setShowForm(!showForm)}>
            {showForm ? "Close Form" : "+ Add Rental Property"}
          </button>
        </div>

        {/* Add Rental Form */}
        {showForm && (
          <div className="p-4 mb-5 rounded shadow" style={{ background: "#f8f9f4" }}>
            <h4 className="mb-3 text-center" style={{ color: "#628141" }}>Add Rental Property Details</h4>
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6"><input className="form-control" name="title" placeholder="Property Title" required onChange={handleChange} /></div>
                <div className="col-md-6">
                  <select className="form-control" name="propertyType" onChange={handleChange}>
                    <option value="">Property Type</option>
                    <option>Apartment</option>
                    <option>House</option>
                    <option>Villa</option>
                    <option>Office</option>
                  </select>
                </div>
                <div className="col-md-4"><input className="form-control" name="rent" placeholder="Monthly Rent ₹" required onChange={handleChange} /></div>
                <div className="col-md-4"><input className="form-control" name="deposit" placeholder="Security Deposit ₹" onChange={handleChange} /></div>
                <div className="col-md-4"><input className="form-control" name="maintenance" placeholder="Maintenance Charges ₹" onChange={handleChange} /></div>
                <div className="col-md-12"><input className="form-control" name="location" placeholder="Full Address" onChange={handleChange} /></div>
                <div className="col-md-4"><input className="form-control" name="beds" placeholder="Bedrooms" onChange={handleChange} /></div>
                <div className="col-md-4"><input className="form-control" name="baths" placeholder="Bathrooms" onChange={handleChange} /></div>
                <div className="col-md-4"><input className="form-control" name="sqft" placeholder="Sqft" onChange={handleChange} /></div>
                <div className="col-md-6">
                  <select className="form-control" name="furnishing" onChange={handleChange}>
                    <option value="">Furnishing</option>
                    <option>Unfurnished</option>
                    <option>Semi-Furnished</option>
                    <option>Fully Furnished</option>
                  </select>
                </div>
                <div className="col-md-6"><input type="date" className="form-control" name="availableFrom" onChange={handleChange} /></div>
                <div className="col-md-6">
                  <select className="form-control" name="leaseDuration" onChange={handleChange}>
                    <option value="">Lease Duration</option>
                    <option>6 Months</option>
                    <option>11 Months</option>
                    <option>1 Year</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <select className="form-control" name="parking" onChange={handleChange}>
                    <option>No</option>
                    <option>Yes</option>
                  </select>
                </div>
                <div className="col-md-12"><textarea className="form-control" rows="3" name="description" placeholder="Property Description" onChange={handleChange}></textarea></div>
                <div className="col-md-12"><input type="file" className="form-control" name="image" onChange={handleChange} /></div>

                <h6 className="mt-4">Owner Details</h6>
                <div className="col-md-4"><input className="form-control" name="ownerName" placeholder="Owner Name" onChange={handleChange} /></div>
                <div className="col-md-4"><input className="form-control" name="email" placeholder="Email" onChange={handleChange} /></div>
                <div className="col-md-4"><input className="form-control" name="phone" placeholder="Phone" onChange={handleChange} /></div>
                <div className="col-12"><button className="btn w-100 text-white mt-3" style={{ background: "#628141" }}>Submit Rental Property</button></div>
              </div>
            </form>
          </div>
        )}

        {/* Rental Property Cards */}
        <div className="row g-4">
          {properties.map((item) => (
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6" key={item.id}>
              <div className="card h-100 shadow-sm" style={{ borderRadius: "15px" }}>
                <div style={{ height: "200px", overflow: "hidden", position: "relative", borderRadius: "10px" }}>
                  <img src={item.image} alt={item.title} className="w-100 h-100" style={{ objectFit: "cover", borderRadius: "" }} />
                  <button className="btn btn-sm text-white" style={{ position: "absolute", bottom: 10, right: 10, background: "#628141", borderRadius: "10px" }} onClick={() => setSelectedProperty(item)}>Read More</button>
                </div>
                <div className="p-3">
                  <h6 className="fw-bold">{item.title}</h6>
                  <p className="fw-bold" style={{ color: "#628141" }}>₹ {item.rent} / month</p>
                  <p className="text-muted small">{item.location}</p>
                  <div className="d-flex justify-content-between small">
                    <span>{item.beds} Bed</span>
                    <span>{item.baths} Bath</span>
                    <span>{item.sqft} sqft</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Read More Modal */}
        {selectedProperty && (
          <div className="modal show d-block" onClick={() => setSelectedProperty(null)}>
            <div className="modal-dialog modal-lg" onClick={(e) => e.stopPropagation()}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5>{selectedProperty.title}</h5>
                  <button className="btn-close" onClick={() => setSelectedProperty(null)} />
                </div>
                <div className="modal-body">
                  <img src={selectedProperty.image} className="img-fluid mb-3 rounded" />
                  <p><b>Rent:</b> ₹ {selectedProperty.rent} / month</p>
                  <p><b>Deposit:</b> ₹ {selectedProperty.deposit}</p>
                  <p><b>Furnishing:</b> {selectedProperty.furnishing}</p>
                  <p><b>Available From:</b> {selectedProperty.availableFrom}</p>
                  <p><b>Owner:</b> {selectedProperty.ownerName}</p>
                  <p><b>Email:</b> {selectedProperty.email}</p>
                  <p><b>Phone:</b> {selectedProperty.phone}</p>
                  <p>{selectedProperty.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};





export default Secondcom;

 
