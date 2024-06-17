// const express=require("express")
import express from "express";
import mongoose from "mongoose";
import dbConnect from "./db/db.js"
import userRouter from "./routes/user.route.js";
import carRouter from "./routes/car.route.js";
import EnquiryRouter from "./routes/enquiry.route.js";

require('dotenv').config()

const PORT=process.env.PORT || 5001

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/user",userRouter)
app.use("/car",carRouter)
app.use("/enquiry",EnquiryRouter)

dbConnect();
app.listen(PORT,()=>console.log("http://localhost:5001"))