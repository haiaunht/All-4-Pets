
import React, { useState , useEffect } from "react"
import PokemonTile from "./PokemonTile"

const PokemonIndexPage = props => {
  const [pokemons, setPokemons] = useState([])

  const fetchPokemon = async () => {
    try {
      const response = await fetch('/api/v1/pokemon')
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }

      const body = await response.json()
      setPokemons(body.pokemon)
    } catch(err) {
      console.log(`Error in fetch: ${err.message}`)
    }
  }

  useEffect( () => {
    fetchPokemon()
  }, [])

  const allPokemon = pokemons.map( pokemon => {
    return (
      <PokemonTile
        key = {pokemon.id}
        id = {pokemon.id}
        pokemon = {pokemon}
      />
    )
  })

  return (
    <div className="row">
      <div className="small-8 small-centered columns">
        <h1 className="text-center">Pokemon - Which will be your favortie!</h1>
        <hr />
        {allPokemon}        
      </div>
    </div>
  )

}

export default PokemonIndexPage
