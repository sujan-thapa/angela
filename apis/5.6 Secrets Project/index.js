// HINTS:
// 1. Import express and axios
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";




const app = express()
const port = 3000

// app.use(bodyParser.urlencoded()) //ody-parser deprecated undefined extended
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'))

// const myBearerToken

const API_URL = "https://secrets-api.appbrewery.com/random";




// 2. Create an express app and set the port number.

// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.
app.get("/",async (req,res)=>{
    // res.render("index.ejs");
    try {
        const result = await axios.get(API_URL);
        console.log(result.data)

        console.log(result.data.secret)
        console.log(result.data.username)

        res.render("index.ejs", {secret: result.data.secret,
            user: result.data.username
        })
    } catch (error) {
        res.render("index.ejs",{
            secret: result.response.error,
            user: result.response.error
        })
        
    }
})

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
app.listen(port, ()=>{
    console.log(`Server starting at http://localhost:${port}`);
})
