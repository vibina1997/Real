import React from 'react'
import choose from '../../assets/choose.module.css'
import agency from '../../assets/Imges/agency.jpg'
import { div } from 'framer-motion/client'


const Choose = () => {
  return (

    <div className={choose.section}>
      <div className={choose.sectionLeft}>
        <h1>
          Choose the Perfect Agency for Your <br />
          Property Needs
        </h1>
        <p>
          Find trusted real estate experts to help you discover, buy, or sell
          your dream property with confidence.
        </p>
      </div>
    </div>
  );
};

export default Choose;

