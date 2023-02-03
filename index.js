const express=require('express')
const { connection } = require('./config/db')
const { fruitRouter } = require('./routes/fruit.route')
require('dotenv').config()
const PORT=process.env.PORT || 8080
const app=express()
app.get("/",((req,res)=>{
    res.send("<h1>Welcome to my world <h1/>")
}))
app.use(express.json())
app.use("/",fruitRouter)
app.listen(PORT,async()=>{
    try {
        await connection
        console.log("connected with database")
    } catch (error) {
        console.log(error)
    }
})