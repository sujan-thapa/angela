import express from "express";
import axios from "axios"
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('public'))

const API_URL = "https://random.dog/woof.json"; 

app.get("/", async (req,res)=>{
    try {
        const result = await axios.get(API_URL);
        // console.log(result);
        res.render("index.ejs", {image: result.data.url});
    } catch (error) {
        res.render("index.ejs", {image: result.response.error});
    }
})
app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
})