import React, { useState } from "react"
import { Redirect } from "react-router-dom"

const AdoptionForm = ({ showAdoptionForm, urlPath, petClassName, toggleForm, petName, petImg }) => {
  const [submitSuccessful, setSubmitSuccessful] = useState(null)
  const [errors, setErrors] = useState("")

  const [newApplication, setNewApplication] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    homeStatus: ""
  })

  const addNewApplication = async () => {
    try {
      const response = await fetch("/api/v1/adoptions", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(newApplication)
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const body = await response.json()
      setNewApplication(body.newApplication)
      setSubmitSuccessful(true)
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
      setSubmitSuccessful(false)
    }
  }

  const handleChange = e => {
    setNewApplication({
      ...newApplication,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (
      newApplication.name !== "" &&
      newApplication.phoneNumber !== "" &&
      newApplication.email !== "" &&
      newApplication.homeStatus !== ""
    ) {
      setErrors("")
      addNewApplication()
      setNewApplication({
        name: "",
        phoneNumber: "",
        email: "",
        homeStatus: ""
      })
    } else {
      setErrors("ALL Fields * Required!")
    }
  }

  let errorMessage
  let required
  if (errors) {
    errorMessage = <h6>{errors}</h6>
    required = "*"
  }

  if (submitSuccessful) {
    return <h3 id="successfulMessage">Your request is in process!</h3>
  } else {
    let adoptionForm = (
      <div id="form-container">
        <div className="form-title">
          <h2>Adoption Form</h2>
        </div>
        <div className="form-content">
          <div className="form-left-side">
            <img src={petImg} alt={petName} />
            <h3>{petName}</h3>
            <p>Thank you for your love!</p>
          </div>
          <div className="form-right-side">
            <a className="close-btn" onClick={toggleForm}>
              <i className="fas fa-times"></i>
            </a>
            <div className="form-box">
              <form onSubmit={handleSubmit}>
                {errorMessage}
                <label htmlFor="name">
                  Name
                  <br />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={handleChange}
                    value={newApplication.name}
                    placeholder="A.R.I.S. Project"
                  />
                </label>
                <span>{required}</span>
                <br />
                <label htmlFor="phoneNumber">
                  Phone
                  <br />
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="999-999-9999"
                    onChange={handleChange}
                    value={newApplication.phoneNumber}
                    placeholder="123-456-7890"
                  />
                </label>
                <span>{required}</span>
                <br />
                <label htmlFor="email">
                  Email
                  <br />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={handleChange}
                    value={newApplication.email}
                    placeholder="random@somewhere.com"
                  />
                </label>
                <span>{required}</span>
                <br />

                <label htmlFor="home-status">Home Status</label>
                <br />
                <select id="home-status" name="homeStatus" onChange={handleChange}>
                  <option value="">Please choose one</option>
                  <option value="own">Own</option>
                  <option value="rent">Rent</option>
                </select>
                <span>{required}</span>
                <br />
                <input id="submit-btn" type="submit" value="Apply" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
    let showForm = showAdoptionForm ? adoptionForm : null
    let modalClassName = showAdoptionForm ? "modal active" : "modal"

    return <div className={modalClassName}>{showForm}</div>
  }
}

export default AdoptionForm
