const AdminProductCollection = require("../models/adminproduct")


exports.AdminproductsController = async(req,res)=>{
    const {Ptitle,PDesc,Pprice} =req.body
    const record = new AdminProductCollection({
        productTitle:Ptitle,
        productDesc:PDesc,
        productPrice:Pprice
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