import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'


// Use a layout that can wrap pages with a header and a footer
// Can use more than one layout on a website
// Outlet = whatever child element, or page, as defined in App.jsx, in createBrowserRouter
const MainLayout = () => {
  return (
    <>
        <NavBar/>
        <Outlet/>
    </>
  )
}

export default MainLayout