import express from "express"
import clientRouter from "./clientRouter.js"

const rootRouter = new express.Router()

rootRouter.use()

rootRouter.use("/", clientRouter)

rootRouter.use("/api/v1/pokemon", pokemonRouter)

export default rootRouter
