const mongodb = require("mongoose")
const studschema = new mongodb.Schema({
    studname:String,
    email:String,
    password:String,
    role:[String]
})


const student = mongodb.model("stut",studschema)

module.exports = student