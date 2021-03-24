import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = props => {
  const [navbar, setNavbar] = useState("navbar")

  const changeNavBarColor = () => {
    window.scrollY >= 90 ? setNavbar("navbar scroll") : setNavbar("navbar")
  }

  window.addEventListener("scroll", changeNavBarColor)

  return (
    <nav className={navbar}>
      <h1 className="brand">A.R.I.S. PROJECT</h1>
      <ul>
        <li>
          <Link to="/pets">Home</Link>
        </li>
        <li>
          <Link to="/pets/puppies">Puppies</Link>
        </li>
        <li>
          <Link to="/pets/pokemon">Pokemon</Link>
        </li>
        <li>
          <Link to="/adoptions/new">Add a Pet</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
