const mongoose = require ("mongoose")

const {Schema,model} = mongoose


const regSchema = new Schema({
    useremail:String,
    userpassword:String
})

const regCollection = model("regdata",regSchema)

module.exports = regCollection