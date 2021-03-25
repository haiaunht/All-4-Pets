import pg from "pg"

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/pokedex" 
})

class Pokemon {
  constructor({id, name, imgUrl, img_url, age, vaccinationStatus, vaccination_status, adoptionStory, adoption_story, adoptionStatus, adoption_status, type_id, typeId}) {
    this.id = id
    this.name = name
    this.imgUrl = imgUrl || img_url
    this.age = age
    this.vaccinationStatus = vaccinationStatus || vaccination_status ? "Yes" : "No"
    this.adoptionStory = adoptionStory || adoption_story
    this.adoptionStatus = adoptionStatus || adoption_status ? "Yes" : "No"
    this.type_id = typeId || type_id
  }

  static async findAll() {
    try {
      const client = await pool.connect()
      const result = await client.query("SELECT * FROM adoptable_pets WHERE type_id = 2;")

      const pokemonData = result.rows
      const pokemons = pokemonData.map(poke => new this(poke))

      client.release()
      return pokemons
    } catch(err) {
      console.log(err)
      pool.end()
    }
  }  

  static async findById(id) {
    try {
      const client = await pool.connect()      
      const result = await client.query("SELECT * FROM adoptable_pets WHERE type_id = 2 AND id= $1", [id])

      const pokemoncute = new this(result.rows[0])
      client.release()
      
      return pokemoncute
    } catch (error) {
      console.error(`Error: ${error}`)
      pool.end()
    }
  }  
}

export default Pokemon