import express from "express";

const app = express();
const port = 3000;

// app.use(logger);

const myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
}

app.use(myLogger)

const requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
}

app.use(requestTime)

app.get('/', (req, res) => {
    let responseText = 'Hello World!<br>'
    responseText += `<small>Requested at: ${req.requestTime}</small>`
    res.send(responseText)
})


// app.get("/", (req, res) => {
//     res.send("Hello");
// })

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})