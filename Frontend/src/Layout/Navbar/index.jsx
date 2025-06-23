import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">CizgiTV</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Ana Səhifə</Link></li>
        <li><Link to="/allcartoons">Bütün Cizgi Filmləri</Link></li>
        <li><Link to="/about">Haqqımızda</Link></li>
        <li><Link to="/adminpanel">Admin Panel</Link></li>
        <li><Link to="/user">İstifadəçi Paneli</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
