import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
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
    </div>
  )
}

export default Navbar
