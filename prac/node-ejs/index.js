import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

const app = express()  // creates an express aplication
dotenv.config()
const port = process.env.port || 5000
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs')

const obj1 = {
    name:"sujan",
    name2:"swastika",
    grades:[
        {one:"3",two:"4"},
        {one:"1",two:"2"}
    ]
}

// const obj1 = {
//     name:"sujan",
//     name2:"swastika",
    
// }


app.get("/",(req,res)=>{
    // res.render("index.ejs")
    res.render("index", {obj1:obj1})  // obj1 is passed to index.ejs adn this works
    // res.render("index", obj1)  
    

})



app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
})