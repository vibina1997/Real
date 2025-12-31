import React from 'react'
import sellpara from '../../assets/sellpara.module.css'
import sellimoo from '../../assets/Imges/cartoonsell.jpg'
const Sellpara = () => {
  return (


    <div className={`row align-items-center  py-5`}>
      {/* LEFT IMAGE */}
      <div className={`col-md-6 mb-4 mb-md-0 d-flex justify-content-center  ${sellpara.slideInLeft}`}>
        <img
          src={sellimoo}
          alt="Sell Property"
          className={`img-fluid rounded ${sellpara.image}`}
        />
      </div>

      {/* RIGHT TEXT */}
      <div className={`col-md-5 ${sellpara.fadeInRight}`}>
        <h2 className={sellpara.heading}>
          Buy Your Property Easily with <span className={sellpara.highlight}>XenProperties</span>
        </h2>
        <p className={sellpara.paragraph}>
          Homeretro helps you sell your property quickly and effortlessly. 
          Connect with trusted buyers and get expert guidance at every step. 
          Simplify your property journey with our easy-to-use platform.
        </p>
        <button className={sellpara.btn}>
          Get Started
        </button>
      </div>
    </div>
  );
};





export default Sellpara;
