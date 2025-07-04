// src/Components/Navbar.jsx
import React, { useState } from "react";
import "./style.css";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    setLangOpen(false);
  };

  const toggleLangMenu = () => {
    // Mobil üçün kliklə işləsin
    setLangOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="logo">🌈 CizgiTV</div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a href="/">🏡 Ana Səhifə</a></li>
        <li><a href="/allcartoon">🎞️ Cizgi Filmlər</a></li>
        <li><Link style={{ color: "white" }} to="heroes" smooth={true} duration={500}>🧚‍♀️ Qəhrəmanlar</Link></li>
        <li><a href="/quiz">🧩 Tapmaca</a></li>
        <li><a href="/profile">👤 Profil</a></li>

        <li
          className="lang-menu"
          onMouseEnter={() => window.innerWidth > 800 && setLangOpen(true)}
          onMouseLeave={() => window.innerWidth > 800 && setLangOpen(false)}
          onClick={toggleLangMenu}
        >
          <span>🌍 Dil</span>
          {langOpen && (
            <ul className="lang-dropdown">
              <li onClick={() => handleLanguageChange("az")}>🇦🇿 </li>
              <li onClick={() => handleLanguageChange("ru")}>🇷🇺 </li>
              <li onClick={() => handleLanguageChange("en")}>🇺🇸 </li>
            </ul>
          )}
        </li>
      </ul>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;
