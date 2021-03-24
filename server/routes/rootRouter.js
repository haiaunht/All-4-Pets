import express from "express"
import clientRouter from "./clientRouter.js"

import pokemonRouter from "./api/v1/PokemonRouter.js"

const rootRouter = new express.Router()

rootRouter.use("/", clientRouter)

rootRouter.use("/api/v1/pets/pokemon", pokemonRouter)

export default rootRouter
