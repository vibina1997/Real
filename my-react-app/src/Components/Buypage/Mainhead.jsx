import React from 'react'
import buyimage from '../../assets/Imges/buybanner.jpg'
import bigimage from '../../assets/Imges/bgimage.jpg'
import buy from '../../assets/Mainhead.module.css'
import sell from '../../assets/Imges/subimoo.jpg'



 



   


const Mainhead = () => {
  return (
    <section className={`${buy.rSection} py-5`}>

  <div className="container">
    <div className="row justify-content-center">

      <div className="col-md-10 text-center">
        <h1 className={buy.thead}>
          <h1 className="display-5 fw-bold mb-3" style={{ color: '#ffffffff' }}>
      Sell your property the smart way with <span style={{ color: '#E67E22' }}>Homeretro</span>
    </h1>
        </h1>

        <div className={`${buy.sBox} `}>
          <div className="row g-3">

            <div className="col-md-3 col-6">
              <select className={`form-select ${buy.slect}`}>
                <option value="">Select Category</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="land">Land</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="col-md-3 col-6">
              <select className={`form-select ${buy.slect}`}>
                <option value="">Select Type</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="plot">Plot</option>
              </select>
            </div>

            <div className="col-md-3 col-6">
              <select className={`form-select ${buy.slect}`}>
                <option value="">Select Location</option>
                <option value="wayanad">Wayanad</option>
                <option value="kochi">Kochi</option>
                <option value="palakkad">Palakkad</option>
                <option value="kannur">Kannur</option>
              </select>
            </div>

           <div className="col-md-3 col-6">
  <button className={`w-100 ${buy.archBtn}`}>
    <i className="bi bi-search"></i> Search
  </button>
</div>

          </div>
        </div>
      </div>

    </div>
  </div>
</section>

  );
};

export default Mainhead;
