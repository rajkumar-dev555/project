const bcr = require("bcrypt")
const aa = require("express")
const app =aa.Router()

const student = require("../clg schema/student.js")

const {studentsvalidation, registerValidationNew} = require("../valication/validat.js")
const { Router } = require("express")



module.exports.postFunction = async(req,res)=>{
       const value = studentsvalidation(req.body)
      if(value != undefined) return res.send(value) 
 

    const depar= student ({
        studname:req.body.studname,
        email:req.body.email,
        password:req.body.password,
        role:req.body.role
    })

    const result = await depar.save()
    res.send(result)
    

}


module.exports.studDeletId = async(req, res) => {
    const result = await student.findByIdAndDelete({_id: req.params.id})
    res.send(deleted)
} 

// module.exports.registerStud = async (req, res) => {
//     const {studname, email, password, role} = req.body
//     const validaton = this.registerStud1({
//         studname,
//         email,
//         password,
//         role
        
//     })

//       console.log(validaton);
//     if(validaton) return res.status(400).send(validaton)

// }



