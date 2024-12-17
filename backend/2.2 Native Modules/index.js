const fs  = require("fs")

// fs.writeFile("message.txt", "Hello from node js", (err)=>{
//     if (err) throw err;
//     console.log("file has been saved");
// })

// fs.readFile("./message.txt", "utf8", (err, data)=>{
//     if (err) throw err; 
        
//     console.log(data)
// })


fs.writeFile("message.txt", "Hello from node js part2", (err)=>{
    if (err) throw err;
    console.log("file has been saved");
})


fs.readFile("./message.txt", "utf8", (err, data)=>{
    if (err) throw err; 
        
    console.log(data)
})