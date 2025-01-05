import express from "express";
import bodyParser from "body-parser";
import pg from "pg"



const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "1234",
  port: 5432
})

db.connect()



app.get("/", async (req, res) => {
  //Write your code here.
  const result = await db.query("SELECT * FROM visited_countries");
  // console.log(result);
  console.log(result.rows);
  let countries = [];
  result.rows.forEach((country)=>{
    countries.push(country.country_code)
  })
  console.log(typeof(countries))
  res.render("index.ejs",{countries: countries, total: countries.length});
  // res.json(result.rows);
  db.end();


});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
