import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './style.css'; // Aşağıda verəcəyim style.css daxil olacaq

function MainLayout() {
  return (
    <div className="layout-container">
      <Navbar />
      <main className="content-wrap">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
