import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-text1">
        <h3>CUSTOMER SERVICES</h3>
        <p>About Lock The Box</p>
        <p>How It Works?</p>
        <p>Upcoming Events</p>
        <p>FAQs</p>
        <p>Feedback</p>
      </div>
      <div className="footer-text2">
        <h3>CONTACT US</h3>
        <p>WhatsApp Us <span className="footer-text">9050111218</span></p>
        <p>Call Us <span className="footer-text">9050111218</span></p>
      </div>
      <div className="footer-text2">
        <h3>SOCIAL PRESENCE</h3>
        <div className="icon">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook-f" aria-hidden="true"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="https://wa.me/9050111218" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-whatsapp" aria-hidden="true"></i>
          </a>
        </div>
        <img className='log' src="https://e7.pngegg.com/pngimages/142/76/png-clipart-white-and-orange-book-logo-symbol-yellow-orange-logo-ibooks-orange-logo-thumbnail.png" alt="Download App" />
        <h3>DOWNLOAD APP</h3>
      </div>
    </div>
  );
};

export default Footer;
