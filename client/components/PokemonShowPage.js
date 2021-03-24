import React, { useState, useEffect} from "react"

const PokemonShowPage = (props) => {
  const [pokemon, setPokemon] = useState({})

  const getPokemon = async () => {
    try {
      const pokemonId = props.match.params.id
      const response = await fetch(`/api/v1/pets/pokemon/${pokemonId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const responseBody = await response.json()
      setPokemon(responseBody.pokemoncute)
    } catch(err) {
      console.error(`Error in Fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    getPokemon()
  },[])

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
    <div className="showPokemon">
      <div>
        <h3>{pokemon.name}</h3>
      </div>
      <div className="member-img">
        <img key={pokemon.id} src={pokemon.imgUrl} alt={pokemon.name} height="600" weight="400" />
      </div>
      <div className="member-details">
        <ul>
          <li><strong>Age: </strong>{pokemon.age}</li>
          <li><strong>Vaccination's status: </strong>{convert(pokemon.vaccinationStatus)}</li>
          <li><strong>{pokemon.name}'s story:</strong> {pokemon.adoptionStory}</li>
          <li><strong>Adoption status:</strong> {convert(pokemon.adoptionStatus)}</li>
        </ul>
      </div>
    </div>
  )
}

export default PokemonShowPage