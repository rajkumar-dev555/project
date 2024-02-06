const express = require("express")
require('dotenv').config()
require("./database/mongodb")

const app = express()
app.use(express.json())

const depart = require("./route/departroute")
app.use("/",depart)


const student = require("./route/studentroute")
app.use("/",student)


app.listen(process.env.PORT)

