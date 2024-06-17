const mongoose=require("mongoose")
const EnquiryModel = require("../models/enquiry.model")
const CarModel = require("../models/car.model")

async function postEnquiry(req,res){
    try {
        const enquiries=await EnquiryModel.create(req.body)
        res.status(201).json(enquiries)
    } catch (error) {
        console.log(error)
        res.status(400).json({"message":error.message})
    }
}
async function enquiryRes(req,res){
    try {
        const {userId}=req.params
        const enquiries=await EnquiryModel.find({userId})
        console.log(enquiries)
        const cars=await CarModel.find({bookStatus:false,
            carCity:{$in:enquiries.map(enq=>enq.city)}
        })
        res.status(200).json(cars)
    } catch (error) {
        console.log(error)
        res.status(400).json({"message":error.message})
    }
}
module.exports={postEnquiry,enquiryRes}