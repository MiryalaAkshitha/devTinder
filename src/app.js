const express = require("express");
const app = express()


// app.use("/user",(req,res)=>{
//     console.log('hiii')
    //1 .because we are not sending any request it will go into loop and console will be printed but response will not be shown
// })


//2. response 1 will be printed as after send code will not be executed
// app.use("/user",(req,res,next)=>{
// res.send("response 1")
// },(req,res,next)=>{
// res.send("response 2")
// })
//3. response 1 will be printed as after send code will not be executed, same but will get error in console 

// app.use("/user",(req,res,next)=>{
//     res.send("response 1")
//     next()
//     },(req,res,next)=>{
//     res.send("response 2")
//     })
//3. hello will be printed and response 2 will be printed as we have next

    // app.use("/user",(req,res,next)=>{
    //     console.log("hello")
    //     next()
    //     },(req,res,next)=>{
    //     res.send("response 2")
    //     })

//this will directly print hello 2 and send response 2 
app.use("/user",(req,res,next)=>{
    next()
console.log("hello")
        },(req,res,next)=>{
            console.log("hello 2")

        res.send("response 2")
        })


app.listen(7777,()=>{
    "server is running on 7777"
})

