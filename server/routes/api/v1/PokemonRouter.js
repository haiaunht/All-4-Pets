import express from "express"
import Pokemon from "../../../models/Pokemon.js"

const pokemonRouter = new express.Router()

pokemonRouter.get("/", async (req, res) => {    
  try {
    const pokemon = await Pokemon.findAll()
    console.log(pokemon)
    res.status(200).json({ pokemon: pokemon })
  } catch (error) {
    console.log(error)
    res.status(500).json({ errors: error })
  }
})

pokemonRouter.get("/:id", async (req, res) => {
  try {    
    const pokemoncute = await Pokemon.findById(req.params.id)
    res.status(200).json({pokemoncute})
  } catch (error) {
    console.log(error)
    res.status(500).json({ errors: error })
  }
})
export default pokemonRouter