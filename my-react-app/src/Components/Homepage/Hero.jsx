import React from "react";
import forimage from "../../assets/Imges/forimage.jpg";

import styles from "../../assets/Hero.module.css";

import bannervideo from '../../assets/Imges/bannervideo.mp4'


const Hero = () => {

return(


    <section className={`${styles.hero} position-relative`}>

      {/* 🔥 Background VIDEO */}
      <video
        className={styles.videoBg}
        src={bannervideo}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="container">

        {/* TEXT SECTION */}
        <div className="row text-center text-md-start pt-5">
          <div className="col-md-8 mx-auto">
            <h1 className={`${styles.herosec}  fw-bold`}>
              Explore. Buy. Sell. Rent. All in One Place.
            </h1>

            <p className="text-dark-50 mt-2 fs-5 text-dark">
              Find your dream property with ease — trusted listings, verified agents, and smart search tools.
            </p>
          </div>
        </div>

       <div className={styles.inputese}>
  <div className="p-4 rounded shadow-sm bg-white bg-opacity-25">

    <div className="row g-3">

    
      <div className="col-12 col-sm-6 col-md-3 position-relative">
        <p className="mb-1 text-white">Keyword</p>

        <input
          type="text"
          className={`form-control ${styles.inputWithIcon}`}
          placeholder="Enter Keyword"
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
        <button className={`${styles.fillte} flex-fill`}>Filter</button>
        <button className={`${styles.serch} flex-fill`}>Search</button>
      </div>

    </div>
  </div>
</div>

        {/* POPULAR SEARCH */}
        <div className={`popular-search mt-4 ${styles.popular}`}>
          <div className="d-flex align-items-center gap-2 flex-wrap justify-content-center">
            <h6 className=" mb-3 text-dark">Popular Search:</h6>
            <button className="btn btn-outline-dark">Modern Villa</button>
            <button className="btn btn-outline-dark">Studio Apartment</button>
            <button className="btn btn-outline-dark">Town House</button>
            <button className="btn btn-dark">More</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;



