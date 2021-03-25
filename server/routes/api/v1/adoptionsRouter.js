import express from "express"

import AdoptionApplications from "../../../models/AdoptionApplications.js"

const adoptionsRouter = new express.Router()

adoptionsRouter.get("/", async (req, res) => {
  try {
    const adoptionApplications = await AdoptionApplications.findAll()
    res.status(200).json({ adoptionApplications })
  } catch(error) {
    console.error(error)
    res.status(500).json({ error: error })
  }
})

adoptionsRouter.post("/", async (req, res) => {
  try {
    const newApplication = new AdoptionApplications(req.body)
    await newApplication.save()
    res.status(200).json({newApplication})
  } catch(error) {
    console.error(error)
    res.status(500).json({ error: error })
  }
})


export default adoptionsRouter