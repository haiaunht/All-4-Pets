import express from "express"

const router = new express.Router()

const clientRoutes = [
  "/pets",
  "/pets/puppies",
  "/pets/puppies/:id",
  "/pets/pokemon",
  "/pets/pokemon/:id",
  "/adoptions/new",
  "/about"
]
router.get(clientRoutes, (req, res) => {
  res.render("home")
})

export default router
