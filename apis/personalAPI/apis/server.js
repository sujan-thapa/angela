// for server
import bodyParser from "body-parser";
import express from "express";
import axios from "axios";

const app = express()
const port = 3000;
const API_URL = "http://localhost:4000";

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set("view engine", "ejs"); // Setting EJS as the templating engine
// app.set("views", "views"); // This tells Express to look for views inside the 'views' folder

app.get("/", async (req, res)=>{
    try{
        // const response = await axios.get(`${API_URL}/posts`);
        const response = await axios.get(`${API_URL}/posts`);
        // console.log(response);
        res.render("index",{posts: response.data});

    }catch (error){
        res.status(500).json({message:"Error fetching posts"})
    }
})


// to add new blog 
app.get("/new", (req, res)=>{
    res.render("modify",{heading: "New Post", submit: "Create Post"})
})

// create new posts
app.post("/api/posts", async (req, res)=>{
    try {
        const response = await axios.post(`${API_URL}/posts`, req.body)
        // res.render("index",{posts: response.data});
    
        // console.log(response.data);
        // res.redirect("/")
    res.redirect("/");
    } catch (error) {
        res.status(500).json({message:"Error posting new posts"})
    }
})

// to get the data
app.get("/edit/:id", async (req, res)=>{
    console.log(req.params.id)
    try {
        const response = await axios.get(`${API_URL}/posts/${req.params.id}`);
        console.log(response.data);
        res.render("modify.ejs",{
            heading: "Edit Post",
            submit: "Update Post",
            post: response.data,
        })
    } catch (error) {
        res.status(500).json({message: "Error fetching post"})
    }
})

// to update the data
app.post("/api/posts/:id", async (req, res)=>{
    try {
        const response = await axios.patch(`${API_URL}/posts/${req.params.id}`, req.body);
        console.log(req.body.title);
        res.redirect("/");
        // console.log(response);
    } catch (error) {
        res.status(500).json({message: "Unable to update the data"})
    }
})



// to delete the data
app.get("/apis/posts/delete/:id", async (req, res)=>{
    try {
        // console.log(req.params.id)
        const response = await axios.delete(`${API_URL}/posts/${req.params.id}`)
        // console.log(response.data)
        res.redirect("/");
    } catch (error) {
        res.status(500).json({message: "Unable to delete the data"})
    }
})


app.listen(port, ()=>{
    console.log(`Backend Server listening at http://localhost:${port}`);
})