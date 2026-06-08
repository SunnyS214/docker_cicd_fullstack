const {config} = require('dotenv')
config()
const express=require('express')
const app= express()
const port=process.env.PORT || 3000

app.get("/" ,(req , res)=>{
    res.send("home route")
} )

app.listen(port ,()=>{
    console.log(`app running on port ${port}`)
})