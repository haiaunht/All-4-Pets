import express from "express"

const clientRouter = new express.Router()

const clientRoutes = [
  "/",
  "/pets",
  "/pets/puppies",
  "/pets/puppies/:id",
  "/pets/pokemon",
  "/pets/pokemon/:id",
  "/adoptions/new",
  "/about",
]
clientRouter.get(clientRoutes, (req, res) => {
  res.render("home")
})

export default clientRouter
