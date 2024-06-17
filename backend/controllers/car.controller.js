const CarModel = require("../models/car.model")

const addCar=async (req,res)=>{
    try {
        const user=await CarModel.create(req.body)
        res.status(201).json(user)
    } catch (error) {
        console.log(error)
        res.status(400).json({"message":error.message})
    }
}

async function getAllCars(req,res){
    try {
        const cars=await CarModel.find()
        res.status(200).json(cars)
    } catch (error) {
        console.log(error)
        res.status(400).json({"message":error.message})
    }
}

module.exports={addCar,getAllCars}