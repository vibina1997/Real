

import React, { useState } from "react";
import city from '../../assets/CitiesRow.module.css'

import cityon from '../../assets/Imges/cityone.jpg'
import citytw from '../../assets/Imges/citytwo.jpg'
import citytr from '../../assets/Imges/citythree.jpg'
import cityf from '../../assets/Imges/cityfore.jpg'
import { div } from "framer-motion/client";
const cards = [
  { id: 1, 
    img: cityon,
     title: "Kerala-wayanad",
      price: "$1,500/mo" },
  { id: 2,
     img: citytw,
      title: "Kerala-kkochi", 
      price: "$1,200/mo" },
  { id: 3, 
    img: citytr,
     title: "Kerala-palakkad",
      price: "$1,300/mo" },
  { id: 4,
     img: cityf,
      title: "Kearala-kochi",
       price: "$1,800/mo" },
  
];

const cardbox = [
  { id: 1, img: cityon, title: "Kerala - Wayanad", price: "$1,500/mo" },
  { id: 2, img: citytw, title: "Kerala - Kochi", price: "$1,200/mo" },
  { id: 3, img: citytr, title: "Kerala - Palakkad", price: "$1,300/mo" },
  { id: 4, img: cityf, title: "Kerala - Kollam", price: "$1,800/mo" },
];

const CitiesRow = () => {
  const [active, setActive] = useState(1);

  // FIXED: changed cards.length → cardbox.length
  const next = () => setActive((prev) => (prev + 1) % cardbox.length);
  const prev = () => setActive((prev) => (prev - 1 + cardbox.length) % cardbox.length);

  return (
    <section className="py-5">
      <div className="container">

        <div className={city.panel}>

          {/* Heading */}
          <h5 className={`${city.subTitle} mb-2`}>Featured</h5>
          <h2 className={`${city.title} mb-3`}>Find Properties in These Cities</h2>
          <p className={`${city.desc} mb-4`}>
            Check out some of the most in-demand spaces
          </p>

          {/* Carousel */}
          <div className={city.carousel}>
            {cardbox.map((card, index) => {
              let position = index - active;

              if (position < 0) position += cardbox.length;
              if (position > 2) position -= cardbox.length;

              return (
                <div
                  key={card.id}
                  className={`${city.card} ${city["pos" + position]}`}
                >
                  <img src={card.img} alt={card.title} className={city.cardImg} />

                  <div className={city.cardInfo}>
                    <h4 className={city.cardTitle}>{card.title}</h4>
                    <p className={city.cardPrice}>{card.price}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots */}
          <div className="mt-4 text-center">
            <span onClick={prev} className={city.dot}></span>
            <span onClick={next} className={city.dot}></span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CitiesRow;





 


