

const depart = require("../clg schema/dep.js")

 module.exports.postFunction = async(req,res)=>{
    const depar= depart({
        depname:req.body.depname,
        depid:req.body.depid
    })

    const result = await depar.save()
    res.send(result)
}


module.exports.depGetAll = async (req,res) =>{
    const result = await depart.find()
    res.send(result)

}


module.exports.depGetDep = async (req,res)=> {
    const result = await depart.find({depname:req.params.deptname})
    res.send(result)
}


module.exports.depGetId = async (req,res)=> { 
    const result = await depart.find({_id: req.params.depid})
    // result.depname = req.body.depname
    // result.save().then(res => console.log(res)).catch(err => console.log(err))
    res.send(result)
}


module.exports.depputId = async (req,res)=> {
    const result = await depart.findById({_id: req.params.depid})
    result.depname = req.body.depname
    result.save().then(res => console.log(res)).catch(err => console.log(err))
    res.send(result)
}


module.exports.depDeleteId = async (req,res)=> {
    const result = await depart.findByIdAndDelete({_id: req.params.id})
    res.send("deleted")
}








