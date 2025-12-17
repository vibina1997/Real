import React from "react";
import nav from "../../Components/Navbar.jsx"
import banner from "../../assets/Imges/nature.jpg"

import styles from "../../assets/Hero.module.css";




const Hero = () => {

return(


<section className={`${styles.hero} position-relative`}>

  <img
    className={styles.bannerImage}
    src={banner}   
    alt="banner"
  />

  <div className="container">

   <div className="text-white">
    <div className="row text-center text-md-start pt-5">
      <div className="col-md-8 mx-auto">
       <h1 className={`${styles.herosec} fw-bold`}>
  Explore. Buy. Sell. Rent.
  
  <span className={styles.highlight}>
    All in One Place
  </span>
</h1>


      <p className={`${styles.slideText} mt-2 fs-5 text-white slideText`}>
  <span>Find your dream property with ease —</span>
  <span> trusted listings,</span>
  <span> verified agents,</span>
  <span> and smart search tools.</span>
</p>

      </div>
    </div>
</div>
    {/* SEARCH FORM */}
    <div className={styles.inputese}>
      <div className="p-4 rounded shadow-sm bg-white bg-opacity-25">
        <div className="row g-3">

          <div className="col-12 col-sm-6 col-md-3 position-relative">
            <p className="mb-1 text-white">Keyword</p>
            <input
  type="text"
  className={`form-control ${styles.inputWithIcon}`}
  placeholder="Search location, property..."
/>
<i className={`bi bi-search ${styles.inputIcon}`}></i>

          </div>

          <div className="col-12 col-sm-6 col-md-3">
            <p className="mb-1 text-white">Status</p>
            <select className="form-select">
              <option>Status</option>
              <option>Sold</option>
              <option>Town House</option>
              <option>Available</option>
            </select>
          </div>

          <div className="col-12 col-sm-6 col-md-3">
            <p className="mb-1 text-white">Type</p>
            <select className="form-select">
              <option>Type</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>House</option>
              <option>Plot</option>
            </select>
          </div>

          <div className="col-12 col-sm-6 col-md-3 d-flex gap-2">
           
            <button className={`${styles.serch} flex-fill`}>Search</button>
          </div>

        </div>
      </div>
    </div>

    
 


  </div>
</section>

  );
};

export default Hero;



