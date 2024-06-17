// const express=require("express")
import { express } from "express";
import { addCar, getAllCars } from "../controllers/car.controller.js";
const app = express();
// const {addCar,getAllCars} = require("../controllers/car.controller")

const carRouter=app.Router()

carRouter.post("/",addCar)
carRouter.get("/",getAllCars)

module.exports=carRouter