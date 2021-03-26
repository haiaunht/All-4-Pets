import React, { useState, useEffect } from "react"
import PokemonTile from "./PokemonTile"

const PokemonIndexPage = props => {
  const [pokemons, setPokemons] = useState([])
  const fetchPokemon = async () => {
    try {
      const response = await fetch("/api/v1/pets/pokemon")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const body = await response.json()
      setPokemons(body.pokemon)
    } catch (err) {
      console.log(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    fetchPokemon()
  }, [])

  const allPokemon = pokemons.map(pokemon => {
    return (
      <PokemonTile
        key={pokemon.id}
        id={pokemon.id}
        name={pokemon.name}
        imgUrl={pokemon.imgUrl}
        age={pokemon.age}
        vaccinationStatus={pokemon.vaccinationStatus}
        adoptionStatus={pokemon.adoptionStatus}
        adoptionStory={pokemon.adoptionStory}
      />
    )
  })

  return (
    <div className="container">
      <div className="content">
        <div className="max-width-800">
          <h3>Your best friend</h3>
          <p>
            'Til the end I will be with you <br />
            We will go where our dreams come true <br />
            All the time that we have been through <br />
            You will always be my best friend
          </p>
        </div>
        <div className="pet">{allPokemon}</div>
      </div>
    </div>
  )
}

export default PokemonIndexPage
