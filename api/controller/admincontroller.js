const AdminProductCollection = require("../models/adminproduct")
const QueryCollection =  require("../models/query")
const nodemailer = require("nodemailer");


exports.AdminproductsController = async(req,res)=>{
    const imageName = req.file.filename
    const {Ptitle,PDesc,Pprice} =req.body
    const record = new AdminProductCollection({
        productTitle:Ptitle,
        productDesc:PDesc,
        productPrice:Pprice,
        productImage:imageName,
    })
    await record.save()
    res.json({Data:record,Message:"Successfully Add Product.👍"})
}

exports.AlladminproductController = async(req,res)=>{
   const record = await AdminProductCollection.find()
    res.json({Data:record,Message:"Successfully Fetch..."})
}

exports.AdminProductDeleteController = async (req,res)=>{
    const id = req.params.id
    await AdminProductCollection.findByIdAndDelete(id)
    res.json({Message:"Successfully Delete Product 👍"})
}

exports.AdminUpdateProductController = async(req,res)=>{
    const id = req.params.id
    const record = await AdminProductCollection.findById(id)
    res.json({Data:record})
}


exports.AdminupdatedDataController = async (req,res)=>{
    const id = req.params.id
    const {title,desc,price,Pstatus} = req.body
    await AdminProductCollection.findByIdAndUpdate(id,{
        productTitle:title,
        productDesc:desc,
        productPrice:price,
        productStatus:Pstatus
    })

    res.json({Message:"Successfully Update Product..🥳"})
}


exports.QueryDataController = async(req,res)=>{
    const record = await QueryCollection.find()
    res.json({Data:record})
}

exports.QueryReplyController = async (req,res)=>{
    const id = req.params.query
    const {mailSub,mailBody} = req.body

    const mailData = await QueryCollection.findById(id)

   

}