import React from "react";
import "./style.css";
import { useState } from "react";

const Navbar = () => {
 
const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">🌈 CizgiTV</div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="/">🏡 Ana Səhifə</a></li>
        <li><a href="/allcartoon">🎞️ Cizgi Filmlər</a></li>
        <li><a href="/" >🧚‍♀️ Qəhrəmanlar</a></li>
        <li><a href="/quiz">🧩 Tapmaca</a></li>
        <li><a href="/profile">👤 Profil</a></li>
      </ul>
         <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;
