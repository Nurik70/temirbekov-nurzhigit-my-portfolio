// Footer.js
import React from "react";
import "../Styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 PORTFOLIO</p>
      </div>
        <div className="logo">
          <span>🍕 PORTFOLIO</span>
        </div>
      <div class="footer-col">
        <h4>Подписывайтесь на нас</h4>
        <div class="social-links">
          <a href="#">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
