const mongoose = require("mongoose")

const {Schema,model} = mongoose


const productSchema = new Schema({
    productTitle:String,
    productDesc:String,
    productPrice:Number,
    productStatus:{type:String,default:"Out-Of-Stock"}
})

const productColllection = model("adminproducts",productSchema)

module.exports = productColllection