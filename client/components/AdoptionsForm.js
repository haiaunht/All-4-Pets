import React, {useState} from "react"

const AdoptionForm = (props) => {
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
        throw(error)
      }
      const body = await response.json()
      setNewApplication(body.newApplication)
      setSubmitSuccessful(true)
    } catch(error){
      console.error(`Error in Fetch: ${error.message}`)
      setSubmitSuccessful(false)
    }
  }

  const handleChange = (e) => {
    setNewApplication({
      ...newApplication,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if ( newApplication.name !=="" &&  newApplication.phoneNumber !== "" &&  newApplication.email !== ""  &&  newApplication.homeStatus !== "") {
      setErrors("")
      addNewApplication()
      setNewApplication({
        name: "",
        phoneNumber: "",
        email: "",
        homeStatus: ""
      })
    } else {
      setErrors('ALL Fields * Required!')
    }
  }

  let errorMessage 
  let required
  if (errors) {
    errorMessage = <h3>{errors}</h3>
    required = "*"
  }

  if (submitSuccessful) {
    return(<h3>Your request is in process!</h3>)
  } else {
    return (
    <div id="form-container">
        <div className="form-box">
          <form onSubmit={handleSubmit}>
            {errorMessage}
            <label htmlFor="name">
              Your Name:
              <input
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
                value={newApplication.name}
              />
              {required}
            </label><br/>

            <label htmlFor="phoneNumber">
              Phone Number:
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="999-999-9999"
                onChange={handleChange}
                value={newApplication.phoneNumber}
              />
              {required}
            </label> <br/>

            <label htmlFor="email">
              Email:
              <input
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                value={newApplication.email}
              />
            </label><br/>

            <label htmlFor="homeStatus">
              Home Status:
              <select id="homeStatus" name="homeStatus" onChange={handleChange}>
                <option value=""></option>
                <option value="own">Own</option>
                <option value="rent">Rent</option>
              </select>
              {required}
            </label><br/>

            <input className="button" type="submit" value="Apply" />
          </form>
        </div>
      </div>
  )}
}

export default AdoptionForm