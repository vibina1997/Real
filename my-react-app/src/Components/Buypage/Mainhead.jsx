import React from 'react'
import buyimage from '../../assets/Imges/buybanner.jpg'
import bigimage from '../../assets/Imges/bgimage.jpg'
import buy from '../../assets/Mainhead.module.css'
import sell from '../../assets/Imges/subimoo.jpg'



 



   





const Mainhead = () => {
  return (
    <section className={buy.bgFul}>
      <div className={buy.heroConten}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 text-center">

              {/* TITLE */}
              <h1 className={buy.htitl}>
                Sell your property the smart way with{" "}
                <span>Homeretro</span>
              </h1>

              {/* SEARCH BOX */}
              <div className={buy.archBo}>
                <div className="row g-3">

                  {/* CATEGORY */}
                  <div className="col-md-3 col-6">
                    <div className={buy.inputWra}>
                      <select required className={buy.glassInpu}>
                        <option value="" hidden></option>
                        <option>Residential</option>
                        <option>Commercial</option>
                        <option>Land</option>
                        <option>Other</option>
                      </select>
                      <label className={buy.floatLabe}>
                        Category
                      </label>
                    </div>
                  </div>

                  {/* TYPE */}
                  <div className="col-md-3 col-6">
                    <div className={buy.inputWra}>
                      <select required className={buy.glassInpu}>
                        <option value="" hidden></option>
                        <option>House</option>
                        <option>Apartment</option>
                        <option>Villa</option>
                        <option>Plot</option>
                      </select>
                      <label className={buy.floatLabe}>
                        Type
                      </label>
                    </div>
                  </div>

                  {/* LOCATION */}
                  <div className="col-md-3 col-6">
                    <div className={buy.inputWra}>
                      <select required className={buy.glassInpu}>
                        <option value="" hidden></option>
                        <option>Wayanad</option>
                        <option>Kochi</option>
                        <option>Palakkad</option>
                        <option>Kannur</option>
                      </select>
                      <label className={buy.floatLabe}>
                        Location
                      </label>
                    </div>
                  </div>

                  {/* SEARCH BUTTON */}
                  <div className="col-md-3 col-6">
                    <button className={buy.btsearchBt}>
                      <i className="bi bi-search me-2"></i>
                      Search
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
 



  );
};

export default Mainhead;
