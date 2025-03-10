import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Brand Section */}
        <div className="footer-column">
          <h3 className="footer-heading">raghu.app</h3>
          <p className="footer-text">Creating amazing experiences for our users.</p>
        </div>

        {/* Links Section - Can be converted to separate component later */}
        <div className="footer-column">
          <h4 className="footer-subheading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#" className="footer-link">Home</a></li>
            <li><a href="#" className="footer-link">Dashboard</a></li>
            <li><a href="#" className="footer-link">About</a></li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="footer-column">
          <h4 className="footer-subheading">Legal</h4>
          <ul className="footer-links">
            <li><a href="#" className="footer-link">Privacy Policy</a></li>
            <li><a href="#" className="footer-link">Terms of Service</a></li>
            <li><a href="#" className="footer-link">Cookie Policy</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-column">
          <h4 className="footer-subheading">Connect With Us</h4>
          <div className="social-links">
            <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">&copy; {new Date().getFullYear()} raghu.app. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;