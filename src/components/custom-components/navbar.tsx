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

const Navbar: React.FC = () => {
  const { Logout } = useAuth();

  return (
    <div className="flex justify-end items-center bg-blue-600 text-sky-200 pr-4">
      <NavigationMenu className="">
        <NavigationMenuList>
          <NavigationMenuItem className="flex">
            <NavigationMenuLink asChild>
              <Link to="/">Home</Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link to="/courses">Courses</Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link to="/logout">
              <Button onClick={Logout}>Logout</Button>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

export default Navbar