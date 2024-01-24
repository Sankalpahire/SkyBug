import React from 'react'
import Layout from '../layout/layout'
import aboutImage from '../../img/about.jpg' // Import your image
const About = () => {
  return (
    
       <Layout>
       <div className="container-fluid about-container">
      <div className="about-content">
        <h1>About Us</h1>
        <div className="row about-info">
          <div className="col-md-6 about-image">
            <img
              src={aboutImage}  // Replace with your image path
              alt="About Us"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 about-info">
            <p>
              Welcome to our company! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et metus nec libero volutpat tristique.
            </p>
            <p>
              Our mission is to provide high-quality products/services to our customers. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p>
              Contact us for more information about our company. We look forward to serving you!
            </p>
          </div>
        </div>
      </div>
    </div>
       </Layout> 
    
  )
}

export default About