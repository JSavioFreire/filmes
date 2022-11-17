import { NavLink } from "react-router-dom"

import { Navbar } from "../styled/styledNav"

const NavBar = () => {
  return (
    <Navbar>
        <NavLink to='/'>Top Rated Movies</NavLink>
        <NavLink to='/tv'>Top Rated Tv Series</NavLink>
    </Navbar>
  )
}

export default NavBar