const express = require("express")

const route = express.Router();
const {postFunction, depGetAll, depGetDep, depGetId, depputId, depDeleteId} = require("../services/departmentservices")

route.post("/dept",postFunction)
route.get("/",depGetAll)
route.get("/dep/:deptname",depGetDep)
route.get("/id/:depid", depGetId)
route.put("/dp/:depid", depputId)
route.delete("/dd/:id",depDeleteId)



module.exports = route;

