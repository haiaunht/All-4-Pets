import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import AdoptionForm from "./AdoptionsForm"

const PuppiesShowPage = props => {
  const [puppy, setPuppy] = useState({})

  const puppyId = props.match.params.id
  let urlPath = `pets/puppies/${puppyId}`

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
      setPuppy(responseBody.puppiescute)
    } catch (err) {
      console.error(`Error in Fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    getPuppy()
  }, [])

  if (!puppy) {
    return <Redirect to="/404" />
  }

  let petClassName = showAdoptionForm ? "pet-container active" : "pet-container"

  return (
    <>
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
      <div className="adoptionForm">
        <AdoptionForm
          showAdoptionForm={showAdoptionForm}
          urlPath={urlPath}
          petClassName={petClassName}
          toggleForm={toggleForm}
          petName={puppy.name}
          petImg={puppy.imgUrl}
        />
      </div>
    </>
  )
}

export default PuppiesShowPage
