const AdminProductCollection = require("../models/adminproduct")
const QueryCollection =  require("../models/query")
const RegCollection = require("../models/reg")
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

    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
          user:"devanshukumawat063@gmail.com", 
            pass:"bchiseqhavgeaomi", 
        },
      });

      const info = await transporter.sendMail({
        from: "devanshukumawat063@gmail.com", // sender address
        to: mailData.UserEmail , // list of receivers
        subject: mailSub, // Subject line
        text: mailBody, // plain text body
        html: "<b>Hello world?</b>", // html body
      });

}


exports.deleteQueryController = async (req,res)=>{
    const id = req.params.id
    await QueryCollection.findByIdAndDelete(id)
    res.json({Message:"Successfully Delete..👆"})
}


exports.UserDataController = async(req,res)=>{
    const record = await RegCollection.find()
    res.json({Data:record})
}