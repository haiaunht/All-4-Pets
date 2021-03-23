import React from "react"
import { Link } from "react-router-dom"

const PokemonTile = props => {
  console.log(props.pokemon)
  const { name, url, age, vaccination, story, status } = props.pokemon

  let statusText
  const convert = (bool) => {
    if (bool) {
      statusText = 'Availabe'
    } else {
      statusText = 'Not available'
    }
    return statusText
  }
  return (
    <div>
      <Link to={`/pets/pokemon/${props.id}`}>
        <h3>{name}</h3>
        <image src={url} alt={name}/>
        <h4>Age: {age}</h4>
        <h4>Vaccination's status: {convert(vaccination)}</h4>
        <h4>{name}'s story: {story}</h4>
        <h4>Adoption status: {convert(status)}</h4>
      </Link>
      <hr />
    </div>
  )
}

export default PokemonTile
