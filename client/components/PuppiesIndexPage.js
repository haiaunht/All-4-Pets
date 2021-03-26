import React, { useState, useEffect } from "react"
import PuppyTile from "./PuppyTile"

const PuppiesIndexPage = props => {
  const [puppies, setPuppies] = useState([])
  const fetchPuppies = async () => {
    try {
      const response = await fetch("/api/v1/pets/puppies")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const body = await response.json()
      setPuppies(body.puppies)
    } catch (err) {
      console.log(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    fetchPuppies()
  }, [])

  const allPuppies = puppies.map(puppy => {
    return (
      <PuppyTile
        key={puppy.id}
        id={puppy.id}
        name={puppy.name}
        imgUrl={puppy.imgUrl}
        age={puppy.age}
        vaccinationStatus={puppy.vaccinationStatus}
        adoptionStatus={puppy.adoptionStatus}
        adoptionStory={puppy.adoptionStory}
      />
    )
  })

  return (
    <div className="container">
      <div className="content">
        <div className="max-width-800">
          <h3>Adorable Puppies</h3>
          <p>The only member of your family that you will actually like</p>
        </div>
        <div className="pet">{allPuppies}</div>
      </div>
    </div>
  )
}

export default PuppiesIndexPage
