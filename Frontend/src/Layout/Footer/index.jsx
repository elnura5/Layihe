import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h3 className="footer-title">🌈 CizgiTV</h3>
      <div className="footer-links">
        <a href="/about">Haqqımızda</a>
        <a href="#">Şərtlər</a>
        <a href="#">Məxfilik</a>
      </div>
      <p className="footer-copy">
        © 2025 CizgiTV | Hazırladı: Gənc Frontend Developer 💻
      </p>
    </footer>
  );
};

export default Footer;
