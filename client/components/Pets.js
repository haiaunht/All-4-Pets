import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Pets = () => {
  const [pets, setPets] = useState([{ id: 1, type: "Puppies" }])
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
    console.log(pets)
  }, [])

  console.log(selectedId)
  console.log(pets)

  const handleClick = (id, type) => {
    setSelectedId(id - 1)
    let color = `section ${type}`
    setSectionColor(color)
    console.log(sectionColor)
  }

  const petsLink = pets.map(pet => {
    let petLink = pet.type
    console.log("pet link: " + petLink)
    return (
      <b key={pet.id}>
        <Link to={`/pets/${pet.type}`}>View {pet.type}</Link>
      </b>
    )
  })

  // let imgURL: "./images/Puppies.png"
  console.log("pets: " + pets)
  // console.log("pets selectedId: " + pets[selectedId])

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda totam unde ipsam
            aliquam facilis et perferendis labore amet esse ab, distinctio optio inventore itaque
            illum nihil sequi iusto! Cumque, dicta!
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
