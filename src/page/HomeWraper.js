import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import NavTop from '../components/NavTop/NavTop'

function HomeWraper() {
  return (
    <div>
        <NavTop/>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default HomeWraper