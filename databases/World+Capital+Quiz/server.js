import express from "express";
import bodyParser from "body-parser";
import pg from "pg"

const app = express()
const port = 4000;

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(express.static("public"));

const db = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'world',
    password: '1234',
    port: 5432,
});
db.connect();

let quiz = []
db.query("SELECT * FROM flags", (err,res)=>{
    if (err) {
        console.log("Erro executing query", err.stack)
    }else{
        quiz = res.rows
        // console.log(quiz)
    }
    db.end();
})
let totalCorrect = 0;

let currentQuestion = {};
await nextQuestion();

app.get("/", async (req,res)=>{
    totalCorrect = 0;
    await nextQuestion();
    console.log(currentQuestion);
    res.render("index.ejs", {question: currentQuestion})
})

app.post("/submit",(req,res)=>{
    let answer = req.body.answer.trim();
    let isCorrect = false;
    if (currentQuestion.name.toLowerCase() === answer.toLowerCase()) {
        totalCorrect++;
        console.log(totalCorrect)
        isCorrect = true;
        
    }
    nextQuestion();
    
    res.render("index.ejs",{
        question: currentQuestion,
        wasCorrect: isCorrect,
        totalScore: totalCorrect
    })
})

async function nextQuestion(){
    const randomCountry = quiz[Math.floor(Math.random()*quiz.length)];
    // console.log(randomCountry)
    currentQuestion = randomCountry;
}

app.listen(port, (req, res)=>{
    console.log(`Server running at http://localhost:${port}`);
})