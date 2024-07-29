const RegCollection = require("../models/reg")

exports.HomePageController = (req,res)=>{
    res.send("Home page '👤 ")
}

exports.RegDataController = async(req,res)=>{
    const {email,password} = req.body
    const record = new RegCollection({
        useremail:email,
        userpassword:password
     })

     await record.save()

     res.send({Data:record,Message:"Successfully Registration 🥳"})


}

exports.LoginDataController = async(req,res)=>{
    const {email,password} = req.body
    const userCheck = await RegCollection.findOne({useremail:email})
    if(userCheck!==null){
        if(userCheck.userpassword ==password){
            res.json({Data:userCheck,Message:"Successfully Login.🥳"})
        }else{
            res.json({Message:"Email & Password did not match.😕"})
        }
        
    }else{
        res.json({Message:"Email & Password did not match.😕"})
    }
}