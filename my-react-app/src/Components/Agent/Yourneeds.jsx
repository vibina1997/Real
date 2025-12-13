import React from 'react'

import said from '../../assets/Imges/saidimage.jpg'
import agent from '../../assets/Imges/homeagent.jpg'

import younee from '../../assets/Youneed.module.css';


const Yourneeds = () => {
  return (
 
    <div className={`py-5 ${younee.section}`}>
      <div className="container">

        <h2 className={younee.title}>
          Your needs, your vision — our expert support.
        </h2>

        <div className="row align-items-center mt-5">

          {/* Left Side Text */}
          <div className="col-md-6">
            <p className={younee.text}>
              We help you find a home that blends comfort and convenience.
              Our team provides expert guidance at every step, making your
              property decisions easier. We offer modern spaces designed to
              fit your lifestyle, ensuring a smooth and stress-free real
              estate experience from start to finish.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="col-md-6 text-center">
            <div className={younee.imageWrap}>
              <img
                src={agent}
                alt="Expert support"
                className={`${younee.image} img-fluid`}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};


 

export default Yourneeds;



  