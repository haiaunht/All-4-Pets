import React from "react"
import { Link } from "react-router-dom"

const PageNotFound = props => {
  return (
    <div id="page-not-found">
      <div className="sky">
        <h2>
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </h2>
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
        <img className="lugia" src="/images/lugia.png" alt="lugia" />
      </div>
      <div className="ocean">
        <h2>Oops... looks like you got lost.</h2>
        <Link to="/pets">Take Me Home</Link>
      </div>
    </div>    
  )
}

export default PageNotFound