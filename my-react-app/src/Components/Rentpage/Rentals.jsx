
    import React from 'react'
    import renti from '../../assets/Imges/rentbanner.jpg'
   import bannerrent from '../../assets/Imges/baneerrent.jpg'
   import rent from '../../assets/./Pagethreecss/Rental.module.css'
   import rentoo from '../../assets/Imges/subimoo.jpg'
   import { useNavigate } from "react-router-dom";


;


const Rentals = ({ activeTab, setActiveTab }) => {
  return (
    <section
      className={rent.bgFull}
      style={{ backgroundImage: `url(${rentoo})` }}
    >
      <div className={`container ${rent.heroContent} py-5`}>
        <div className="row justify-content-center text-center">
          <div className="col-md-10">

            <h1 className={rent.htitle}>
              Find Rentals That Match Your Lifestyle
            </h1>

            <p className={rent.subtitle}>
              Apartments • Villas • Houses • Offices • PG
            </p>

            {/* RENT BUTTONS */}
            <div className={rent.rentTabs}>
              <button
                className={`${rent.rentTabButton} ${
                  activeTab === "rentout" ? rent.rentTabButtonActive : ""
                }`}
                onClick={() => setActiveTab("rentout")}
              >
                Rent Out
              </button>

              <button
                className={`${rent.rentTabButton} ${
                  activeTab === "takeonrent" ? rent.rentTabButtonActive : ""
                }`}
                onClick={() => setActiveTab("takeonrent")}
              >
                Take on Rent
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Rentals;



