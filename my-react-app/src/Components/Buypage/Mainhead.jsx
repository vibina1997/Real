import React from 'react'
import buyimage from '../../assets/Imges/buybanner.jpg'
import bigimage from '../../assets/Imges/bgimage.jpg'
import buy from '../../assets/Mainhead.module.css'
import sell from '../../assets/Imges/sellbannertwo.jpg'



 



   


const Mainhead = () => {
  return (
    <section className={buy.rSection}>
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT SIDE */}
          <div className="col-md-7">
            <h1 className={buy.thead}>
              Trusted Solutions for Selling Your Property
            </h1>

            <div className={`${buy.sBox} mt-4 p-3`}>
              <div className="row g-2 align-items-center">

                <div className="col-md-3">
                  <select className={`form-select ${buy.slect}`}>
                    <option value="">Select Category</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="land">Land</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="col-md-3">
                  <select className={`form-select ${buy.slect}`}>
                    <option value="">Select Type</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="villa">Villa</option>
                    <option value="plot">Plot</option>
                  </select>
                </div>

                <div className="col-md-3">
                  <select className={`form-select ${buy.slect}`}>
                    <option value="">Select Location</option>
                    <option value="wayanad">Wayanad</option>
                    <option value="kochi">Kochi</option>
                    <option value="palakkad">Palakkad</option>
                    <option value="kannur">Kannur</option>
                  </select>
                </div>

                <div className="col-md-3">
                  <button className={`btn w-100 ${buy.archBtn}`}>
                    <i className="bi bi-search"></i> Search
                  </button>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-md-5 text-center">
            <img src={sell} alt="illustration" className={buy.tImage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mainhead;
