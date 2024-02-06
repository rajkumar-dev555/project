
const mongodb = require("mongoose")
const depschema = new mongodb.Schema({
    depname:String,
    depid:String
})

const depart = mongodb.model("department",depschema)

module.exports = depart