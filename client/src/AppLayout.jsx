import React from 'react'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
        <Navbar/>

            <Outlet/>
            
        <Footer/>
    </>
  )
}

export default AppLayout