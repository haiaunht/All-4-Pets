import React, { useState } from "react"
import { Link } from "react-router-dom"

const Pets = () => {
  const [pets, setPets] = useState([
    { id: 1, type: "Puppies", color: "#daccb4", imgURL: "./images/Puppies.png" },
    { id: 2, type: "Pokemon", color: "#f1ccd5", imgURL: "./images/Pokemon.png" }
  ])
  const [selectedId, setSelectedId] = useState(0)
  const [sectionColor, setSectionColor] = useState("section")
  const handleClick = (id, type) => {
    setSelectedId(id - 1)
    let color = `section ${type}`
    setSectionColor(color)
    console.log(sectionColor)
  }

  const petsLink = pets.map(pet => (
    <b key={pet.id}>
      <Link to={`/pets/${pet.type}`}>View {pet.type}</Link>
    </b>
  ))

  const petThumbnails = pets.map(pet => {
    return (
      <li key={pet.id}>
        <img src={pet.imgURL} alt={pet.type} onClick={() => handleClick(pet.id, pet.type)} />
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
            <img className="pet" src={pets[selectedId].imgURL} alt={pets[selectedId].type} />
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
