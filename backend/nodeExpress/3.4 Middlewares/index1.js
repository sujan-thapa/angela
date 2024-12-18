import express from "express";
import bodyParser from "body-parser"
import {dirname} from "path"
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    // console.log(req.body)

    // console.log(__dirname + "/public/index.html");
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/submit", (req, res)=>{
    console.log(req.body)
    // res.sendFile(__dirname, "/public/index.html")
})

app.listen(port, ()=>{
    console.log(`Server running at port ${port}`)
})