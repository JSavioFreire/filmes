import { NavLink } from "react-router-dom"

import { Navbar } from "../styled/styledNav"

import Seach from '../components/Seach'

const NavBar = () => {
  return (
    <Navbar>
        <NavLink to='/'>Top Rated Movies</NavLink>
        <NavLink to='/tv'>Top Rated Tv Series</NavLink>
        <Seach/>
    </Navbar>
  )
}

export default NavBar