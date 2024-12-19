import express from "express"

const app = express();
const port = 3000;


// app.set("view engine", "ejs");

app.get("/", (req,res)=>{
    // res.send("Hello");

    let today = new Date()
    let type = today.getDay()
    // let type = 0

    let dayType = "Weekday";
    let advice = "it's time to work hard";
    console.log(type)

    if (type === 0 || type === 6) {
        dayType = "Weekend"
        advice = "it's time to have some fun"
    }
    res.render("index.ejs", {
        dayType,
        advice
    });
});

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`)
})