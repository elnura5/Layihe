import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

function MainLayout({ onScrollToCharacters }) {
  return (
    <div>
         <Navbar onScrollToCharacters={onScrollToCharacters} />
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayout