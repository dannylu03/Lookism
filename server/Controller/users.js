import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";


// Need Better Privacy Protection Here (Don't send all user information. Actually we don't even need this, it's just used for tesing)
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
    const info = req.body.info

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
        info
    })

    if (user) {
        res.status(201).json({
        _id: user.id,
        name: user.username,
        info: user.info,
        token: generateToken(user._id)
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
            info: user.info,
            token: generateToken(user._id)
        })
    } else{
        res.status(400).json("Invalid Credentials")
    }

})

export const getUserId = asyncHandler (async (req, res) => {

    const user = await User.findById(req.params.id)

    if(!user){
        res.status(400).json("User not found")
    }

    try {
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

export const updateUser = asyncHandler (async (req, res) => {
    
    const user = await User.findById(req.params.id)
    const username = req.body.username
    const password = req.body.password

    try{
        if(username){
            user.username = username
        }
        if(password){
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)
            user.password = hashedPassword
        }
        user.save()
        res.status(200).json(
            user.username
        )
    } catch(error){
        res.status(400).json("Invalid Credentials")
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


const generateToken = (id) =>{
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}
