
    import React from 'react'
    import renti from '../../assets/Imges/rentbanner.jpg'
   import bannerrent from '../../assets/Imges/baneerrent.jpg'
   import rent from '../../assets/./Pagethreecss/Rental.module.css'
   import rentoo from '../../assets/Imges/subimoo.jpg'
   import { useNavigate } from "react-router-dom";




const Rentals = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/singlepage");
  };

  return (
    <section
      className={rent.bgFull}
      style={{ backgroundImage: `url(${rentoo})` }}
    >
      <div className={`container ${rent.heroContent} py-5`}>
        <div className="row justify-content-center text-center">
          <div className="col-md-10">

            <h1 className={rent.htitle}>
              Find Rentals That Match Your Lifestyle
            </h1>

            <div className={`${rent.archBox} mt-4`}>
              <div className="row g-3 align-items-center">

                {/* CATEGORY */}
                <div className="col-md-3">
                  <div className={rent.inputWrap}>
                    <label className={rent.floatLabel}>Category</label>
                    <select className={rent.glassInput} defaultValue="">
                      <option value="" disabled hidden></option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="land">Land</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* TYPE */}
                <div className="col-md-3">
                  <div className={rent.inputWrap}>
                    <label className={rent.floatLabel}>Type</label>
                    <select className={rent.glassInput} defaultValue="">
                      <option value="" disabled hidden></option>
                      <option value="house">House</option>
                      <option value="apartment">Apartment</option>
                      <option value="villa">Villa</option>
                      <option value="plot">Plot</option>
                    </select>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="col-md-3">
                  <div className={rent.inputWrap}>
                    <label className={rent.floatLabel}>Location</label>
                    <select className={rent.glassInput} defaultValue="">
                      <option value="" disabled hidden></option>
                      <option value="wayanad">Wayanad</option>
                      <option value="kochi">Kochi</option>
                      <option value="palakkad">Palakkad</option>
                      <option value="kannur">Kannur</option>
                    </select>
                  </div>
                </div>

                {/* SEARCH */}
                <div className="col-md-3">
                  <button
                    className={rent.btsearchBtn}
                    onClick={handleSearch}
                  >
                    <i className="bi bi-search me-2"></i>
                    Search
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

export default Rentals;


