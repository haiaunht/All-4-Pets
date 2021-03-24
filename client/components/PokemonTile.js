import React from "react"
import { Link } from "react-router-dom"

const PokemonTile = props => {
  let statusText
  const convert = bool => {
    if (bool) {
      statusText = "Yes"
    } else {
      statusText = "No"
    }
    return statusText
  }

  return (
    <div className="pet-box">
      <div className="pet-img">
        <img src={props.imgUrl} alt={props.name} />
      </div>
      <div className="pet-details">
        <div>
          <h2>
            <Link to={`/pets/pokemon/${props.id}`}>{props.name}</Link>
          </h2>
          <p>
            Age: {props.age}
            <br />
            Vaccination: {convert(props.vaccinationStatus)}
          </p>
        </div>
      </div>
      <div className="pet-more-details">
        <Link to={`/pets/pokemon/${props.id}`}>Read more</Link>
      </div>
    </div>
  )
}
export default PokemonTile
