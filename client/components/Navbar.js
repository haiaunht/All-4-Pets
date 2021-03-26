import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = props => {
  const [navbarClass, setNavbarClass] = useState("navbar")
  const [isActive, setIsActive] = useState(false)

  const changeNavBarColor = () => {
    window.scrollY >= 90 ? setNavbarClass("navbar scroll") : setNavbarClass("navbar")
  }

  window.addEventListener("scroll", changeNavBarColor)

  let menuBtnClass = "menu-btn"
  let ulClass = ""

  menuBtnClass = isActive ? "menu-btn active" : "menu-btn"
  ulClass = isActive ? "active" : ""
  return (
    <nav className={navbarClass}>
      <h1 className="brand">A.R.I.S. PROJECT</h1>
      {/* <div className="toggleMenu"></div> */}
      <div className={menuBtnClass} onClick={() => setIsActive(current => !current)}>
        <div className="menu-btn__burger"></div>
      </div>
      <ul className={ulClass}>
        <li>
          <Link to="/pets" onClick={() => setIsActive(current => !current)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/pets/puppies" onClick={() => setIsActive(current => !current)}>
            Puppies
          </Link>
        </li>
        <li>
          <Link to="/pets/pokemon" onClick={() => setIsActive(current => !current)}>
            Pokemon
          </Link>
        </li>
        <li>
          <Link to="/adoptions/new" onClick={() => setIsActive(current => !current)}>
            Add a Pet
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsActive(current => !current)}>
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
