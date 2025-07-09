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
            <NavigationMenuLink asChild>
              <Link to="/">Home</Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link to="/courses">Courses</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

export default Navbar