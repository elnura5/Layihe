import React from "react";
import "./style.css";

const Navbar = ({ onScrollToCharacters }) => {
  const handleCharactersClick = (e) => {
    e.preventDefault();
    onScrollToCharacters();
  };

  return (
    <nav className="navbar">
      <div className="logo">🌈 CizgiTV</div>
      <ul className="nav-links">
        <li><a href="/">🏡 Ana Səhifə</a></li>
        <li><a href="/allcartoon">🎞️ Filmlər</a></li>
        <li><a href="#characters" onClick={handleCharactersClick}>🧚‍♀️ Qəhrəmanlar</a></li>
        <li><a href="#">🧩 Əyləncə</a></li>
        <li><a href="#">📬 Əlaqə</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
