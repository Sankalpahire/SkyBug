import React from 'react';
import { FaSquareFacebook ,FaInstagram , FaWhatsapp , FaXTwitter } from "react-icons/fa6";
import Payments from '../../img/paymentoption.png';

const Footer = () => {
  return (
    <footer className="footer bg-light">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4 mt-4 col-lg-3 text-center text-sm-start">
            <div className="about">
              <h6 className="footer-heading text-uppercase text-dark fw-bold">About</h6>
              <p className="mb-1">Ship-shop is the e commerce platform where user introduced to fashion and fast shipping 
              thats why we say abhi buy abhi ship</p>
            </div>
          </div>
          
          <div className="col-sm-6 col-md-4 mt-4 col-lg-3 text-center text-sm-start">
            <div className="information">
              <h6 className="footer-heading text-uppercase text-dark fw-bold">Information</h6>
              <p className="mb-1">we are the platform where user to seller get fast service</p>
              <ul className="list-unstyled footer-link mt-2">
                <li className="mb-1"><a href="#1" className="text-dark text-decoration-none fw-semibold">Events</a></li>
                <li className="mb-1"><a href="#1" className="text-dark text-decoration-none fw-semibold">Our Team</a></li>
                <li className="mb-1"><a href="#1" className="text-dark text-decoration-none fw-semibold">Upcoming Sale</a></li>
                <li className=""><a href="#1" className="text-dark text-decoration-none fw-semibold">New Launches</a></li>
              </ul>
            </div>
          </div>
         
          <div className="col-sm-6 col-md-4 mt-4 col-lg-2 text-center text-sm-start">
            <div className="social">
              <h6 className="footer-heading text-uppercase text-dark fw-bold">Socials</h6>
              <ul className="list-inline my-4">
                <li className="list-inline-item"><a href="#1" className=" btn-sm btn  mb-2"><FaSquareFacebook /></a></li>
                <li className="list-inline-item"><a href="#1" className=" btn-sm btn  mb-2"><FaInstagram /></a></li>
                <li className="list-inline-item"><a href="#1" className="btn-sm btn  mb-2"><FaWhatsapp /></a></li>
                <li className="list-inline-item"><a href="#1" className=" btn-sm btn  mb-2"><FaXTwitter  /></a></li>
              </ul>
            </div>
          </div>
          
          <div className="col-sm-6 col-md-6 mt-4 col-lg-4 text-center text-sm-start">
            <div className="contact">
              <h6 className="footer-heading text-uppercase text-dark fw-bold">Contact Us</h6>
              <address className="mt-4 m-0 text-dark mb-1"><i className="bi bi-pin-map fw-semibold"></i>Abc Street, xyz plaza, 07 block BKC Navi Mumbai </address>
              <a href="tel:+" className="text-dark mb-1 text-decoration-none d-block fw-semibold"><i className="bi bi-telephone"></i> 8850191948</a>
              <a href="mailto:" className="text-dark mb-1 text-decoration-none d-block fw-semibold"><i className="bi bi-envelope"></i> sankalpahire2001@gmail.com</a>
              <a href="#1" className="text-dark text-decoration-none fw-semibold"><i className="bi bi-skype"></i> xyzdemomail</a>
            </div>
          </div>
        </div>
      </div>
      <div className="payment-options">
        <div className="container">
          <h6 className="payment-heading text-uppercase text-dark fw-bold mb-3">We Accept</h6>
          <div className="payment-icons">
            <img src={Payments} alt="payment" className="payment-img" />
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="container">
          <p>&copy; 2023 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
