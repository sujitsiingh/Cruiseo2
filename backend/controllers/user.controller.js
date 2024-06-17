const UserModel = require("../models/user.model")

const addUser=async (req,res)=>{
    try {
        const user=await UserModel.create(req.body)
        res.status(201).json(user)
    } catch (error) {
        console.log(error)
        res.status(400).json({"message":error.message})
    }
}

module.exports=addUser