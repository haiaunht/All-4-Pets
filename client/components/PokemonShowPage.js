import React, { useState, useEffect } from "react"
import AdoptionForm from "./AdoptionForm"

const PokemonShowPage = props => {
  const [pokemon, setPokemon] = useState({})

  const [showAdoptionForm, setShowAdoptionForm] = useState(false)

  const toggleForm = () => {
    setShowAdoptionForm(current => !current)
  }

  const getPokemon = async () => {
    try {
      const pokemonId = props.match.params.id
      const response = await fetch(`/api/v1/pets/pokemon/${pokemonId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      setPokemon(responseBody.pokemoncute)
    } catch (err) {
      console.error(`Error in Fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    getPokemon()
  }, [])

  let statusText
  const convert = bool => {
    if (bool) {
      statusText = "Yes"
    } else {
      statusText = "No"
    }
    return statusText
  }

  let petClassName = showAdoptionForm ? "pet-container active" : "pet-container"

  return (
    <>
    <div className={petClassName}>
      <div className="pet-content">
        <div>
          <img key={pokemon.id} src={pokemon.imgUrl} alt={pokemon.name} />
        </div>
        <h2>{pokemon.name}</h2>
        <p>Age: {pokemon.age}</p>
        <p>Vaccination: {pokemon.vaccinationStatus}</p>
        <p>{pokemon.adoptionStory}</p>
        <a onClick={toggleForm}>Adopt Me!</a>
      </div>
    </div>
    <AdoptionForm />
    </>
  )
}

export default PokemonShowPage
