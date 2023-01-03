const mongoose = require("mongoose")

const employeeSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    }
},
{
    timestamps: true
})

module.exports = mongoose.model("Employee", employeeSchema)