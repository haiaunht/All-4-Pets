import pg from "pg"
import path from "path"
import LineReader from "line-reader"
import { fileURLToPath } from "url"

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/pokedex" })

  //setup __dirname to work with ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//assemble where the text file is located
const petPath = path.join(__dirname, "../../pet_type.txt")

class Seeder {
  static async seed() {
    // your seeder code here
    const pet_types= [
      {type:"Puppies", description:"Adorable Puppies"},
      {type:"Pokemon", description:"Your best friend"}
    ]

    for (let i=0; i<pet_types.length; i++) {
      const type = pet_types[i]
      const queryString = `INSERT INTO pet_types (type, description) VALUES ('${type.type}', '${type.description}');`
      await pool.query(queryString)
    }

    LineReader.eachLine(petPath, async (line, last, done) => {
      const [name, img_url, age, vaccination_status, adoption_story, adoption_status, type_id] = line.split(";")
      // build our SQL query string
      const queryString = "INSERT INTO adoptable_pets (name, img_url, age, vaccination_status, adoption_story, adoption_status, type_id) VALUES ($1, $2, $3, $4, $5, $6, $7);"

      //execute our query
      try {
        const result = await pool.query(queryString, [name, img_url, age, vaccination_status, adoption_story, adoption_status, type_id])
        if (last) {
          //drain the pool because we're done connecting
          pool.end()
        }
        done()
      } catch (error) {
        console.log(`Error: ${error}`)
        done()
      }
    })

  }
}

export default Seeder
