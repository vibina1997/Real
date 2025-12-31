import React from 'react'
import sellpro from '../../assets/buyproperty.module.css'
import bannu from '../../assets/Imges/buybannertwo.jpg'
import buybanner from '../../assets/Imges/byooo.jpg'
import { useNavigate } from "react-router-dom";




const Tophead = () => {
  return (
    <div className=''>
    <section className={sellpro.bgFull}>
      <div className={`container ${sellpro.heroContent}`}>

        <h1 className={sellpro.htitle}>
          Sell the Home That Fits Your Life Perfectly
        </h1>

        <p className={sellpro.subTitle}>
          List your property with confidence and reach genuine sellers faster
        </p>

      </div>
    </section>
    </div>
  );
};



export default Tophead;








