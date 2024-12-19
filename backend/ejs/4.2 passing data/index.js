import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.post("/submit", (req, res) => {
  // console.log(req.body.fName)
  // console.log(req.body.lName)
  const {fName, lName} = req.body;
  const numLetters = fName.length  + lName.length;
  // console.log(numLetters);

  res.render("index.ejs", {numberOfLetters: numLetters})

});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
