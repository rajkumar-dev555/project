const mongodb = require("mongoose")

const clgschema = new mongodb.Schema({
    Name:String,
    email:String,
    password:String,
    role:[String]
})

const clg = mongodb.model("clg",clgschema)

module.exports = clg