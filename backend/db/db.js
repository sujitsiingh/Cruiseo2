// const mongoose=require('mongoose')
import mongoose from "mongoose";

async function dbConnect(req,res){
    const DB_URL=process.env.DB_URL
    const DB_NAME=process.env.DB_NAME
    try {
        await mongoose.connect(DB_URL+"/"+DB_NAME)
        console.log("Database Connected")
    } catch (error) {
        console.log("Connection error:",error)
    }
}

module.exports=dbConnect