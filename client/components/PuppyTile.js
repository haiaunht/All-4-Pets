import React from "react"
import { Link } from "react-router-dom"

const PuppyTile = props => {
  return (     
    <div className="member">      
      <Link to={`/pets/puppies/${props.id}`}>        
        <h2>{props.name}</h2>        
      </Link>
      <hr />
      <div className="member-img">
          <img src={props.imgUrl} alt={props.name} height="400" weight="300" />
      </div>
        <p><strong>Age: </strong>{props.age}</p>
        <p><strong>Vaccination's status: </strong>{props.vaccinationStatus}</p>
        <p><strong>{props.name}'s story:</strong> {props.adoptionStory}</p>
        <p><strong>Adoption status:</strong> {props.adoptionStatus}</p>
      <hr />      
    </div>
  )
}

export default PuppyTile