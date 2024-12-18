import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000

// even though we don't have post handler and we use morgan middleware before any of the handler happens, we still will have valid a valid action that happening 
// app.use(morgan("combined"))
app.use(morgan("tiny"))


app.get("/", (req,res)=>{
    res.send("Hello!")
})

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`)
})