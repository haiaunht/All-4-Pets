import React, { useState } from "react"
import SuccessfulSubmission from "./SuccessfulSubmission"

const SurrenderForm = props => {
  const [submitSuccessful, setSubmitSuccessful] = useState(false)
  const [errors, setErrors] = useState("")

  const [newSurrenderedPet, setNewSurrenderedPet] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    petName: "",
    petAge: "",
    petTypeId: "",
    petImageUrl: "",
    vaccinationStatus: "",
    applicationStatus: ""
  })

  const addNewSurrenderedPet = async () => {
    try {
      const response = await fetch("/api/v1/adoptions/new", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(newSurrenderedPet)
      })
      if (!response.ok) {
        const errorMessage = `$response.status (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const body = await response.json()
      setNewSurrenderedPet(body.newSurrenderedPet)
      setSubmitSuccessful(true)
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
      setSubmitSuccessful(false)
    }
  }

  const handleChange = e => {
    setNewSurrenderedPet({
      ...newSurrenderedPet,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (
      newSurrenderedPet.name !== "" &&
      newSurrenderedPet.phoneNumber !== "" &&
      newSurrenderedPet.email !== "" &&
      newSurrenderedPet.petName !== "" &&
      newSurrenderedPet.petAge !== "" &&
      newSurrenderedPet.petTypeId !== "" &&
      newSurrenderedPet.petImageUrl !== ""
    ) {
      setErrors("")
      addNewSurrenderedPet()
      setNewSurrenderedPet({
        name: "",
        phoneNumber: "",
        email: "",
        petName: "",
        petAge: "",
        petTypeId: "",
        petImageUrl: "",
        vaccinationStatus: "",
        applicationStatus: ""
      })
    } else {
      setErrors("Fill Out ALL * Required Fields!")
    }
  }

  let errorMessage
  let required
  if (errors) {
    errorMessage = <h6>{errors}</h6>
    required = "*"
  }

  let petName = newSurrenderedPet.petName || "Pet"

  if (submitSuccessful) {
    return (
      <SuccessfulSubmission submitSuccessful={submitSuccessful} userName={newSurrenderedPet.name} />
    )
  } else {
    return (
      <div id="surrender-form">
        <div className="surrender-form-container">
          <div className="surrender-form-left-side">
            <img src="/images/husky.png" alt="puppy" />
            <h3>
              {petName} needs you. <br /> <span>Please reconsider.</span>
            </h3>
          </div>
          <div className="surrender-form-right-side">
            <h2>Pet Surrender Form</h2>
            {errorMessage}
            <form id="surrender-form-box" onSubmit={handleSubmit}>
              <div className="input-box w50">
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={handleChange}
                  value={newSurrenderedPet.name}
                  placeholder="A.R.I.S. Project"
                />
                <label htmlFor="name">Name</label>
                <span className="form-message">{required}</span>
              </div>

              <div className="input-box w50">
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="999-999-9999"
                  onChange={handleChange}
                  value={newSurrenderedPet.phoneNumber}
                />
                <label htmlFor="phoneNumber">Phone Number</label>
                <span className="form-message">{required}</span>
              </div>

              <div className="input-box w50">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="random@somewhere.com"
                  onChange={handleChange}
                  value={newSurrenderedPet.email}
                />
                <label htmlFor="email">Email</label>
                <span className="form-message">{required}</span>
              </div>

              <div className="input-box w50">
                <input
                  id="petName"
                  name="petName"
                  type="text"
                  placeholder="Buddy"
                  onChange={handleChange}
                  value={newSurrenderedPet.petName}
                />
                <label htmlFor="petName">Pet's Name</label>
                <span className="form-message">{required}</span>
              </div>

              <div className="input-box w50">
                <input
                  id="petAge"
                  name="petAge"
                  type="text"
                  placeholder="1"
                  onChange={handleChange}
                  value={newSurrenderedPet.petAge}
                />
                <label htmlFor="petAge">Pet's Age</label>
                <span className="form-message">{required}</span>
              </div>

              <div className="input-box w50">
                <input
                  id="petImageUrl"
                  name="petImageUrl"
                  type="url"
                  placeholder="https://pet_img.jpg"
                  onChange={handleChange}
                  value={newSurrenderedPet.petImageUrl}
                />
                <label htmlFor="petImageUrl">Pet Image</label>
                <span className="form-message">{required}</span>
              </div>

              <div className="input-box w50">
                <select id="petTypeId" name="petTypeId" onChange={handleChange}>
                  <option value="">Please choose one</option>
                  <option value="1">puppy</option>
                  <option value="2">pokemon</option>
                </select>
                <label htmlFor="petTypeId">Pet's Type</label>
                <span className="form-message">{required}</span>
              </div>

              <div className="input-box w50">
                <select id="vaccinationStatus" name="vaccinationStatus" onChange={handleChange}>
                  <option value="">Please choose one</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
                <label htmlFor="vaccinationStatus">Vaccinated</label>
                <span className="form-message"></span>
              </div>
              <div className="input-box w50">
                <input className="button" type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SurrenderForm
