import React from 'react'
import sellpro from '../../assets/buyproperty.module.css'
import bannu from '../../assets/Imges/buybannertwo.jpg'
import buybanner from '../../assets/Imges/byooo.jpg'
import { useNavigate } from "react-router-dom";





const Tophead = () => {
  const navigate = useNavigate();

  return (
    <section className={sellpro.bgFull}>
      <div className={`container ${sellpro.heroContent}`}>

        {/* TITLE */}
        <h1 className={sellpro.htitle}>
          Buy the Home That Fits Your Life Perfectly
        </h1>

        {/* SEARCH BOX */}
        <div className={sellpro.archBox}>
          <div className="row g-3">

            {/* CATEGORY */}
            <div className="col-6 col-md-3">
              <div className={sellpro.inputWrap}>
                <select
                  className={sellpro.glassInput}
                  defaultValue=""
                  required
                >
                  <option value="" disabled hidden></option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Land">Land</option>
                </select>
                <label className={sellpro.floatLabel}>Category</label>
              </div>
            </div>

            {/* LOCATION */}
            <div className="col-6 col-md-3">
              <div className={sellpro.inputWrap}>
                <select
                  className={sellpro.glassInput}
                  defaultValue=""
                  required
                >
                  <option value="" disabled hidden></option>
                  <option value="Wayanad">Wayanad</option>
                  <option value="Kochi">Kochi</option>
                  <option value="Palakkad">Palakkad</option>
                  <option value="Kannur">Kannur</option>
                </select>
                <label className={sellpro.floatLabel}>Location</label>
              </div>
            </div>

            {/* BUDGET */}
            <div className="col-6 col-md-3">
              <div className={sellpro.inputWrap}>
                <select
                  className={sellpro.glassInput}
                  defaultValue=""
                  required
                >
                  <option value="" disabled hidden></option>
                  <option value="10-20">10k - 20k</option>
                  <option value="20-30">20k - 30k</option>
                  <option value="30-40">30k - 40k</option>
                </select>
                <label className={sellpro.floatLabel}>Budget</label>
              </div>
            </div>

            {/* SEARCH BUTTON */}
            <div className="col-12 col-md-3">
              <button
                className={sellpro.btsearchBtn}
                onClick={() => navigate("/singlepage")}
              >
                <i className="bi bi-search me-2"></i>
                Search
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Tophead;








