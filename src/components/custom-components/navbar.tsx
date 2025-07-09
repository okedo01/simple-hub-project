import React from 'react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu"
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <div>
      <NavigationMenu className="bg-amber-300">
        <NavigationMenuList>
          <NavigationMenuItem className="flex">
              <Link to="/">
                <NavigationMenuLink>Home</NavigationMenuLink>
              </Link>
              <Link to="/courses">
                <NavigationMenuLink>Courses</NavigationMenuLink>
              </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

export default Navbar