const express = require("express");
const app = express()
app.use("/test",(req,res)=>{
    res.send("heeelllllo from test")
})
app.use((req,res)=>{
    res.send("hello fkrom dashbnnnoard")
})
app.listen(7777,()=>{
    "server is running on 7777"
})

// normal node server creation 
// const http= require("http")
// const server = http.createServer((req,res)=>{
//     res.end("holllaa")
// })

// server.listen(8888) 