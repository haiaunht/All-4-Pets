import express from "express"
import Puppy from "../../../models/Puppy.js"

const puppiesRouter = new express.Router()

puppiesRouter.get("/", async (req, res) => {    
  try {
    const puppies = await Puppy.findAll()
    res.status(200).json({ puppies: puppies })
  } catch (error) {
    console.log(error)
    res.status(500).json({ errors: error })
  }
})

puppiesRouter.get("/:id", async (req, res) => {
  try {    
    const puppiescute = await Puppy.findById(req.params.id)
    res.status(200).json({puppiescute})
  } catch (error) {
    console.log(error)
    res.status(500).json({ errors: error })
  }
})

export default puppiesRouter