//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path"
import { fileURLToPath } from "url";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

// var password = "";
var userIsAuthorised = false;


const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({ extended: true }));


const passwordCheck = (req, res, next) => {
    // console.log(req.body)
    // password = req.body["password"];
    const password = req.body["password"];

    if (password === "ILoveProgramming") {
        userIsAuthorised = true;

    }
    next();

}
app.use(passwordCheck)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})


app.post("/check", (req, res) => {
    // res.sendFile(__dirname, "/public/secret.html")
    // const pass = password;
    // console.log(pass)
    // if (pass==="ILoveProgramming") {
    //     res.sendFile(__dirname+ "/public/secret.html")

    // }else{
    //     res.sendFile(__dirname+"/public/index.html");

    // }
    // console.log(password)
    // console.log(req.body["password"])
    if (userIsAuthorised) {
        res.sendFile(__dirname + "/public/secret.html")

    } else {
        res.sendFile(__dirname + "/public/index.html");

    }
})

// app.get(__dirname)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})