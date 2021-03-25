import React, {useState} from "react"

const SurrenderForm = (props) => {
  const [submitSuccessful, setSubmitSuccessful] = useState(null)
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
        throw(error)
      }
      const body = await response.json()
      console.log("Posted Successfully!", body.newSurrenderedPet)
      setSubmitSuccessful(true)
    } catch(error){
      console.error(`Error in Fetch: ${error.message}`)
      setSubmitSuccessful(false)
    }
  }

  const handleChange = (e) => {
    setNewSurrenderedPet({
      ...newSurrenderedPet,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newSurrenderedPet.name !=="" && newSurrenderedPet.phoneNumber !== "" && newSurrenderedPet.email !== ""  && newSurrenderedPet.petName !== "" && newSurrenderedPet.petAge !== "" && newSurrenderedPet.petTypeId !== "" && newSurrenderedPet.petImageUrl !== "") {
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
      setErrors('Fill Out ALL * Required Fields!')
    }
  }

  let errorMessage 
  let required
  if (errors) {
    errorMessage = <h3>{errors}</h3>
    required = "*"
  }

  if (submitSuccessful) {
    return(<h3>Your application is in process.</h3>)
  } else {
    return (
    <div className="surrender-form">
      <h1>Pet Surrender Form</h1>
      <form onSubmit={handleSubmit}>
        {errorMessage}
        <h3>Owner Information</h3>
        <label htmlFor="name">
          Name:
          <input
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            value={newSurrenderedPet.name}
          />
          {required}
        </label> <br/>

        <label htmlFor="phoneNumber">
          Phone Number:
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="999-999-9999"
            onChange={handleChange}
            value={newSurrenderedPet.phoneNumber}
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
            value={newSurrenderedPet.email}
          />
        </label> <br/> <br/>

        <h3>Pet Information</h3>
        <label htmlFor="petName">
          Pet's Name:
          <input
            id="petName"
            name="petName"
            type="text"
            onChange={handleChange}
            value={newSurrenderedPet.petName}
          />
          {required}
        </label> <br/>

        <label htmlFor="petAge">
          Pet's Age:
          <input
            id="petAge"
            name="petAge"
            type="number"
            min="1"
            onChange={handleChange}
            value={newSurrenderedPet.petAge}
          />
          {required}
        </label> <br/>

        <label htmlFor="petTypeId">
          Pet's Type:
          <select id="petTypeId" name="petTypeId" onChange={handleChange}>
            <option value=""></option>
            <option value="1">puppy</option>
            <option value="2">pokemon</option>
          </select>
          {required}
        </label> <br/>

        <label htmlFor="petImageUrl">
          Pet Image:
          <input
            id="petImageUrl"
            name="petImageUrl"
            type="url"
            onChange={handleChange}
            value={newSurrenderedPet.petImageUrl}
          />
          {required}
        </label> <br/>

        <label htmlFor="vaccinationStatus">
          Vaccinated:
          <select id="vaccinationStatus" name="vaccinationStatus" onChange={handleChange}>
            <option value=""></option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </label><br/><br/>

        <input className="button" type="submit" value="Submit" />
      </form>
    </div>
    )
  }
}

export default SurrenderForm
