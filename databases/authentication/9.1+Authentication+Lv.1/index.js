import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

// const { Client } = pg
 
// const client = new Client({
//   user: 'database-user',
//   password: 'secretpassword!!',
//   host: 'my.database-server.com',
//   port: 5334,
//   database: 'database-name',
// })
const db = new pg.Client({
  user: 'postgres',
  password: '1234',
  host: 'localhost',
  port: 5432,
  database: 'secrets'
})

db.connect();


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  const checkResult = await db.query("SELECT * FROM users where email=$1",[email]);
  try {
    if (checkResult.rows.length>0) {
      res.send("Email already exists, Try another one")
      
    }else if (email && password) {
      const result = await db.query("INSERT INTO users (email, password) VALUES ($1, $2)",[email,password]);
      // console.log(result)
      // res.render("home.ejs");
      res.render("secrets.ejs");
    }

    
  } catch (error) {
    console.log(error);
    res.render("register.ejs")
  }

 

});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  
  try {
    const checkUser = await db.query("SELECT * FROM users where email = $1",[email]);
    // console.log(checkUser);
    // console.log(checkUser.rows);
    const dbData = checkUser.rows[0];
    // console.log(dbData);
    // console.log(dbData.password);
    // console.log(dbData.email);


    if (dbData) {
      if (dbData.email === email && dbData.password === password) {
        console.log("successful");
        res.render("secrets.ejs")
      }else{
        res.send("Login credentials are invalid.")
      }
    }else{
      res.send("User could not be found.");
    }
  } catch (error) {
    console.log(error);
    res.send(error)

  }


});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
