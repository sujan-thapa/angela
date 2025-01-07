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
  // db.end();


});


// app.post("/add", async (req, res) => {
//   try {
//     const countryName = req.body.country;

//     // Fetch the matching country from the database
//     const countriesList = await db.query(
//       "SELECT * FROM countries WHERE country_name = $1",
//       [countryName]
//     );

//     if (countriesList.rows.length > 0) {
//       const matchedCountry = countriesList.rows[0];

//       // Insert the matched country's code into the visited_countries table
//       const query = `INSERT INTO visited_countries (country_code) VALUES ($1)`;
//       await db.query(query, [matchedCountry.country_code]);

//       res.json({
//         success: true,
//         message: `Country '${matchedCountry.country_name}' added to visited countries!`,
//       });
//     } else {
//       res.status(404).json({
//         success: false,
//         message: "Country not found in the list",
//       });
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Internal server error",
//     });
//   }
// });


// app.post("/add", async (req,res)=>{
//   try {
//     const countryName = req.body.country
//   // console.log(countryName);
//   const countriesList = await db.query("SELECT * FROM countries");
//   const countriesListt = countriesList.rows
//   // console.log(countriesListt);
//   let new_visited_Country = [];
  
//   let matchedCountry = countriesListt.find((country)=>countryName === country.country_name)
  
//   if (matchedCountry) {
//     // new_visited_Country.push(matchedCountry.country_code)
//     const query = `INSERT INTO visited_countries (country_code) VALUES ($1)`
//     await db.query(query, [matchedCountry.country_code]);
//     // res.json({
//     //   success: true,
//     //   message: `Country '${matchedCountry.country_name}' added to visited countries!`,
//     // });
//     res.redirect("/");

//   }else{
//     console.log("There's an errror");
//     res.status(404).json({
//       success: false,
//       message: "Country not found in the list",
//     });
//   }
//   console.log(new_visited_Country);
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Internal server error",
//     });
    
//   }
  
// })

app.post("/add",async (req,res) =>{
  const countryName = req.body.country;
  console.log(countryName);

  const result = await db.query("SELECT country_code FROM countries WHERE country_name=$1",[countryName])
  // console.log(result.rows)

  if (result.rows !==0) {
    const data = result.rows[0];
    const country_code = data["country_code"]
    // const country_code = data.country_code;
    console.log(data)
    console.log(country_code)


    await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [country_code])
    res.redirect("/")
    
  }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
