import express from "express";
import bodyParser from "body-parser"

const app = express();
const port = 3000;

app.post("/submit", (req, res)=>{
    console.log(req.body)
})

app.listen(port, ()=>{
    console.log(`Server running at port ${port}`)
})