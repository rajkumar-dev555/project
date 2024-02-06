const express = require("express")

const route = express.Router();

const {postFunction, studDeletId} = require("../services/studentservices")

route.post("/stud", postFunction)
route.delete("/delet/:id", studDeletId)
// route.post("/reg", registerStud)


module.exports = route
