import React from 'react'
import ThemeToggle from './ThemeToggle'

const Navbar: React.FC = () => {

  return (
    <div className="flex justify-end sticky top-0 pr-4">
      <ThemeToggle />
    </div>
  )
}

export default Navbar