import Info from "../models/userinfo.model.js";
import User from "../models/user.model.js";
import asyncHandler from "express-async-handler";

export const createInfo = async (req, res) => {

    const name = req.body.name
    const gender = req.body.gender
    const tags = req.body.tags
    const sizing = req.body.sizing
    const personalphotos = req.body.personalphotos
    const likedphotos = req.body.likedphotos

    const infoExists = await Info.findOne({name})

    if(infoExists){
        res.status(400).json("Card already exists")
    }

    const info = await Info.create({
        name,
        user: req.user.id,
        gender,
        tags,
        sizing,
        personalphotos,
        likedphotos
    })

    try {
        res.status(200).json(info)

    } catch{
        res.status(400).json('Invalid user info data')
    }
}

export const getInfo = async (req, res) => {
    try {
        const info = await Info.find({user: req.user.id})

        res.status(200).json(info);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const deleteInfo = asyncHandler (async (req, res) => {

    const info = await Info.findById(req.params.id)

    if (!card) {
      res.status(400).json('User info not found')
    }
  
    const user = await User.findById(req.user.id)
  
    // Check for user
    if (!user) {
      res.status(401).json('User not found')
    }
  
    if (card.user.toString() !== req.user.id) {
      res.status(401).json('User not authorized')
    }

    try{
      await info.remove()

      res.status(200).json({ id: req.params.id})
    } catch(error){
      res.status(404).json({ message: error.message })
    }
})

export const updateInfo = asyncHandler (async (req, res) => {

    const info = await Info.findById(req.params.id)

    if (!info) {
      res.status(400)
      throw new Error('User Info not found')
    }

    const user = await User.findById(req.user.id)
  
    // Check for user
    if (!user) {
      res.status(401).json('User not found')
    }
  
    if (info.user.toString() !== req.user.id) {
      res.status(401).json('User not authorized')
    }

    try{ 
      const updatedInfo = await Info.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
  
      res.status(200).json(updatedInfo)
    } catch(error){
      res.status(404).json({ message: error.message })
    }
})

 