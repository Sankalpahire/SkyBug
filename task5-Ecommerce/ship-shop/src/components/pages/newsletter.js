import React from 'react'
import NewsletterImage from '../../img/news.jpg'; 
    
    const Newsletter = () => {
      return (
        <section className="newsletter-section" style={{ backgroundImage: `url(${NewsletterImage})` }}>
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2 text-center text-white">
                <h2>Subscribe to Our Newsletter</h2>
                <p>Stay updated with the latest news, trends, and exclusive offers. Join our community today!</p>
                <form>
                  <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="Your Email" aria-label="Your Email" aria-describedby="subscribeBtn" />
                    <button className="btn btn-light" type="button" id="subscribeBtn">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      );
    };

export default Newsletter