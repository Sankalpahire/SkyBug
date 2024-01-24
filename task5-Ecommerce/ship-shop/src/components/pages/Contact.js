import React from 'react';
import Layout from '../layout/layout';
import contactImage from '../../img/contact.jpg'; // Import your image

const ContactUs = () => {
  return (
    <Layout>
      <div className="contact-container-custom">
      <div className="contact-content-custom container">
        <h1>Contact Us</h1>
        <div className="row">
          <div className="col-md-6">
            <img
              src={contactImage}  // Replace with your image path
              alt="Contact Us"
              className="contact-image-custom img-fluid"
            />
          </div>
          <div className="col-md-6 contact-info-custom">
            <p>
              <strong>Inquiry:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et metus nec libero volutpat tristique.
            </p>
            <p>
              <strong>Contact Number:</strong> +1234567890
            </p>
            <p>
              <strong>Email:</strong> info@example.com
            </p>
            <p>
              <strong>Customer Care Number:</strong> 1800-123-4567
            </p>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  
  );
};

export default ContactUs;
