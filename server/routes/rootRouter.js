import express from "express"
import clientRouter from "./clientRouter.js"
import petsRouter from "./api/v1/petsRouter.js"
import pokemonRouter from "./api/v1/PokemonRouter.js"
import puppiesRouter from "./api/v1/puppiesRouter.js"
import surrenderedPetsRouter from "./api/v1/surrenderedPetsRouter.js"
import adoptionsRouter from "./api/v1/adoptionsRouter.js"


const rootRouter = new express.Router()

rootRouter.use("/", clientRouter)

rootRouter.use("/api/v1/pets", petsRouter)

rootRouter.use("/api/v1/pets/pokemon", pokemonRouter)

rootRouter.use("/api/v1/pets/puppies", puppiesRouter)

rootRouter.use("/api/v1/adoptions/new", surrenderedPetsRouter)

rootRouter.use("/api/v1/adoptions", adoptionsRouter)

export default rootRouter
