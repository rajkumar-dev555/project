const depart = require("../clg schema/student.js")

const Joi = require("joi");
const validate= require("validate")
const  model  = require("mongoose");


module.exports.studentsvalidation = (data)=> {
    const stut =  Joi.object({
      studname: Joi.string().alphanum().min(4).max(10).required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      role: Joi.string().min(3).max(10)


    })

return stut.validate(data)
}

// module.exports.registerValidationNew = (data) => {
//   const user = new Schema({
//     username: {
//       type: String,
//       required: true,
//       length: { min: 3, max: 32 },
//     },
//     email: {
//       type: String,
//       required: true,
//       length: { min: 3, max: 32 },
//     },
//     number: {
//       type: String,
//       required: true,
//       length: { min: 3, max: 32 },
//     },

//     password: {
//       type: String,
//       required: true,
//       length: { min: 3, max: 32 },
//     },
//   });
//   return user.validate(data);
// };