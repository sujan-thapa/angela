import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path"
import { fileURLToPath } from "url";
// import

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = ""

app.use(bodyParser.urlencoded({extended: true}))


function bandNameGenerator(req,res,next){
    console.log(req.body)
    bandName = req.body["streetName"]+req.body["petName"]
    next();

}

app.use(bandNameGenerator)
// app.use(bodyParser.urlencoded({extended: true}))


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
})

app.post("/submit",(req,res)=>{
    // res.sendFile(__dirname+"/public/index.html")
    res.send(bandName)
    // console.log(req.body)
})



app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
})