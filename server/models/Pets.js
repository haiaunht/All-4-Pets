import pg from "pg"

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/pokedex"
})

class Pets {
  constructor({ id = null, type, description = null }) {
    this.id = id
    this.type = type
    this.description = description
  }

  static async findAll() {
    try {
      const client = await pool.connect()
      const result = await client.query("SELECT * FROM pet_types;")

      const petsData = result.rows

      const pets = petsData.map(pet => {
        return new this(pet)
      })      
      client.release()

      return pets
    } catch (error) {
      console.log(error)
      pool.end()
    }
  }
}

export default Pets
