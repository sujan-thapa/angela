import express from "express"
import bodyParser from 'body-parser';
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static("public"))
app.set("view engine","ejs")

let posts = [
    { id: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF_qUhOG6dwzy9jXeLSkzExd2DMWb2bbGp8w&s", title: "First Post", content: "This is the content of the first post." },
    { id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF_qUhOG6dwzy9jXeLSkzExd2DMWb2bbGp8w&s",title: "Second Post", content: "This is the content of the second post." },
  ];
  

app.get("/",(req,res)=>{
    res.render("index", {posts})
    // res.render("index.ejs")

})

app.get("/create",(req,res)=>{
    res.render("create")
    // res.render("index.ejs")

})

// app.post("/create",(req,res)=>{
//     const {id, title, content} = req.body;

//     console.log(id)
//     console.log(title)
//     console.log(content)

// })

app.post("/submit",(req,res)=>{
    const {image, title, content} = req.body;

    const newPost = {
        id: posts.length?posts.length+1 : 1,
        image,
        title,
        content
    }
    posts.push(newPost);
    console.log(image)
    
    console.log(title)
    console.log(content)
    console.log(posts)
    // res.render("index")
    res.redirect("/")
    

})

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`)
})