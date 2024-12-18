import express from "express";

const app = express();
const port = 3000;

app.get("/", (req,res)=>{
    // res.send("Hello World");
    res.sendStatus(201);
    // console.log(req.rawHeaders);
})

app.get("/about", (req,res)=>{
    res.send("Hello About Page");
    // console.log(req.rawHeaders);
})
app.get("/contact", (req,res)=>{
    res.send("Hello Contaxt Page");
    // console.log(req.rawHeaders);
})

app.listen(port, ()=>{
    console.log(`Server running at port ${port}.`)
})