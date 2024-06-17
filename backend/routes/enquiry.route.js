const express=require("express")
const { enquiryRes, postEnquiry } = require("../controllers/enquiry.controller")

const EnquiryRouter=express.Router()

EnquiryRouter.post("/:userId",postEnquiry)
EnquiryRouter.get("/:userId",enquiryRes)


module.exports=EnquiryRouter