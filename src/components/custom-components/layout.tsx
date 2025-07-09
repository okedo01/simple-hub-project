import React from 'react'
import Navbar from "../custom-components/navbar"
import { Outlet } from 'react-router-dom'

const layout: React.FC = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default layout