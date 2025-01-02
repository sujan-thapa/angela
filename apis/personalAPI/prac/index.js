import express from "express";
import bodyParser from "body-parser";

const app = express()
const port = 3000

// for the server api


let posts = [
  {
    id: 1,
    title: "The Rise of Decentralized Finance",
    content:
      "Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading.",
    author: "Alex Thompson",
    date: "2023-08-01T10:00:00Z",
  },
  {
    id: 2,
    title: "The Impact of Artificial Intelligence on Modern Businesses",
    content:
      "Artificial Intelligence (AI) is no longer a concept of the future. It's very much a part of our present, reshaping industries and enhancing the capabilities of existing systems. From automating routine tasks to offering intelligent insights, AI is proving to be a boon for businesses. With advancements in machine learning and deep learning, businesses can now address previously insurmountable problems and tap into new opportunities.",
    author: "Mia Williams",
    date: "2023-08-05T14:30:00Z",
  },
  {
    id: 3,
    title: "Sustainable Living: Tips for an Eco-Friendly Lifestyle",
    content:
      "Sustainability is more than just a buzzword; it's a way of life. As the effects of climate change become more pronounced, there's a growing realization about the need to live sustainably. From reducing waste and conserving energy to supporting eco-friendly products, there are numerous ways we can make our daily lives more environmentally friendly. This post will explore practical tips and habits that can make a significant difference.",
    author: "Samuel Green",
    date: "2023-08-10T09:15:00Z",
  },
];


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// app.use(express.json()); // Replaces bodyParser.json()
// app.use(express.urlencoded({ extended: true })); // Replaces bodyParser.urlencoded()
app.use(express.static("public"))

// displaying all the posts
app.get("/", (req, res) => {
  res.json(posts);
})

// adding new posts
app.post("/posts", (req, res) => {
  const newPost = req.body
  console.log(newPost);
  posts.push(newPost);
  res.json(posts);
})

// updating posts
app.put("/edit/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const updatedContent = req.body

  const contentIndex = posts.findIndex((post) => post.id === id)

  posts[contentIndex] = updatedContent

  res.json(posts);
})

// update with patch
app.patch("/edit/:id", (req, res) => {
  const id = parseInt(req.params.id)
  // const updatedContent = {
  //   id: id,
  //   title: req.body.title || req.body.title
  // }
  const post = posts.find((p) => p.id === id)
  console.log(id)

  // if(!post) return res.status(404).json({message: "Post not found"})


  if (req.body.title) post.title = req.body.title;
  if (req.body.content) post.content = req.body.content;

  if (req.body.author) post.author = req.body.author;


  // app.patch("/jokes/:id", (req, res) => {
  //   const id = parseInt(req.params.id);
  //   const existingJoke = jokes.find((joke) => joke.id === id);
  //   const replacementJoke = {
  //     id: id,
  //     jokeText: req.body.text || existingJoke.jokeText,
  //     jokeType: req.body.type || existingJoke.jokeType,
  //   };
  //   const searchIndex = jokes.findIndex((joke) => joke.id === id);
  //   jokes[searchIndex] = replacementJoke;
  //   console.log(jokes[searchIndex]);
  //   res.json(replacementJoke);
  // });

  console.log(posts)

  res.json(posts);
})


// deleting posts
app.delete("/delete/:id", (req, res) => {
  const id = parseInt(req.params.id)

  const contentIndex = posts.findIndex((post) => post.id === id);
  posts.splice(contentIndex, 1)
  res.json(posts)
})






app.listen(port, (req, res) => {
  console.log(`Server running at http://localhost:${port}`);
})
