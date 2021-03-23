import { runInThisContext } from "node:vm"
import pg from "pg"

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/pokedex" 
})

class Pokemon {
  constructor({id, name, imgUrl, img_url, age, vaccinationStatus, vaccination_status, adoptionStory, adoption_story, adoptionStatus, adoption_status, type_id }) {
    this.id = id
    this.name = name
    this.imgUrl = imgUrl || img_url
    this.age = age
    this.vaccinationStatus = vaccinationStatus || vaccination_status
    this.adoptionStory = adoptionStory || adoption_story
    this.adoptionStatus = adoptionStatus || adoption_status
    this.type_id = type_id
  }

  static async findAll() {
    try {
      const client = await pool.connect()
      const result = await client.query("SELECT * FROM pet_types JOIN adoptable_pets ON pet_types.id = adoptable_pets.type_id;")

      const pokemonData = result.rows
      const pokemon = pokemonData.map(note => new this(note))

      client.release()

      return pokemon
    } catch(err) {
      console.log(err)
      pool.end()
      //throw(err)
    }
  }

  static async findById() {
    try {

    } catch {
      console.log(err)
      pool.end()
      //throw(err)
    }    
  }
}