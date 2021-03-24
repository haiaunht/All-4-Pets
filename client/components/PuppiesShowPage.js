import React, { useState, useEffect } from "react"

const PuppiesShowPage = props => {
  const [puppy, setPuppy] = useState({})

  const [showAdoptionForm, setShowAdoptionForm] = useState(false)

  const toggleForm = () => {
    setShowAdoptionForm(current => !current)
  }
  const getPuppy = async () => {
    try {
      const puppyId = props.match.params.id
      const response = await fetch(`/api/v1/pets/puppies/${puppyId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      console.log(responseBody)
      setPuppy(responseBody.puppiescute)
    } catch (err) {
      console.error(`Error in Fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    getPuppy()
  }, [])

  let petClassName = showAdoptionForm ? "pet-container active" : "pet-container"

  return (
    <div className={petClassName}>
      <div className="pet-content">
        <div>
          <img key={puppy.id} src={puppy.imgUrl} alt={puppy.name} />
        </div>
        <h2>{puppy.name}</h2>
        <p>Age: {puppy.age}</p>
        <p>Vaccination: {puppy.vaccinationStatus}</p>
        <p>{puppy.adoptionStory}</p>
        <a onClick={toggleForm}>Adopt Me!</a>
      </div>
    </div>
  )
}

export default PuppiesShowPage
