import React from "react";
import family from "../../assets/Imges/apartment.jpg";
import whiteimg from "../../assets/Imges/Realhome.jpg";

import turning from "../../assets/Turning.module.css";


import subo from "../../assets/Imges/subimage.jpg"
import tatoo from "../../assets/Imges/subimoo.jpg"


    





    const Turning = () => {
  return (
    <section className="py-5">   {/* Added Bootstrap spacing */}
      
      <div className={`container ${turning.sectionWrapper}`}>
        <div className="row align-items-center g-4">

          {/* LEFT IMAGES */}
          <div className="col-md-6 d-flex gap-4 justify-content-center">

            <div className={turning.leftColumn}>
              <img src={subo} className={turning.smallImage} alt="family" />

              <div className={turning.statsCard}>
                <p className={turning.iconBox}>
                  <i className="bi bi-house-door-fill"></i>
                </p>
                <h5 className={turning.statsTitle}>Properties</h5>
                <p className={turning.statsValue}>14K+</p>
              </div>
            </div>

            <img src={tatoo} className={turning.mainImage} alt="home" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-md-6">
            <h2 className={`${turning.title} mb-3`}>
              Turning Property Dreams Into Reality
            </h2>

            <p className={`${turning.subText} mb-4`}>
              Explore premium homes and trusted listings that help you
              find the perfect property with ease. Buy, rent, or invest —
              all in one place.
            </p>

            <ul className="list-unstyled mb-4">
              <li className={turning.point}><i className="bi bi-check-circle-fill"></i> Secure & Verified</li>
              <li className={turning.point}><i className="bi bi-check-circle-fill"></i> Wide Property Selection</li>
              <li className={turning.point}><i className="bi bi-check-circle-fill"></i> Buy / Rent Options</li>
              <li className={turning.point}><i className="bi bi-check-circle-fill"></i> Trusted Agents</li>
            </ul>

            <button className={turning.ctaButton}>Learn More</button>
          </div>

        </div>
      </div>

    </section>
  );
};


export default Turning;
