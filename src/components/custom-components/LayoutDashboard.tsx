import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './NavbarComp'

const layout: React.FC = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default layout