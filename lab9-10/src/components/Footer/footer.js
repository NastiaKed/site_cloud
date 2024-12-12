import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 CroKeddy.</p>
      <div className="social-icons">
        <a href="#"><img src="/assets/facebook.png" alt="Facebook" /></a>
        <a href="https://www.instagram.com/cro.keddy?igsh=MWtmMGR5bTRydmN2OQ==">
          <img src="/assets/instagram.png" alt="Instagram" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
