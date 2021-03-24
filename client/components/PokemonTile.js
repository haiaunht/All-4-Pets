import React from "react"
import { Link } from "react-router-dom"

const PokemonTile = props => {
  console.log(props)
  let statusText
  const convert = (bool) => {
    if (bool) {
      statusText = 'Yes'
    } else {
      statusText = 'No'
    }
    return statusText
  }

  return (     
    <div className="member">      
      <Link to={`/pets/pokemon/${props.id}`}>
        <h2>{props.name}</h2>        
      </Link>
      <div classNam="member-img">
          <img src={props.imgUrl} alt={props.name} height="400" weight="300" />
      </div>
        <p><strong>Age: </strong>{props.age}</p>
        <p><strong>Vaccination's status: </strong>{convert(props.vaccinationStatus)}</p>
        <p><strong>{props.name}'s story:</strong> {props.adoptionStory}</p>
        <p><strong>Adoption status:</strong> {convert(props.adoptionStatus)}</p>
      <hr />      
    </div>
  )
}

export default PokemonTile
