import express from 'express'
import axios from 'axios';
import bodyParser from 'body-parser';

// for client to requeset using api

const app =express();
const port = 4000



app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());


const API_URL = "http://localhost:3000/";



app.listen(port, (req, res)=>{
    console.log(`Server running at http://localhost:${port}`);
})

