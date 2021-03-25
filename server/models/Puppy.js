import pg from "pg"

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/pokedex" 
})

class Puppy {
  constructor({id, name, imgUrl, img_url, age, vaccinationStatus, vaccination_status, adoptionStory, adoption_story, adoptionStatus, adoption_status, type_id, typeId }) {
    this.id = id
    this.name = name
    this.imgUrl = imgUrl || img_url
    this.age = age
    this.vaccinationStatus = (vaccinationStatus || vaccination_status)  ? "Yes" : "No"
    this.adoptionStory = adoptionStory || adoption_story
    this.adoptionStatus = ( adoption_status  || adoptionStatus) ? "Yes" : "No"
    this.type_id = type_id || typeId
  }

  static async findAll() {
    try {
      const client = await pool.connect()
      const result = await client.query("SELECT * FROM adoptable_pets WHERE type_id = 1;")

      const puppiesData = result.rows
      const puppies = puppiesData.map(puppy => new this(puppy))

      client.release()
      return puppies
    } catch(err) {
      console.log(err)
      pool.end()
    }
  }  

  static async findById(id) {
    try {
      const client = await pool.connect()      
      const result = await client.query("SELECT * FROM adoptable_pets WHERE type_id = 1 AND id = $1", [id])

      const puppiescute = new this(result.rows[0])
      client.release()

      return puppiescute
    } catch (error) {
      console.error(`Error: ${error}`)
      pool.end()
    }
  }
}

export default Puppy