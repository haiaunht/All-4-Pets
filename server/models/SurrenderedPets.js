import pg from "pg"

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/pokedex" 
})

  class SurrenderedPets {
    constructor({id, name, phoneNumber, phone_number, email, petName, pet_name, petAge, pet_age, petTypeId, pet_type_id, petImageUrl, pet_image_url, vaccinationStatus, vaccination_status, applicationStatus, application_status}) {
      this.id = id
      this.name = name
      this.phoneNumber = phoneNumber || phone_number
      this.email = email
      this.petName = petName || pet_name
      this.petAge = petAge || pet_age
      this.petTypeId = petTypeId || pet_type_id
      this.petImageUrl = petImageUrl || pet_image_url
      this.vaccinationStatus = vaccinationStatus || vaccination_status
      this.applicationStatus = applicationStatus || application_status || "pending"
    }
  
    static async findAll() {
      try{
        const client = await pool.connect()
        const result = await client.query("SELECT * FROM pet_surrender_applications;")
        const surrenderedData = result.rows
        const pets = surrenderedData.map((pet) => {
          return new this(pet)
        })
  
        client.release()
    
        return pets
      } catch(error) {
        console.error(error)
        pool.end()
      }
  
    }
  
    async save() {
      try {
        const client = await pool.connect()
        const query = "INSERT INTO pet_surrender_applications (name, phone_number, email, pet_name, pet_age, pet_type_id, pet_image_url, vaccination_status, application_status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)"
        const values = [this.name, this.phoneNumber, this.email, this.petName, this.petAge, this.petTypeId, this.petImageUrl, this.vaccinationStatus, this.applicationStatus]
        await client.query(query, values)
  
        const result = await client.query("SELECT * FROM pet_surrender_applications ORDER BY id DESC LIMIT 1")
        const newPet = result.rows[0]
        this.id = newPet.id
  
        client.release()
  
        return newPet
      } catch (error) {
        console.error(error)
        pool.end()
      }
    }
  }

export default SurrenderedPets