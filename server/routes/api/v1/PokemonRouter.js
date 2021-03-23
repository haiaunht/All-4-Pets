import express from "express"
import Pokemon from "../../../models/Pokemon.js"

const pokemonRouter = new express.Router()

pokemonRouter.get("/", async (req, res) => {
  try {
    const pokemon = await Pokemon.findAll()
    res.status(200).json({ pokemon: pokemon })
  } catch (error) {
    console.log(error)
    res.status(500).json({ errors: error })
  }
})

pokemonRouter.get("/:id", async (req, res) => {
  try {
    const pokemonid = await Pokemon.findById(req.params.id)
    res.status(200).json({ pokemonid: pokemonid })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ errors: error })
  }
})

export default pokemonRouter
