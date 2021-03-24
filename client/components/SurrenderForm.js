import React, {useState} from "react"

const SurrenderForm = (props) => {
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
  
  const addNewSurrenderedPet = async () =>{
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
    } catch(error){
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  const handleChange = (e) => {
    setNewSurrenderedPet({
      ...newSurrenderedPet,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    addNewSurrenderedPet()
  }

  return (
    <div className="surrender-form">
      <h1>Pet Surrender Form</h1>
      <form onSubmit={handleSubmit}>
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
        </label> <br/>

        <label htmlFor="petAge">
          Pet's Age:
          <input
            id="petAge"
            name="petAge"
            type="text"
            onChange={handleChange}
            value={newSurrenderedPet.petAge}
          />
        </label> <br/>

        <label htmlFor="petTypeId">
          Pet's Type:
          <select id="petTypeId" name="petTypeId" onChange={handleChange}>
            <option value=""></option>
            <option value="1">puppy</option>
            <option value="2">pokemon</option>
          </select>
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
        </label> <br/>

        <label htmlFor="vaccinationStatus">
          Vaccinated:
          <input 
            id="vaccinationStatus"
            name="vaccinationStatus"
            type="text"
            onChange={handleChange}
            value={newSurrenderedPet.vaccinationStatus}
          />
        </label><br/><br/>

        <input className="button" type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default SurrenderForm
