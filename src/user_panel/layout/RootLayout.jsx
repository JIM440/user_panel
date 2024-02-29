import React from 'react'
import Nav from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
    <Nav />
    <Outlet />
    <Footer />
    </>
  )
}

export default RootLayout
