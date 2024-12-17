/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import { input } from '@inquirer/prompts';
import qr from "qr-image";
import fs from "fs";
const answer = await input({ message: 'Enter your name' });


// var qr = require('qr-image');
// var fs = require("fs");
 
var qr_svg = qr.image(answer);

// to create a qr.png file
qr_svg.pipe(fs.createWriteStream('qr.png'));
 
// var svg_string = qr.imageSync('I love QR!', { type: 'svg' });

// to copy the url in the url.txt
fs.writeFile("./URL.txt", answer, (err)=>{
    if (err) throw error; 
})