import express from "express"

import SurrenderedPets from "../../../models/SurrenderedPets.js"

const surrenderedPetsRouter = new express.Router()

surrenderedPetsRouter.get("/", async (req, res) => {
  try{
    const surrenderedPets = await SurrenderedPets.findAll()
    res.status(200).json({ surrenderedPets })
  } catch(error) {
    console.error(error)
  }
})

surrenderedPetsRouter.post("/", async (req, res) => {
  try{
    const newSurrenderedPet = new SurrenderedPets(req.body)
    await newSurrenderedPet.save()
    res.json({newSurrenderedPet})
  } catch(error){
    console.error(error)
  }
})


export default surrenderedPetsRouter