import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Pets = () => {
  const [pets, setPets] = useState([{}])
  const [selectedId, setSelectedId] = useState(0)
  const [sectionColor, setSectionColor] = useState("section")

  const getPets = async () => {
    try {
      const response = await fetch("/api/v1/pets")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }

      const petsData = await response.json()

      setPets(petsData.pets)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getPets()
  }, [])

  const handleClick = (id, type) => {
    setSelectedId(id - 1)
    let color = `section ${type}`
    setSectionColor(color)
  }

  const petsLink = pets.map(pet => {
    return (
      <b key={pet.id}>
        <Link to={`/pets/${pet.type}`}>View {pet.type}</Link>
      </b>
    )
  })

  let petType = pets[selectedId].type
  let imgURL = `./images/${petType}.png`

  const petThumbnails = pets.map(pet => {
    let imgURL = `./images/${pet.type}.png`
    return (
      <li key={pet.id}>
        <img src={imgURL} alt={pet.type} onClick={() => handleClick(pet.id, pet.type)} />
      </li>
    )
  })

  return (
    <div className={sectionColor}>
      <div className="content">
        <div className="text-box">
          <h2>More than a pet</h2>
          <p>
            They love you unconditionally and are always excited to see you when you get home. The
            best thing is that you see them as your best friend too, even when their tail knocks off
            everything on the coffee table.
          </p>
          {petsLink}
        </div>
        <div className="image-box">
          <Link to={`/pets/${pets[selectedId].type}`}>
            <img className="pet" src={imgURL} alt={pets[selectedId].type} />
          </Link>
        </div>
      </div>
      <ul className="pet-thumbnail">{petThumbnails}</ul>
      <ul className="social-icons">
        <li>
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Pets
