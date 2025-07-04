import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <h3 className="footer-title">🌈 CizgiTV</h3>
      <div className="footer-links">
        <a href="/about">{t("about", "Haqqımızda")}</a>
        <a href="#">{t("terms", "Şərtlər")}</a>
        <a href="#">{t("privacy", "Məxfilik")}</a>
      </div>
      <p className="footer-copy">
        © 2025 CizgiTV | {t("developed_by", "Hazırladı")}: Gənc Frontend Developer 💻
      </p>
    </footer>
  );
};

export default Footer;
