const express = require("express");
const app = express()




app.get("/user",(req,res)=>{
    // http://localhost:7777/user?userId=702
    console.log(req.query)
    res.send('you are fecthing get of user')
})

app.get("/test/:userId/:name",(req,res)=>{
    // http://localhost:7777/701
    console.log(req.params)
    res.send('you are fecthing get of user')
})



app.listen(7777,()=>{
    "server is running on 7777"
})

// app.get("/a?bc",(req,res) =>{
//     res.send('matched route')
// })

// app.get("/ab+c	", (req, res) => {
//     res.send("matched /abc or /ac");
// });

app.listen(7777, () => {
    console.log("server is running on 7777");
});


// normal node server creation 
// const http= require("http")
// const server = http.createServer((req,res)=>{
//     res.end("holllaa")
// })

// server.listen(8888) 