import React from "react"
import { Link } from "react-router-dom"

const PuppyTile = props => {
  return (
    <div className="pet-box">
      <div className="pet-img">
        <img src={props.imgUrl} alt={props.name} />
      </div>
      <div className="pet-details">
        <div>
          <h2>
            <Link to={`/pets/puppies/${props.id}`}> {props.name}</Link>
          </h2>
          <p>
            Age: {props.age}
            <br />
            Vaccination: {props.vaccinationStatus}
          </p>
        </div>
      </div>
      <div className="pet-more-details">
        <Link to={`/pets/puppies/${props.id}`}> Read more</Link>
      </div>
    </div>
  )
}

export default PuppyTile
