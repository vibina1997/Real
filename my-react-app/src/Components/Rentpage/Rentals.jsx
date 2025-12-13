
    import React from 'react'
    import renti from '../../assets/Imges/rentbanner.jpg'
   import bannerrent from '../../assets/Imges/baneerrent.jpg'
   import rent from '../../assets/./Pagethreecss/Rental.module.css'
   




const Rentals = () => {
  return (
    <section
  className={rent.bannerSection}
  style={{ backgroundImage: `url(${bannerrent})` }}
>
  <div className="overlay"></div> {/* optional dark overlay */}
  <div className="container py-5">
    <div className="row justify-content-center text-center">

      {/* Centered Title + Search */}
      <div className="col-md-8">
        <h1 className={rent.title}>
          Find Rentals That Match Your Lifestyle
        </h1>

        <div className={`${rent.searchBox} mt-4`}>
          <div className="row g-2 align-items-center">

            <div className="col-md-3">
              <select className={`form-select ${rent.select}`}>
                <option value="">Select Category</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="land">Land</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="col-md-3">
              <select className={`form-select ${rent.select}`}>
                <option value="">Select Type</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="plot">Plot</option>
              </select>
            </div>

            <div className="col-md-3">
              <select className={`form-select ${rent.select}`}>
                <option value="">Select Location</option>
                <option value="wayanad">Wayanad</option>
                <option value="kochi">Kochi</option>
                <option value="palakkad">Palakkad</option>
                <option value="kannur">Kannur</option>
              </select>
            </div>

            <div className="col-md-3">
              <button className={`btn w-100 ${rent.searchBtn}`}>
                <i className="bi bi-search"></i> Search
              </button>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</section>

  );
};

export default Rentals;

  
  
    
