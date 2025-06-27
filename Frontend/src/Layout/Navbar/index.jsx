import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">🌈 CizgiTV</div>
      <ul className="nav-links">
        <li><a href="/">🏡 Ana Səhifə</a></li>
        <li><a href="allcartoon">🎞️ Filmlər</a></li>
        <li><a href="#">🧚‍♀️ Qəhrəmanlar</a></li>
        <li><a href="#">🧩 Əyləncə</a></li>
        <li><a href="#">📬 Əlaqə</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
