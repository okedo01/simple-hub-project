import React from 'react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu"
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { useAuth } from '../../context/AuthProvider'
import { Import } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const Navbar: React.FC = () => {
  const { Logout } = useAuth();

  return (
    <div className="flex justify-end sticky top-0 pr-4">
      <ThemeToggle />
    </div>
  )
}

export default Navbar