import React, { useState, useEffect} from "react"

const PuppiesShowPage = (props) => {
  const [puppy, setPuppy] = useState({})

  const getPuppy = async () => {
    try {
      const puppyId = props.match.params.id
      const response = await fetch(`/api/v1/pets/puppies/${puppyId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const responseBody = await response.json()
      setPuppy(responseBody.puppiescute)
    } catch(err) {
      console.error(`Error in Fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    getPuppy()
  },[])

  return (
    <div className="showPokemon">
      <div>
        <h3>{puppy.name}</h3>
      </div>
      <div className="member-img">
        <img key={puppy.id} src={puppy.imgUrl} alt={puppy.name} height="600" weight="400" />
      </div>
      <div className="member-details">
        <ul>
          <li><strong>Age: </strong>{puppy.age}</li>
          <li><strong>Vaccination's status: </strong>{puppy.vaccinationStatus}</li>
          <li><strong>{puppy.name}'s story:</strong> {puppy.adoptionStory}</li>
          <li><strong>Adoption status:</strong> {puppy.adoptionStatus}</li>
        </ul>
      </div>
    </div>
  )
}

export default PuppiesShowPage