import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import asyncHandler from "express-async-handler";


export const getUsers = asyncHandler (async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

export const createUser = asyncHandler (async (req, res) => {

    const username = req.body.username
    const password = req.body.password
    const gender = req.body.gender
    const sizing = req.body.sizing

    const userExists = await User.findOne({username})

    if(userExists){
        res.status(400).json("User already exists")
    }
    
    //Hash Password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

   // Create user
    const user = await User.create({
        username,
        password: hashedPassword,
        gender,
        sizing
    })

    if (user) {
        res.status(201).json({
        _id: user.id,
        name: user.username,
        gender: user.gender,
        sizing: user.sizing
        })
    } else {
        res.status(400).json('Invalid user data')
    }
})

export const loginUser = asyncHandler (async (req, res) =>{
    const username = req.body.username
    const password = req.body.password

    const user = await User.findOne({username})

    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            name: user.username,
            gender: user.gender,
            sizing: user.sizing,
        })
    } else{
        res.status(400).json("Invalid Credentials")
    }

})

export const getUserId = asyncHandler (async (req, res) => {
    try {
        const user = await User.findById(req.params.id)

        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

export const deleteUser = asyncHandler (async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

export const updateUser = asyncHandler (async (req, res) => {

    const username = req.body.username
    const password = req.body.password
    const user = await User.findById(req.params.id);

    if(user && (await bcrypt.compare(password, user.password))){
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })

        res.status(200).json(updatedUser)
    } else{
        res.status(400).json("Invalid Credentials")
    }
})

 