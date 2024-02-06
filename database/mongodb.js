const mongoose = require("mongoose")
// const { connect } = require("mongoose")



     mongoose.connect(process.env.MONGODB)
    .then(()=>{
        console.log("Mongodb connected successfully");
    })
    .catch((error)=>{
        console.log(error);
    })


module.exports = mongoose.connection