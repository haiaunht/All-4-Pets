import pg from "pg"

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/pokedex" 
})

  class AdoptionApplications {
    constructor({id, name, phoneNumber, phone_number, email, homeStatus, home_status, applicationStatus, application_status}) {
      this.id = id
      this.name = name
      this.phoneNumber = phoneNumber || phone_number
      this.email = email
      this.homeStatus = home_status || homeStatus
      this.applicationStatus = applicationStatus || application_status || "pending"
    }
  
    static async findAll() {
      try {
        const client = await pool.connect()
        const result = await client.query("SELECT * FROM adoption_applications;")
        const adoptionsData = result.rows
        const applications = adoptionsData.map((application) => {
          return new this(application)
        })
  
        client.release()
    
        return applications
      } catch(error) {
        console.error(error)
        pool.end()
      }
    }
  
    async save() {
      try {
        const client = await pool.connect()
        const query = "INSERT INTO adoption_applications (name, phone_number, email, home_status, application_status) VALUES ($1, $2, $3, $4, $5)"
        const values = [this.name, this.phoneNumber, this.email, this.homeStatus, this.applicationStatus]
        await client.query(query, values)
  
        const result = await client.query("SELECT * FROM adoption_applications ORDER BY id DESC LIMIT 1")
        const newApplication = result.rows[0]
        this.id = newApplication.id
  
        client.release()
  
        return newApplication
      } catch (error) {
        console.error(error)
        pool.end()
      }
    }
  }

export default AdoptionApplications