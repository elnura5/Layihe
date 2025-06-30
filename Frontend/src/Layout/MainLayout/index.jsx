import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import "./style.css"
function MainLayout() {
  return (
   <div className="page-container">
  <div className="content-wrap">
  <Navbar/>
  <Outlet/>
  </div>
  <Footer />
</div>

  )
}

export default MainLayout