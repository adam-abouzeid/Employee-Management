const express = require("express")
const mongoose = require("mongoose")
const employeeRoutes = require("./routes/employeeRoutes")
const bodyParser = require('body-parser')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))



// API routes:
app.use("/api/employees", employeeRoutes)



// I did not create a .env file for this api but for best practice I included this
const PORT = process.env.PORT || 5000 
mongoose.connect("mongodb+srv://adminete:adminete@cluster0.vyqls0v.mongodb.net/?retryWrites=true&w=majority").then(()=> console.log("DB connected")).catch(err=>console.log(err.message || err))
mongoose.set('strictQuery', true);
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))