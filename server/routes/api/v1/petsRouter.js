import express from "express"

import Pets from "../../../models/Pets.js"

const petsRouter = new express.Router()

petsRouter.get("/", async (req, res) => {
  try {
    const pets = await Pets.findAll()
    res.status(200).json({ pets: pets })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error })
  }
})

export default petsRouter
