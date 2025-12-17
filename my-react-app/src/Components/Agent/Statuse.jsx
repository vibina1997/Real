import React from 'react'
import mainstatus from '../../assets/Statuss.module.css'
import { useState, useEffect } from "react";





const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = Math.ceil(end / (duration / 16));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

const Statuse = () => {
  const properties = useCountUp(1250);
  const apartments = useCountUp(320);
  const houses = useCountUp(125);
  const villas = useCountUp(120);

  return (
    <div>
      <div className={`${mainstatus.statussection} py-5 `}>

        <div className="text-center">
          <i className="bi bi-building fs-1 mb-2 "></i>
          <h2>{properties}</h2>
          <p>Properties sold</p>
        </div>

        <div className="text-center">
          <i className="bi bi-house-door fs-1 mb-2"></i>
          <h2>{apartments}</h2>
          <p>Apartments sold</p>
        </div>

        <div className="text-center">
          <i className="bi bi-houses fs-1 mb-2"></i>
          <h2>{houses}</h2>
          <p>Houses sold</p>
        </div>

        <div className="text-center">
          <i className="bi bi-building-check fs-1 mb-2"></i>
          <h2>{villas}</h2>
          <p>Villas sold</p>
        </div>

      </div>
    </div>
  );
};

export default Statuse;
