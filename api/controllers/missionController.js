const mongoose = require('mongoose')
const Mission = require('../models/missionModel')

//GET ALL MISSIONS 
exports.getAllmissions = async(req, res) => {
    const missions = await Mission.find().sort({dateCreated: 1})
    res.status(200).json(missions)
}

//GET A MISSION
exports.getMission = async(req, res) => {
    const {id} = req.params
    if(!mongoose.isValidObjectId(id)){
        return res.status(404).json({error: " No such mission"})
    }
    const mission = await Mission.findById(id)
    if(!mission) {
        return res.status(404).json({error: "No such mission"})
    }
    res.status(200).json(mission)
}

//CREATE A MISSION
exports.createMission = async(req, res) => {
    const { geoJSON} = req.body
        //add doc to DB
    try {
        const mission = await Mission.create({geoJSON})
        res.status(200).json(mission)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

//UPDATE MISSION
exports.updateMission = async(req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: " No such workout"})
    }
    const mission = await Mission.findOneAndUpdate({_id: id}, {...req.body})
    if(!mission) {
        return res.status(400).json({error: "No such mission"})
    }
    res.status(200).json(mission)
}

//DELETE A MISSION
exports.deleteMission = async(req, res) => {
    const {id} = req.params
    if(!mongoose.isValidObjectId(id)){
        return res.status(404).json({error: " No such mission"})
    }
    const mission = await Mission.findOneAndDelete({_id: id})
    if(!mission) {
        return res.status(400).json({error: "No such mission"})
    }
    res.status(200).json(mission)
}