import React from 'react';
import BannerImage from '../../img/banner.jpeg'; 

const Banner = () => {
  return (
    <section className="banner-section" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-11 col-lg-9 col-xl-7 col-xxl-6 text-center text-white">
            <h1 className="display-3 fw-bold mb-3">Ship Shop: Where Fashion Meets the Horizon of Elegance</h1>
            <p className="lead mb-5">Swift Fashion, Swift Delivery. Navigate the seas of style with Ship Shop - your express e-commerce destination. Abhi Shop, Abhi Ship – because your style should set sail without delay!</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" className="btn btn-light btn-lg px-4 gap-3">Explore Now</button>
              <button type="button" className="btn btn-outline-light btn-lg px-4">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

