import express from "express"
import clientRouter from "./clientRouter.js"
import petsRouter from "./api/v1/petsRouter.js"

const rootRouter = new express.Router()

rootRouter.use("/api/v1/pets", petsRouter)

rootRouter.use("/", clientRouter)

export default rootRouter
